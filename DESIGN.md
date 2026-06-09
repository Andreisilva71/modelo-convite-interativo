---
name: Serene Celebration
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f3'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#44474d'
  inverse-surface: '#2f3131'
  inverse-on-surface: '#f0f1f1'
  outline: '#75777e'
  outline-variant: '#c5c6ce'
  surface-tint: '#4f5e7e'
  primary: '#041632'
  on-primary: '#ffffff'
  primary-container: '#1b2b48'
  on-primary-container: '#8393b5'
  inverse-primary: '#b7c7eb'
  secondary: '#43617d'
  on-secondary: '#ffffff'
  secondary-container: '#beddfe'
  on-secondary-container: '#44627e'
  tertiary: '#0b1824'
  on-tertiary: '#ffffff'
  tertiary-container: '#202c39'
  on-tertiary-container: '#8793a3'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d7e2ff'
  primary-fixed-dim: '#b7c7eb'
  on-primary-fixed: '#091b37'
  on-primary-fixed-variant: '#374765'
  secondary-fixed: '#cee5ff'
  secondary-fixed-dim: '#abcaea'
  on-secondary-fixed: '#001d32'
  on-secondary-fixed-variant: '#2b4964'
  tertiary-fixed: '#d7e4f5'
  tertiary-fixed-dim: '#bbc8d9'
  on-tertiary-fixed: '#101d29'
  on-tertiary-fixed-variant: '#3b4856'
  background: '#f9f9f9'
  on-background: '#1a1c1c'
  surface-variant: '#e2e2e2'
typography:
  display-lg:
    fontFamily: EB Garamond
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: EB Garamond
    fontSize: 32px
    fontWeight: '500'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: EB Garamond
    fontSize: 28px
    fontWeight: '500'
    lineHeight: '1.2'
  headline-md:
    fontFamily: EB Garamond
    fontSize: 24px
    fontWeight: '500'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-md:
    fontFamily: Manrope
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Manrope
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1200px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
---

## Brand & Style
The visual identity of this design system is rooted in **Modern Editorial Elegance**. It balances the organic, romantic nature of watercolor florals with a structured, professional layout. The target audience seeks a premium, celebratory experience that feels personal yet sophisticated.

The aesthetic leans into **Modern Minimalism** with a hint of **Tactile Stationery**. By using generous whitespace and high-quality typography, the UI mimics a physical, high-end paper invitation while maintaining the fluidity of a digital interface. The emotional response should be one of calm, prestige, and joyous anticipation.

## Colors
The palette is directly inspired by classic botanical illustration. 
- **Primary (Navy Blue):** Used for primary text, deep borders, and high-impact calls to action. It provides the necessary contrast against the light backgrounds.
- **Secondary (Steel Blue):** Used for interactive elements, secondary icons, and subtle decorative accents.
- **Tertiary (Dusty Blue):** Ideal for background fills, dividers, and disabled states.
- **Neutral (Paper White):** A warm, off-white base that prevents the harshness of pure digital white, evoking the texture of heavy cardstock.

## Typography
This design system employs a **transitional pairing** strategy. 
- **Headlines:** Use *EB Garamond* to provide an authoritative, timeless, and sophisticated feel. It should be used for names, event titles, and section headers.
- **Body & UI Elements:** Use *Manrope* for its exceptional legibility and modern geometric construction. This keeps the technical aspects of the invitation (dates, RSVP forms, locations) feeling clean and effortless.
- **Stylistic Note:** Headlines benefit from slightly tighter letter-spacing, while labels and small caps should be tracked out for a premium, "spaced" look.

## Layout & Spacing
The layout follows a **Fixed Grid** philosophy for the central invitation content to preserve the "card" aesthetic, surrounded by a fluid container for broader screen compatibility.

- **Rhythm:** An 8px base unit drives all spacing. 
- **Desktop:** A 12-column grid with 64px side margins. Content is often centered to emphasize the formal nature of the event.
- **Mobile:** A 4-column grid with 16px margins. Vertical stacks are preferred, with generous padding (32px+) between distinct sections to maintain the "light" feel.
- **White Space:** Information density should be kept low. Do not fear "empty" space; it is a key luxury signifier in this design system.

## Elevation & Depth
Depth is achieved through **Soft Ambient Shadows** and **Tonal Layering**. 

- **The Base:** The bottom-most layer is the Paper White (#FDFDFD).
- **The Card:** Elevated components (like the main invitation) use a very soft, multi-layered shadow: `0px 4px 20px rgba(27, 43, 72, 0.05)`. The tint of the shadow should always be a desaturated version of the Primary Navy, never pure black.
- **Interactive States:** Buttons and input fields use a subtle "lift" on hover, increasing the shadow's blur radius slightly. 
- **Glassmorphism:** Use sparingly for navigation overlays or modals, with a 12px backdrop blur and a high-transparency Steel Blue tint.

## Shapes
The shape language is **Soft and Organic**. 
- **Standard Corners:** Most UI components (cards, buttons) use a 0.5rem (8px) radius. 
- **Large Components:** Hero sections or main invitation containers can scale up to `rounded-xl` (1.5rem / 24px) to emphasize a friendly, welcoming character.
- **Floral Integration:** Visual elements like image containers for floral photography should use either a full circle (pill-shaped) or the 1.5rem corner radius to harmonize with the curves of the flowers.

## Components
- **Buttons:** Primary buttons feature a solid Primary Navy fill with white text. Secondary buttons use a Steel Blue outline with a 1px weight. All buttons should have a minimum height of 48px to feel premium and touch-friendly.
- **Inputs:** Use "Floating Label" style fields. The border is a 1px line in Tertiary Blue, which thickens and changes to Primary Navy when focused. 
- **Cards:** Use the Neutral Paper color for the background. They should have a subtle 1px border in a very light Steel Blue (`#E1E8F0`) to define edges without adding visual weight.
- **Chips/Badges:** Use for "Required" or "New" tags. These should have a light Steel Blue background with deep Navy text, using a `rounded-full` (pill) shape.
- **Dividers:** Instead of solid lines, use 1px lines that fade out at the ends (linear gradient) to maintain the airy, light feeling of the design system.