import { BasePage } from "./base.page";
import { RadioButtonComponent } from "./component/radioButton.page";
import { CheckBoxComponent } from "./component/checkBox.page";
import { Page } from "@playwright/test";

export class PracticePage extends BasePage {
  readonly radioButtonComponent: RadioButtonComponent;
  readonly checkBoxComponent : CheckBoxComponent;
  constructor(page: Page) {
    super(page);
    this.radioButtonComponent = new RadioButtonComponent(page);
    this.checkBoxComponent = new CheckBoxComponent(page)
  }

  async open(){
    await this.navigate('https://rahulshettyacademy.com/AutomationPractice/')
  }
}
