import { Locator, Page } from "@playwright/test";

export class RadioButtonComponent {
  readonly RadioButtonSection: Locator;

  constructor(page: Page) {
    this.RadioButtonSection = page.locator("#radio-btn-example");
  }
}
