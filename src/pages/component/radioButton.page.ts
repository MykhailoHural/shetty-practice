import { Locator, Page } from "@playwright/test";

export class RadioButtonComponent {
  readonly radioButtonSection: Locator;
  readonly radioButtonTitle: Locator;
  readonly radioButtons: Locator;

  constructor(page: Page) {
    this.radioButtonSection = page.locator("#radio-btn-example");
    this.radioButtonTitle = this.radioButtonSection.getByText(
      "Radio Button Example"
    );
    this.radioButtons = this.radioButtonSection.locator(
      "input[type = 'radio']"
    );
  }

  async selectRadioButtonByLabel(label: string) {
    const button = this.radioButtonSection
      .locator("label")
      .filter({ hasText: label })
      .locator("input");

    await button.check();
    return button;
  }

  async selectRadioButtonByIndex(index: number) {
    const button = this.radioButtons.nth(index);
    await button.check();
    return button;
  }
}
