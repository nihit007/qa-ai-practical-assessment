const ApiClient = require("./ApiClient");

/**
 * InvoiceAPI
 * Handles reusable invoice-related API operations.
 */
class InvoiceAPI extends ApiClient {
  constructor(apiRequestContext) {
    super(apiRequestContext);

    // Centralized endpoints
 this.endpoints = {
  invoices: "/invoices",
  guestInvoice: "/invoices/guest",
  invoiceById: "/invoices/{invoiceId}",
  verifyInvoice: "/invoices/{invoiceId}/verify",
  downloadInvoice: "/invoices/{invoiceId}/download",
};
  }

  async createGuestInvoice(invoiceData) {
  return this.post(
    this.endpoints.guestInvoice,
    invoiceData
  );
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
      if (value !== undefined && value !== null && value !== "") {
        searchParams.append(key, value);
      }
    });

    const queryString = searchParams.toString();

    return queryString ? `?${queryString}` : "";
  }

  /**
   * Create invoice.
   * @param {Object} invoiceData
   */
async createInvoice(invoiceData, token) {
  return this.post(
    this.endpoints.invoices,
    invoiceData,
    {
      Authorization: `Bearer ${token}`,
    }
  );
}

  /**
   * Get invoice by ID.
   * @param {number|string} invoiceId
   */
  async getInvoice(invoiceId) {
    if (!invoiceId) {
      throw new Error("Invoice ID is required.");
    }

    return this.get(
      this.buildEndpoint(this.endpoints.invoiceById, {
        invoiceId,
      })
    );
  }

  /**
   * Get all invoices.
   * @param {Object} query
   */
  async getAllInvoices(query = {}) {
    return this.get(
      `${this.endpoints.invoices}${this.buildQuery(query)}`
    );
  }

  /**
   * Verify invoice.
   * @param {number|string} invoiceId
   */
  async verifyInvoice(invoiceId) {
    if (!invoiceId) {
      throw new Error("Invoice ID is required.");
    }

    return this.post(
      this.buildEndpoint(this.endpoints.verifyInvoice, {
        invoiceId,
      })
    );
  }

  /**
   * Download invoice.
   * @param {number|string} invoiceId
   */
  async downloadInvoice(invoiceId) {
    if (!invoiceId) {
      throw new Error("Invoice ID is required.");
    }

    return this.get(
      this.buildEndpoint(this.endpoints.downloadInvoice, {
        invoiceId,
      })
    );
  }
}

module.exports = InvoiceAPI;