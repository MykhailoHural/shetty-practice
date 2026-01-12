import { test } from "@playwright/test";
import { PracticePage } from "../pages/practice.page";

test.describe("Validation of the radio buttons", () => {
  test("Select radio button 1", async ({ page }) => {
    const practicePage = new PracticePage(page);

    await practicePage.open();
  });
});
