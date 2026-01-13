import { Locator, Page } from "@playwright/test";

export class CheckBoxComponent {
  readonly checkBoxSection: Locator;
  readonly checkBoxTitle: Locator;
  readonly checkBoxes: Locator;

  constructor(page: Page) {
    this.checkBoxSection = page.locator("#checkbox-example");
    this.checkBoxTitle = this.checkBoxSection.getByText("Checkbox Example");
    this.checkBoxes = this.checkBoxSection.locator('input[type="checkbox"]');
  }

  async selectCheckBox(value: number | string) {
    let checkBox: Locator;

    if (typeof value === "number") {
      checkBox = this.checkBoxes.nth(value);
    } else {
      checkBox = this.checkBoxSection
        .locator("label")
        .filter({ hasText: value })
        .locator("input");
    }

    await checkBox.check();
    return checkBox;
  }
}
