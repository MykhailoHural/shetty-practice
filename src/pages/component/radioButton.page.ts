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

  async selectRadioButton(value: number | string) {
    let radioButton: Locator;

    if (typeof value === "number") {
      radioButton = this.radioButtons.nth(value);
    } else {
      radioButton = this.radioButtonSection
        .locator("label")
        .filter({ hasText: value })
        .locator("input");
    }
    await radioButton.click();
    return radioButton;
  }
}
