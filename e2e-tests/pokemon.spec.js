const { test, describe, expect } = require('@playwright/test')

describe('Pokedex', () => {
  test('front page can be opened', async ({ page }) => {
    await page.goto('')
    await expect(page.getByText('ivysaur')).toBeVisible()
    await expect(page.getByText('Pokémon and Pokémon character names are trademarks of Nintendo.')).toBeVisible()
  })
})

describe('Pokemon page', () => {
  test('Checking Charmander page', async ({ page }) => {
    await page.goto('')
    await page.getByText('charmander').click()
    await expect(page.getByText('charmander')).toBeVisible()
    await expect(page.getByText('solar power')).toBeVisible()
    await expect(page.getByText('blaze')).toBeVisible()
  })
})