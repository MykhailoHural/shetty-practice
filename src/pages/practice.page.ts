import { BasePage } from "./base.page";
import { RadioButtonComponent } from "./component/radioButton.page";
import { Page } from "@playwright/test";

export class PracticePage extends BasePage {
  readonly radioButtonComponent: RadioButtonComponent;
  constructor(page: Page) {
    super(page);
    this.radioButtonComponent = new RadioButtonComponent(page);
  }

  async open(){
    await this.navigate('https://rahulshettyacademy.com/AutomationPractice/')
  }
}
