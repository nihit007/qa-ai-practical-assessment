const ApiClient = require("./ApiClient");

/**
 * ProductAPI
 * Handles all product-related API operations.
 */
class ProductAPI extends ApiClient {
  constructor(apiRequestContext) {
    super(apiRequestContext);

    // Centralized endpoints
    this.endpoints = {
      products: "/products",
      productById: "/products/{id}",
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
   * Build query string.
   * @param {Object} query
   * @returns {string}
   */
  buildQuery(query = {}) {
    const searchParams = new URLSearchParams();

    Object.entries(query).forEach(([key, value]) => {
      if (
        value !== undefined &&
        value !== null &&
        value !== ""
      ) {
        searchParams.append(key, value);
      }
    });

    const queryString = searchParams.toString();

    return queryString ? `?${queryString}` : "";
  }

  /**
   * Get all products.
   * Supports optional query parameters like search, sort, page, category, brand, etc.
   * @param {Object} query
   */
  async getAllProducts(query = {}) {
    return this.get(
      `${this.endpoints.products}${this.buildQuery(query)}`
    );
  }

  /**
   * Get product by ID.
   * @param {number|string} productId
   */
  async getProductById(productId) {
    if (!productId) {
      throw new Error("Product ID is required.");
    }

    return this.get(
      this.buildEndpoint(this.endpoints.productById, {
        id: productId,
      })
    );
  }

  /**
   * Search products by name.
   * @param {string} searchTerm
   */
  async searchProducts(searchTerm) {
    if (!searchTerm || !searchTerm.trim()) {
      throw new Error("Search term is required.");
    }

    return this.getAllProducts({
      search: searchTerm.trim(),
    });
  }

  /**
   * Filter products by category.
   * @param {string} category
   */
  async getProductsByCategory(category) {
    if (!category || !category.trim()) {
      throw new Error("Category is required.");
    }

    return this.getAllProducts({
      category: category.trim(),
    });
  }

  /**
   * Filter products by brand.
   * @param {string} brand
   */
  async getProductsByBrand(brand) {
    if (!brand || !brand.trim()) {
      throw new Error("Brand is required.");
    }

    return this.getAllProducts({
      brand: brand.trim(),
    });
  }
}

module.exports = ProductAPI;