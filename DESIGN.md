# DESIGN.md

## Visual Direction

**Modern SaaS · Data-Driven · Clean · Confident**

A contemporary digital product aesthetic built around clarity, trust, and intelligent technology. The interface should feel light, precise, and approachable—not overly corporate, futuristic, or visually noisy.

The visual language combines:
- Bright, confident blues that communicate technology, clarity, and reliability.
- Large white surfaces and restrained neutral tones that keep the interface calm.
- Small, high-contrast accent moments to guide attention toward important actions or data.
- Rounded surfaces, subtle depth, and clean data visualizations.
- Spacious typography and deliberate visual hierarchy.

Use this as a visual system only. Do not reproduce the reference websites' section order, page composition, content, or specific layouts.

---

## 1. Identity

### Product character
A modern technology product with a data-oriented and intelligent personality. It should communicate capability and confidence while remaining easy to understand.

### Desired feeling
- **Trustworthy:** structured, consistent, and visually stable.
- **Intelligent:** data is presented clearly, with purposeful visualizations.
- **Approachable:** friendly shapes, soft surfaces, and readable language.
- **Optimistic:** fresh blue tones, bright highlights, and generous whitespace.
- **Premium:** restrained styling, precise spacing, and no unnecessary decoration.

### Avoid
- Heavy enterprise visuals or dense admin-dashboard styling.
- Excessive gradients, glass effects, or glowing elements.
- Too many accent colors competing for attention.
- Decorative illustrations that do not explain or support the product.
- Overly playful shapes or exaggerated shadows.

---

## 2. Palette

The values below are suggested design tokens based on the visual character of the references. Treat them as a coherent starting palette, not as exact color sampling.

| Token | Suggested value | Usage |
|---|---|---|
| Primary Blue | `#1677E8` | Primary actions, active states, key data, links, and important highlights |
| Deep Blue | `#0757C9` | Strong emphasis, hover states, and high-contrast blue surfaces |
| Sky Blue | `#70C5F4` | Soft backgrounds, supporting graphics, and secondary data accents |
| Pale Blue | `#EAF6FD` | Tinted panels, chart areas, and subtle section backgrounds |
| Accent Lime | `#C8F45A` | Small attention cues, status highlights, badges, or a single emphasized metric |
| Ink | `#111827` | Main headings, body text, and high-priority information |
| Secondary Text | `#687386` | Descriptions, metadata, labels, and supporting information |
| Border | `#E8EDF2` | Subtle dividers, card outlines, and input boundaries |
| Surface | `#FFFFFF` | Main cards, content surfaces, and primary canvas |
| Soft Surface | `#F5F7FA` | Secondary panels and quiet content groupings |

### Color rules
- White should remain the dominant surface.
- Blue is the primary brand and interaction color; do not use it on every component.
- Use pale blue to create grouping without making the interface feel boxed in.
- Lime is a controlled accent, not a second primary color. Reserve it for a few meaningful highlights.
- Use dark ink for readable contrast rather than pure black everywhere.
- Keep gradients mostly within large visual areas or selected highlights. Prefer subtle blue-to-sky transitions.

---

## 3. Typography

### Font family
Use **Inter** as the single type family throughout the interface.

Inter provides a neutral, contemporary sans-serif voice suitable for product interfaces, marketing surfaces, metrics, and data-heavy content.

### Type behavior
- Headings: 600–700, with compact but comfortable line height.
- Body: 400, optimized for readability.
- Supporting text and labels: 400–500.
- Buttons: 500–600.
- Large metrics and numeric values: **400–500**. Keep large numbers visually confident without making them excessively bold.
- Navigation: 400–500.

### Hierarchy
Use size, spacing, and contrast to establish hierarchy before relying on font weight. Headlines can be large and direct; descriptions should be quieter and shorter.

Avoid mixing multiple font families, excessive italics, overly tight letter spacing, and bolding every metric.

---

## 4. Components

