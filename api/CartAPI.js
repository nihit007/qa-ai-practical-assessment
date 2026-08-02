const ApiClient = require("./ApiClient");

/**
 * CartAPI
 * Handles reusable cart-related API operations.
 */
class CartAPI extends ApiClient {
  constructor(apiRequestContext) {
    super(apiRequestContext);

    // Centralized endpoints
    this.endpoints = {
      carts: "/carts",
      cartById: "/carts/{cartId}",
      cartItems: "/carts/{cartId}/items",
      cartItemById: "/carts/{cartId}/items/{itemId}",
    };
  }

  /**
   * Build endpoint by replacing placeholders.
   * @param {string} endpoint
   * @param {Object} params
   * @returns {string}
   */
  buildEndpoint(endpoint, params = {}) {
    return endpoint.replace(/\{(\w+)\}/g, (_, key) => {
      if (!(key in params)) {
        throw new Error(`Missing endpoint parameter: ${key}`);
      }

      return encodeURIComponent(params[key]);
    });
  }

  /**
   * Create a new cart.
   * @param {Object} cartData
   */
  async createCart(cartData = {}) {
    return this.post(this.endpoints.carts, cartData);
  }

  /**
   * Get cart details.
   * @param {number|string} cartId
   */
  async getCart(cartId) {
    if (!cartId) {
      throw new Error("Cart ID is required.");
    }

    return this.get(
      this.buildEndpoint(this.endpoints.cartById, {
        cartId,
      })
    );
  }

  /**
   * Add product to cart.
   * @param {number|string} cartId
   * @param {Object} itemData
   */
  async addItemToCart(cartId, itemData) {
    if (!cartId) {
      throw new Error("Cart ID is required.");
    }

    if (!itemData || typeof itemData !== "object") {
      throw new Error("Item data is required.");
    }

    return this.post(
      this.buildEndpoint(this.endpoints.cartItems, {
        cartId,
      }),
      itemData
    );
  }

  /**
   * Update cart item.
   * @param {number|string} cartId
   * @param {number|string} itemId
   * @param {Object} itemData
   */
  async updateCartItem(cartId, itemId, itemData) {
    if (!cartId) {
      throw new Error("Cart ID is required.");
    }

    if (!itemId) {
      throw new Error("Item ID is required.");
    }

    if (!itemData || typeof itemData !== "object") {
      throw new Error("Item data is required.");
    }

    return this.put(
      this.buildEndpoint(this.endpoints.cartItemById, {
        cartId,
        itemId,
      }),
      itemData
    );
  }

  /**
   * Remove item from cart.
   * @param {number|string} cartId
   * @param {number|string} itemId
   */
  async removeCartItem(cartId, itemId) {
    if (!cartId) {
      throw new Error("Cart ID is required.");
    }

    if (!itemId) {
      throw new Error("Item ID is required.");
    }

    return this.delete(
      this.buildEndpoint(this.endpoints.cartItemById, {
        cartId,
        itemId,
      })
    );
  }

  /**
   * Delete cart.
   * @param {number|string} cartId
   */
  async deleteCart(cartId) {
    if (!cartId) {
      throw new Error("Cart ID is required.");
    }

    return this.delete(
      this.buildEndpoint(this.endpoints.cartById, {
        cartId,
      })
    );
  }
}

module.exports = CartAPI;