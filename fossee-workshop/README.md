# FOSSEE Workshop Portal Redesign

## 1. What design principles guided your improvements?
The redesign was guided by a **"Luxury / Prestige"** aesthetic, aiming to elevate the FOSSEE project from a basic functional site to a world-class academic portal. Key principles included:
- **Intentional Typography**: Pairing the authoritative `Cormorant Garamond` (Serif) with the modern `Montserrat` (Sans) to create a balance between tradition and innovation.
- **Architectural Hierarchy**: Using large display headings with tight leading and tracking to create a strong visual anchor on every page.
- **Minimalist Sophistication**: A warm, off-white background (`#f5f2ed`) combined with deep charcoal text and subtle bronze accents (`#b8860b`) to evoke a sense of quality and focus.
- **Tactile Texture**: The use of a global grain overlay and thin, low-opacity borders to give the digital interface a physical, high-end paper feel.

## 2. How did you ensure responsiveness across devices?
Responsiveness was a core requirement, especially for students on mobile devices:
- **Mobile-First Development**: All layouts were built starting from the smallest screen size, ensuring that the core content is always accessible.
- **Fluid Layouts**: Utilized Tailwind's responsive grid system (`grid-cols-1 lg:grid-cols-12`) and viewport-relative units (`vw`) for typography, allowing the UI to breathe on large monitors while remaining compact on phones.
- **Touch-Optimized Navigation**: Implemented a dedicated mobile navigation drawer (using the `Sheet` component) and ensured touch targets (buttons/links) meet the 44px minimum standard.
- **Adaptive Components**: Components like the `Navbar` and `Hero` section adjust their padding and font sizes dynamically based on the screen width.

## 3. What trade-offs did you make between the design and performance?
- **Visual Effects vs. Rendering**: The global grain overlay and backdrop blurs (`glass-card`) add significant visual depth but can be taxing on low-end mobile GPUs. I optimized this by keeping the grain opacity extremely low (0.03) and using hardware-accelerated CSS transforms for animations.
- **Animation vs. Interaction**: While Framer Motion provides smooth entrances, I limited the number of simultaneous animations to prevent "jank" on mobile devices, prioritizing a snappy feel over excessive motion.
- **Asset Loading**: I used high-quality placeholder images via CDN but ensured they were sized appropriately for their containers to minimize initial load times.

## 4. What was the most challenging part of the task and how did you approach it?
The most challenging part was **fixing the `asChild` prop leakage and nested button errors** within the UI components.
- **The Problem**: Using shadcn/ui components (based on Base UI) often leads to "button inside button" errors when a `Trigger` renders a native button and then receives a custom `Button` as a child.
- **The Approach**: I had to refactor the core UI components (`Button`, `Sheet`, `Dialog`, `Tabs`, `Accordion`) to correctly implement the `render` prop pattern. This involved:
    1.  Explicitly capturing the `asChild` prop.
    2.  Using Base UI's `render` prop to pass the child element directly to the primitive.
    3.  Carefully managing prop spreading to ensure that Tailwind classes and data attributes were merged correctly without being passed down to native DOM elements where they didn't belong.
- **The Result**: A perfectly clean console with zero hydration or validation errors, ensuring a production-ready codebase.

---
*Developed as part of the FOSSEE Redesign Challenge.*
