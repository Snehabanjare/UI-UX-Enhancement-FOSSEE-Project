# FOSSEE Workshop Portal Redesign

This project is a modernized redesign of the FOSSEE (Free/Libre and Open Source Software for Education) Workshop Booking Portal, developed with a focus on professional aesthetics, user experience, and technical excellence.

## Design & Development Overview

### 1. What design principles guided your improvements?
The redesign was guided by the following core principles:
*   **Professional Identity**: Leveraging the FOSSEE and IIT Bombay brand identity by using a vibrant yet academic Yellow and White color palette.
*   **Visual Hierarchy**: Using distinct typography (Montserrat for UI, Cormorant Garamond for headings) and intentional spacing to guide the user's eye toward key actions like "Browse Workshops" and "Book a Session."
*   **Interactive Feedback**: Implementing a custom animated cursor and smooth hover transitions to make the portal feel alive and responsive to user input.
*   **Clarity and Trust**: Using clean card layouts, professional iconography (Lucide-React), and clear status indicators (Badges) to present information in a scannable and trustworthy manner.

### 2. How did you ensure responsiveness across devices?
Responsiveness was a top priority, achieved through:
*   **Mobile-First Approach**: Using Tailwind CSS's responsive utility classes (`sm:`, `md:`, `lg:`, `xl:`) to build layouts that scale gracefully from mobile phones to ultra-wide monitors.
*   **Adaptive Navigation**: A custom Navbar that transitions from a full menu on desktop to a touch-friendly side drawer (Sheet component) on mobile devices.
*   **Fluid Grids**: Utilizing CSS Grid and Flexbox to ensure that workshop cards and dashboard elements reorder themselves logically based on available screen width.
*   **Touch Targets**: Ensuring all interactive elements (buttons, links) have a minimum touch target size of 44px for mobile usability.

### 3. What trade-offs did you make between the design and performance?
*   **Animation vs. Load Time**: We used `framer-motion` for high-quality animations (like the custom cursor and page transitions). While this adds a small overhead to the bundle size, the performance impact is negligible on modern devices compared to the significant boost in user engagement.
*   **Custom Cursor**: Implementing a custom cursor requires JavaScript tracking on the main thread. To mitigate performance issues, we used optimized spring physics and limited the custom cursor to desktop devices (`pointer: fine`) to avoid interfering with mobile touch interactions.
*   **Image Quality**: We used high-resolution placeholder images to maintain a premium look, while ensuring they are served via a fast CDN to keep load times low.

### 4. What was the most challenging part of the task and how did you approach it?
The most challenging part was implementing the **Dynamic Color-Inverting Cursor**.
*   **The Problem**: A standard yellow cursor would disappear on yellow backgrounds, and a white one would disappear on white backgrounds.
*   **The Approach**: I used `mix-blend-mode: difference` combined with a precise mathematical inverse of the primary yellow color (`#0532eb`). 
*   **The Result**: This allowed the cursor to automatically flip between Yellow (on white regions) and White (on yellow regions) in real-time. Fine-tuning the `z-index` and spring physics was also necessary to ensure the cursor felt "attached" to the mouse without any perceptible lag.

---
*Developed as part of the FOSSEE Workshop Portal Redesign Task.*
