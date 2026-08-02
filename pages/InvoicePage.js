const BasePage = require("./BasePage");

/**
 * InvoicePage
 * Handles invoice page interactions.
 */
class InvoicePage extends BasePage {
  constructor(page) {
    super(page);

    // Locators
    this.invoiceContainer = '[data-test="invoice-page"]';
    this.invoiceNumber = '[data-test="invoice-number"]';
    this.invoiceStatus = '[data-test="invoice-status"]';
    this.downloadButton = '[data-test="download-invoice"]';
  }

  /**
   * Get invoice number.
   */
  async getInvoiceNumber() {
    await this.waitForVisible(this.invoiceNumber);
    return this.getText(this.invoiceNumber);
  }

  /**
   * Get invoice status.
   */
  async getInvoiceStatus() {
    await this.waitForVisible(this.invoiceStatus);
    return this.getText(this.invoiceStatus);
  }

  /**
   * Download invoice.
   */
  async downloadInvoice() {
    const downloadPromise = this.page.waitForEvent("download");

    await this.click(this.downloadButton);

    return downloadPromise;
  }

  /**
   * Verify invoice page is displayed.
   */
  async isInvoiceDisplayed() {
    return this.isVisible(this.invoiceContainer);
  }
}

module.exports = InvoicePage;