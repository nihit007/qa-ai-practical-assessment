function generateUser() {
  const timestamp = Date.now();

  return {
    first_name: "Nihit",
    last_name: "Garg",
    phone: "9876543210",
    dob: "1998-12-17",
    password: `Play${Math.floor(Math.random() * 100000)}@123A`,
    email: `nihit${timestamp}@example.com`,

    address: {
      street: "Main Street",
      house_number: "42",
      city: "Ghaziabad",
      state: "Uttar Pradesh",
      country: "India",
      postal_code: "201001",
    },
  };
}

module.exports = { generateUser };