### Cards and surfaces
- Use rounded rectangles with a consistent radius, generally 16–24px for primary cards.
- Smaller UI elements can use 10–14px radii.
- Prefer white surfaces with a subtle border or very soft shadow.
- Use pale-blue surfaces selectively to distinguish important groups.
- Maintain generous internal padding and clear alignment.
- Avoid stacking multiple borders and shadows on the same component.

### Charts and data visualization
- Charts should feel minimal, legible, and calm.
- Use blue for the primary data series.
- Use pale gray or pale blue for comparison and background series.
- Use lime only to call out a meaningful data point or status.
- Keep grid lines faint and labels concise.
- Prefer rounded bar ends and smooth, restrained line treatments.
- Highlight the most important value; do not give every data point equal visual emphasis.
- Always pair color with labels, values, or other cues so meaning does not depend on color alone.

### Meters and progress indicators
- Use simple tracks with rounded ends.
- Keep inactive tracks light gray or pale blue.
- Use primary blue for progress and lime for exceptional or selected highlights.
- Make the current value easy to scan.
- Avoid overly thick rings, excessive gradients, or decorative gauge details.

### Buttons
- **Primary:** blue filled surface, white label, rounded shape.
- **Secondary:** white surface with a subtle border and dark label.
- **Tertiary:** text-based action with minimal visual weight.
- Use a consistent height and horizontal padding.
- Button radius should feel friendly, generally 10–14px or a full pill when the context calls for it.
- Hover and pressed states should be clear but restrained.
- Reserve lime for a deliberate special action, not every primary button.

### Inputs and controls
- White or very pale neutral surface.
- Subtle border with a clear blue focus state.
- Rounded corners consistent with the button and card system.
- Labels and helper text should remain readable and visually secondary.

### Badges and status
- Compact, softly rounded labels.
- Use pale blue or neutral backgrounds for standard statuses.
- Use lime sparingly for positive or highlighted states.
- Keep badge text short and avoid turning every metadata item into a badge.

---

## 5. Density

**Density: Low to Medium**

The interface should feel spacious and easy to scan, while still presenting meaningful information.

- Prioritize whitespace around major content groups.
- Keep paragraphs short and supporting copy concise.
- Use clear separation between primary information and metadata.
- Avoid excessive card nesting.
- Do not enlarge every element; preserve a clear scale between headings, content, and controls.
- Data-rich areas may use medium density, but should remain structured with consistent alignment and restrained labels.
- On smaller screens, simplify secondary details rather than shrinking everything.

The goal is not empty minimalism. It is purposeful space that makes important information easier to understand.

---

## 6. Visual Dials

| Dial | Level | Direction |
|---|---:|---|
| ENERGY | **2/3** | Fresh and optimistic, driven by blue surfaces and selective bright accents. Avoid a loud or overly playful look. |
| RHYTHM | **2/3** | Balanced pacing with clear shifts between spacious areas and focused data components. Avoid repetitive card grids. |
| MOTION | **2/3** | Subtle, functional transitions that clarify state and interaction. Avoid motion used only for decoration. |

### Motion principles
- Use short, smooth transitions for hover, focus, selection, and state changes.
- Small chart animations may reveal data progressively when they help comprehension.
- Use gentle movement and opacity changes rather than dramatic parallax or bouncing.
- Respect reduced-motion preferences.
- Motion should communicate feedback, hierarchy, or continuity—not compete with the content.

---

## 7. Consistency Checklist

Before approving a screen, check that:

- [ ] White and neutral surfaces remain dominant.
- [ ] Blue is used consistently for primary actions and important data.
- [ ] Lime appears only as a selective accent.
- [ ] Inter is the only font family.
- [ ] Large numeric values use normal or medium weight.
- [ ] Cards have consistent radii and restrained depth.
- [ ] Charts are readable without relying on color alone.
- [ ] Spacing creates a clear hierarchy without wasting space.
- [ ] Visual density remains low to medium.
- [ ] Motion is subtle and purposeful.
- [ ] The resulting composition is original and does not reproduce the reference layouts or content.
