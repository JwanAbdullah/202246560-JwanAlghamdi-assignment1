# Technical Documentation – Assignment 1

## 1. Overview

This is a responsive personal portfolio web application built using React and Vite  
It showcases my background, experience, projects, skills, and contact information through modular functional components and interactive UI elements  

The application is structured for maintainability and clarity, with reusable components and a combination of inline styling and CSS-based animations


---

## 2. Technologies Used

- React (Functional Components)
- Vite (Build tool and development server)
- JavaScript (ES6+)
- CSS (Flexbox and transitions)

---

## 3. Project Structure

```
src/
│
├── components/
│   ├── Navbar.jsx
│   ├── About.jsx
│   ├── Experience.jsx
│   ├── Projects.jsx
│   ├── Skills.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
│
├── assets/
│   └── images/
│       ├── aic.png
│       ├── kfupm-gpt.png
│       └── kommute.png
│
├── App.jsx
├── App.css
└── main.jsx
```

- `main.jsx` initializes and renders the React application.
- `App.jsx` serves as the root component and renders all sections.
- `components/` contains reusable UI sections.
- `assets/images/` stores project images.
- `App.css` contains global styles and hover animations.

Each section of the portfolio is implemented as a separate React component for modularity and maintainability


---

## 4. Components Architecture

- **Navbar** – Navigation between page sections.
- **About** – Introduction and personal summary.
- **Experience** – Displays experience cards using dynamic rendering.
- **Projects** – Displays project cards with images and descriptions.
- **Skills** – Displays skill badges.
- **Contact** – Includes a front-end contact form.
- **Footer** – Contains closing information and links.

Dynamic rendering is implemented using `.map()` to avoid repetitive code and improve scalability

---

## 5. Styling Approach

The project primarily uses inline styling within React components 
Global styles and hover effects are defined in `App.css`

Flexbox is used for layout alignment:

- `display: flex`
- `justify-content: center`
- `flex-wrap: wrap`
- `gap`

Hover effects are implemented using CSS transitions and transforms:

- `transform`
- `transition`
- `box-shadow`

These animations improve user interaction and the overall visuals

---

## 6. Interactivity

Interactivity was implemented using:

- CSS hover effects for card animations
- A controlled contact form with `onSubmit` event handling
- JavaScript event prevention to avoid default anchor scrolling behavior

Example:
```js
onClick={(e) => {
  if (proj.link === "#") e.preventDefault();
}}
```

---
## 7. Responsiveness

Responsiveness is achieved using Flexbox with wrapping enabled. Cards automatically stack vertically on smaller screen sizes while maintaining spacing consistency.

The layout was tested using browser developer tools across desktop, tablet, and mobile screen sizes to ensure readability and proper alignment.

## 8. Limitations

Current limitations:

- The contact form does not connect to a backend service.
- Styling is primarily inline rather than fully modular CSS.

Future improvements could include:

- Backend integration for form handling.
- Deployment optimization.
- Refactoring styling into modular CSS.
- Adding routing for individual project pages.
