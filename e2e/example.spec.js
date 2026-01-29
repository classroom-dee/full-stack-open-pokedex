const { test, describe, expect } = require('@playwright/test')

describe('Pokedex', () => {
  // beforeEach('Go to page first', async () => {
  //   await page.goto('')
  // })
  test('front page can be opened', async ({ page }) => {
    await page.goto('')
    await expect(page.getByText('ivysaur')).toBeVisible()
    await expect(page.getByText('Pokémon and Pokémon character names are trademarks of Nintendo.')).toBeVisible()
  }),

  test('page shows correct content', async ({ page }) => {
    await page.goto('/pokemon/vulpix')
    await expect(page.getByText('vulpix')).toBeVisible()
    await expect(page.getByText('Drought')).toBeVisible()
    await expect(page.getByText('Flash Fire')).toBeVisible()
  })
})


