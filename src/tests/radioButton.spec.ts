import { test, expect } from "@playwright/test";
import { PracticePage } from "../pages/practice.page";

test.describe("Validation of the radio buttons", () => {

  test('All radio buttons are uchecked', async({page})=>{
    const practicePage = new PracticePage(page);

    await practicePage.open();

    const allRadioButtons = await practicePage.radioButtonComponent.radioButtons.all();
    for(const radio of allRadioButtons){
      await expect(radio).not.toBeChecked()
    }
  })
  test("Select radio button by index", async ({ page }) => {
    const practicePage = new PracticePage(page);

    await practicePage.open();
    const pressRadioButton =
      await practicePage.radioButtonComponent.selectRadioButton(2);
    await expect(pressRadioButton).toBeChecked();
  });

  test("Select radio button by label", async ({ page }) => {
    const practicePage = new PracticePage(page);

    await practicePage.open();
    const pressRadioButton =
      await practicePage.radioButtonComponent.selectRadioButton(
        "Radio1"
      );
    await expect(pressRadioButton).toBeChecked();
  });
});
