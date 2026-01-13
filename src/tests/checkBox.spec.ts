import { expect, test } from "@playwright/test";
import { PracticePage } from "../pages/practice.page";

test.describe("Validation of the check boxes", () => {
  test("All check boxes are uchecked", async ({ page }) => {
    const practicePage = new PracticePage(page);

    await practicePage.open();

    await expect(practicePage.checkBoxComponent.checkBoxSection).toBeVisible();
    await expect(practicePage.checkBoxComponent.checkBoxTitle).toHaveText(
      "Checkbox Example"
    );

    const checkBoxes = await practicePage.checkBoxComponent.checkBoxes.all();

    for (const checkBox of checkBoxes) {
      await expect(checkBox).not.toBeChecked();
    }
  });

  test("Select first check box by index", async ({ page }) => {
    const practicePage = new PracticePage(page);

    await practicePage.open();
    const selectCheckBox = await practicePage.checkBoxComponent.selectCheckBox(
      1
    );
    await expect(selectCheckBox).toBeChecked();
  });

  test("Select all check boxes", async ({ page }) => {
    const practicePage = new PracticePage(page);

    await practicePage.open();

    const checkBoxes = await practicePage.checkBoxComponent.checkBoxes.all();

    for (const checkBox of checkBoxes) {
      await checkBox.check();
    }

    for (const checkBox of checkBoxes) {
      await expect(checkBox).toBeChecked();
    }
  });

  test("Select first check box by label", async ({ page }) => {
    const practicePage = new PracticePage(page);

    await practicePage.open();
    const selectCheckBox = await practicePage.checkBoxComponent.selectCheckBox(
      'Option1'
    );
    await expect(selectCheckBox).toBeChecked();
  });
});
