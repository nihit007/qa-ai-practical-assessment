const BasePage = require("./BasePage");

class InvoicePage extends BasePage {
  constructor(page) {
    super(page);

    // User Menu
    this.userMenu =
      "//button[@id='menu']";
    this.myInvoicesOption =
      "//a[normalize-space()='My invoices']";

    // Invoice Page
    this.invoiceHeading = "//h1[text()='Invoices']";
    this.invoiceTable = "//table";
    this.invoiceRows = "//table/tbody/tr";

    // Latest Invoice
    this.latestInvoiceNumber = "//table/tbody/tr[1]/td[1]";
    this.latestBillingAddress = "//table/tbody/tr[1]/td[2]";
    this.latestInvoiceDate = "//table/tbody/tr[1]/td[3]";
    this.latestInvoiceTotal = "//table/tbody/tr[1]/td[4]";
  }

async openInvoices() {
  await this.waitForVisible(this.userMenu);
  await this.click(this.userMenu);

  await this.waitForVisible(this.myInvoicesOption);
  await this.click(this.myInvoicesOption);

  await this.waitForPageLoad();
  await this.waitForVisible(this.invoiceHeading);

  // Wait for invoices to load
  await this.page.waitForTimeout(1500);
}

  async getLatestInvoiceNumber() {
    await this.waitForVisible(this.latestInvoiceNumber);
    return (await this.getText(this.latestInvoiceNumber)).trim();
  }

  async getLatestBillingAddress() {
    await this.waitForVisible(this.latestBillingAddress);
    return (await this.getText(this.latestBillingAddress)).trim();
  }

  async getLatestInvoiceDate() {
    await this.waitForVisible(this.latestInvoiceDate);
    return (await this.getText(this.latestInvoiceDate)).trim();
  }

  async getLatestInvoiceTotal() {
    await this.waitForVisible(this.latestInvoiceTotal);
    return (await this.getText(this.latestInvoiceTotal)).trim();
  }

    async getInvoiceCount() {
    await this.waitForVisible(this.invoiceTable);

    return await this.page.locator(this.invoiceRows).count();
    }
}

module.exports = InvoicePage;