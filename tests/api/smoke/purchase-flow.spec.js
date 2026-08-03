const { test, expect } = require("@playwright/test");

const AuthAPI = require("../../../api/AuthAPI");
const ProductAPI = require("../../../api/ProductAPI");
const CartAPI = require("../../../api/CartAPI");
const InvoiceAPI = require("../../../api/InvoiceAPI");

test.describe("Purchase Flow API Tests", () => {
  test("Verify user can purchase a product and generate invoice", async ({
    request,
  }) => {
    const authAPI = new AuthAPI(request);
    const productAPI = new ProductAPI(request);
    const cartAPI = new CartAPI(request);
    const invoiceAPI = new InvoiceAPI(request);

    // ---------------------------
    // Register User
    // ---------------------------

    const email = `nihit${Date.now()}@example.com`;
    const password = "QaAutomation@12345";

    const user = {
  first_name: "Nihit",
  last_name: "Garg",

  address: {
    street: "Terry Drive",
    house_number: "123",
    city: "North Earnestinehaven",
    state: "North Dakota",
    country: "IN",
    postal_code: "201013",
  },

  phone: "9876543210",
  dob: "1998-12-17",
  email,
  password,
};
    const registerResponse = await authAPI.register(user);
    expect(registerResponse.status()).toBe(201);

    const registerBody = await registerResponse.json();

    // ---------------------------
    // Login
    // ---------------------------

    const loginResponse = await authAPI.login({
      email,
      password: user.password,
    });

    expect(loginResponse.status()).toBe(200);

    const loginBody = await loginResponse.json();

    const token = loginBody.access_token;

    expect(token).toBeTruthy();

    // ---------------------------
    // Get Products
    // ---------------------------

    const productResponse = await productAPI.getAllProducts();

    expect(productResponse.status()).toBe(200);

    const productBody = await productResponse.json();

    expect(productBody.data.length).toBeGreaterThan(0);

    const product = productBody.data.find((p) => p.in_stock);

    expect(product).toBeTruthy();

    const productId = product.id;


    // ---------------------------
    // Create Cart
    // ---------------------------

    const cartResponse = await cartAPI.createCart();

    expect(cartResponse.status()).toBe(201);

    const cartBody = await cartResponse.json();

    const cartId = cartBody.id;

    expect(cartId).toBeTruthy();


    // ---------------------------
    // Add Product To Cart
    // ---------------------------

    const addItemResponse = await cartAPI.addItemToCart(
      cartId,
      productId,
      1
    );



    expect(addItemResponse.status()).toBe(200);

    const addItemBody = await addItemResponse.json();

    expect(addItemBody.result).toContain("item");

    // ---------------------------
    // Verify Cart
    // ---------------------------

    const getCartResponse = await cartAPI.getCart(cartId);

    expect(getCartResponse.status()).toBe(200);

    const cart = await getCartResponse.json();

    expect(cart.cart_items.length).toBe(1);

    expect(cart.cart_items[0].product.id).toBe(productId);

    // ---------------------------
    // Generate Invoice
    // ---------------------------
    
const invoiceData = {
billing_street: registerBody.address.street,
billing_city: registerBody.address.city,
billing_state: registerBody.address.state,
billing_country: registerBody.address.country,
billing_postal_code: registerBody.address.postal_code,

  guest_first_name: "Nihit",
  guest_last_name: "Garg",
  guest_email: email,

  payment_method: "cash-on-delivery",
  cart_id: cartId,

  payment_details: {
    bank_name: "",
    account_name: "",
    account_number: "",
  },
};

const invoiceResponse = await invoiceAPI.createInvoice(
    invoiceData,
    token
);



expect(invoiceResponse.status()).toBe(201);

    const invoice = await invoiceResponse.json();

    expect(invoice).toBeTruthy();

  });
});