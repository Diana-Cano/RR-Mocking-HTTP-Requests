import { render, screen, waitFor } from '@testing-library/react'
import App from './App'

beforeEach(() => {
  // re-initialize data
  fetch.resetMocks()
})

test("GitHub api name renders to screen", async () => {
  fetch.mockResponseOnce(JSON.stringify({ name: "Michael Kerr" }))
  render(<App />)
  const headerEl = await waitFor(() => screen.getByRole("heading", { level: 2 }))
  expect(headerEl).toHaveTextContent("Michael Kerr")
})

test("button links to GitHub profile", async () => {
  fetch.mockResponseOnce(JSON.stringify({ html_url: "https://github.com/Olafaloofian" }))
  render(<App />)
  const linkEl = await waitFor(() => screen.getByRole("link"))
  expect(linkEl).toHaveAttribute("href", "https://github.com/Olafaloofian")
})


