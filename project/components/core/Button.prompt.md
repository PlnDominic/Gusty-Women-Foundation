Pill-shaped CTA button — use for every primary/secondary action; primary purple fill drives applications, secondary/outline for "Learn More".

```jsx
<Button variant="primary" size="lg" iconRight={<ArrowRight />}>Apply Now</Button>
<Button variant="secondary">Learn More</Button>
<Button variant="outline-light">Learn More</Button> {/* on purple/photo */}
```

Variants: `primary` (purple), `secondary` (outlined purple, fills on hover), `gold`, `magenta`, `on-dark` (white on purple), `outline-light`, `ghost`. Sizes `sm | md | lg`. Hover lifts -2px and darkens; press settles to scale 0.98. Always pill (`--radius-pill`).
