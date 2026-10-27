// Rooted & Radiant 2.0 — single source of truth for event details and ticket pricing.
// Shared by the home page, the event page, the checkout and the booking API,
// so a price change here applies everywhere.

export interface TicketTier {
  id: 'early-bird' | 'regular' | 'vip'
  label: string
  price: number
  blurb: string
  // Set to false to stop selling a tier (e.g. when early bird ends) without removing it.
  available: boolean
}

// Turn ticket sales (and the event hero on the home page) on or off.
export const TICKET_SALES_OPEN = true

export const MAX_TICKETS_PER_ORDER = 10

// Tickets are paid for by Mobile Money. Buyers send the amount here, then upload a screenshot.
export const MOMO = {
  number: '0530505645',
  accountName: 'GUTSY WOMEN FOUNDATION LBG',
}

// Largest payment screenshot the server accepts (the browser shrinks photos before sending).
export const MAX_PROOF_BYTES = 4 * 1024 * 1024

export const rootedRadiant = {
  id: 'rooted-radiant-2',
  path: '/rooted-and-radiant',
  title: 'Rooted & Radiant 2.0',
  theme: 'Rooted in Her Power, Radiant in Her Joy',
  tagline: 'Unshaken. Unapologetic. Unstoppable.',
  date: 'Friday, 4th December 2026',
  dateShort: '4th December 2026',
  time: '11:00 AM',
  // Time quoted to guests in their confirmation email (arrival), ahead of the 11:00 AM start.
  arrivalTime: '10 AM',
  startISO: '2026-12-04T11:00:00+00:00',
  venue: 'Aburi Botanical Garden',
  venueLocality: 'Aburi, Eastern Region',
  flyer: '/assets/flyer-rooted-radiant-2.jpg',
  enquiryPhone: '0530505645',
  enquiryPhoneIntl: '+233530505645',
  email: 'gutsywomenfoundation@gmail.com',
  hashtags: ['#RootedAndRadiant2026', '#RootedAndRadiant2', '#GutsyWomenFoundation', '#UnshakenUnapologetic', '#WomenSupportingWomen', '#GirlsDayOut', '#AburiBotanicalGarden', '#DecemberInGhana'],
}

export const ticketTiers: TicketTier[] = [
  { id: 'early-bird', label: 'Regular Early Bird', price: 250, blurb: 'Lock in the lowest price before early bird ends.', available: true },
  { id: 'regular', label: 'Regular', price: 350, blurb: 'Full access to the Rooted & Radiant experience.', available: true },
  { id: 'vip', label: 'VIP', price: 500, blurb: 'The premium Rooted & Radiant experience.', available: true },
]

export function getTicketTier(id: unknown): TicketTier | undefined {
  return ticketTiers.find((t) => t.id === id)
}

export const LOWEST_TICKET_PRICE = Math.min(...ticketTiers.filter((t) => t.available).map((t) => t.price))

export function formatCedis(amount: number) {
  return `GH₵${amount.toLocaleString('en-US')}`
}
