import { render, fireEvent, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import SideMenuWork from '@/app/work/side_menu_work/page'

test('clicking on "Werken bij Antes" in WorkWithUs navigates to the correct page', () => {
  render(<SideMenuWork />)
  const linkElement = screen.getByTestId('link-item-werken-bij-antes')
  const anchorElement = linkElement.querySelector('a')
  const hrefAttribute = anchorElement?.getAttribute('href')
  expect(linkElement).toBeInTheDocument()
  expect(hrefAttribute).toBe('/work')
})

test('clicking on "Vacatures Antes" in WorkWithUs navigates to the correct page', () => {
  render(<SideMenuWork />)
  const linkElement = screen.getByTestId('link-item-vacatures-antes')
  const anchorElement = linkElement.querySelector('a')
  const hrefAttribute = anchorElement?.getAttribute('href')
  expect(linkElement).toBeInTheDocument()
  expect(hrefAttribute).toBe('https://werkenbijparnassiagroep.nl/vacatures/antes?_ga=2.77328083.776596900.1701802004-1970662864.1694080243')
})

test('clicking on "Solicitatieprocedure" in WorkWithUs navigates to the correct page', () => {
  render(<SideMenuWork />)
  const linkElement = screen.getByTestId('link-item-solicitatieprocedure')
  const anchorElement = linkElement.querySelector('a')
  const hrefAttribute = anchorElement?.getAttribute('href')
  expect(linkElement).toBeInTheDocument()
  expect(hrefAttribute).toBe('https://werkenbijparnassiagroep.nl/over-ons/sollicitatieprocedure')
})

test('clicking on "Arbeidsvoorwaarden" in WorkWithUs navigates to the correct page', () => {
  render(<SideMenuWork />)
  const linkElement = screen.getByTestId('link-item-arbeidsvoorwaarden')
  const anchorElement = linkElement.querySelector('a')
  const hrefAttribute = anchorElement?.getAttribute('href')
  expect(linkElement).toBeInTheDocument()
  expect(hrefAttribute).toBe('https://werkenbijparnassiagroep.nl/over-ons/jouw-arbeidsvoorwaarden')
})

test('clicking on "Flexpool" in WorkWithUs navigates to the correct page', () => {
  render(<SideMenuWork />)
  const linkElement = screen.getByTestId('link-item-flexpool')
  const anchorElement = linkElement.querySelector('a')
  const hrefAttribute = anchorElement?.getAttribute('href')
  expect(linkElement).toBeInTheDocument()
  expect(hrefAttribute).toBe('/work/Flexpool')
})

test('clicking on "Vrijwilligerswerk" in WorkWithUs navigates to the correct page', () => {
  render(<SideMenuWork />)
  const linkElement = screen.getByTestId('link-item-vrijwilligerswerk')
  const anchorElement = linkElement.querySelector('a')
  const hrefAttribute = anchorElement?.getAttribute('href')
  expect(linkElement).toBeInTheDocument()
  expect(hrefAttribute).toBe('/work/VolunteerWork')
})

test('clicking on "Job Alert" in WorkWithUs navigates to the correct page', () => {
  render(<SideMenuWork />)
  const linkElement = screen.getByTestId('link-item-job-alert')
  const anchorElement = linkElement.querySelector('a')
  const hrefAttribute = anchorElement?.getAttribute('href')
  expect(linkElement).toBeInTheDocument()
  expect(hrefAttribute).toBe('https://werkenbijparnassiagroep.nl/vacatures/job-alert')
})

test('clicking on "Werken in de wijk" in WorkWithUs navigates to the correct page', () => {
  render(<SideMenuWork />)
  const linkElement = screen.getByTestId('link-item-werken-in-de-wijk')
  const anchorElement = linkElement.querySelector('a')
  const hrefAttribute = anchorElement?.getAttribute('href')
  expect(linkElement).toBeInTheDocument()
  expect(hrefAttribute).toBe('/work/WorkWithClients')
})

test('clicking on "Werken als woonbegeleider" in WorkWithUs navigates to the correct page', () => {
  render(<SideMenuWork />)
  const linkElement = screen.getByTestId('link-item-werken-als-woonbegeleider')
  const anchorElement = linkElement.querySelector('a')
  const hrefAttribute = anchorElement?.getAttribute('href')
  expect(linkElement).toBeInTheDocument()
  expect(hrefAttribute).toBe('/work/WorkAsResidentialSupervisor')
})

test('clicking on "Werken bij Ouderpsychiatri" in WorkWithUs navigates to the correct page', () => {
  render(<SideMenuWork />)
  const linkElement = screen.getByTestId('link-item-werken-bij-ouderpsychiatri')
  const anchorElement = linkElement.querySelector('a')
  const hrefAttribute = anchorElement?.getAttribute('href')
  expect(linkElement).toBeInTheDocument()
  expect(hrefAttribute).toBe('/work/WorkAtGeriatricPsychiatry')
})