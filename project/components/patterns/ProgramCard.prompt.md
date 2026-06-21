Programme card for the Programs grid and homepage — squircle photo, status Badge, title, meta rows, CTA Button. Lifts on hover. Composes Badge + Button.

```jsx
<ProgramCard
  image="/assets/event-audience.jpg"
  title="Mentorship Masterclass — Cohort 2"
  description="Ignite • Build • Scale: turning dreams into reality."
  status="open" statusLabel="Applications Open"
  meta={[{ icon: <Calendar size={15}/>, text: '5–7 Aug 2026' }, { icon: <MapPin size={15}/>, text: 'Yota East, Legon' }]}
  ctaLabel="Apply Now" />
```

Use in 3-up grids; collapses to 1 column on mobile.
