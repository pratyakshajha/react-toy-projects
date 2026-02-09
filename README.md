# react-toy-projects

This repo is home for many small react projects built to learn and understand React.

Each folder is its own project, each having a README file with details.

# Notes
- Create a new react app using: `npm init react-app my-app`
- Run project: `npm start`

## Practice Ideas:
Easy/Common
- [ ] Todo App
    - Add / delete / edit todos
    - Mark complete
    - Filter (all / active / completed)
- [ ] Counter with constraints
    - Increment / decrement
    - Min / max limit
    - Reset button
- [ ] Form with validation
    - Email, password, confirm password
    - Show inline errors
    - Disable submit until valid
- [x] Search Filter
    - [x] List of items
    - [x] Real-time filtering as user types
    - [x] Debounced search (search after user stops typing)
    - [x] Cancel previous calls
    - [x] Search with highlight
    - [ ] Prettify in simple
- [ ] Tabs Component
    - Switch tabs
    - Highlight active tab
    - Render content dynamically
- [ ] Custom Hook
    - `useFetch`
    - `useLocalStorage`
- [ ] Controlled vs Uncontrolled Inputs
    - Convert between them

State related
- [ ] API Data Fetcher
    - Fetch users/posts
    - Loading + error states
    - Retry button
- [ ] Pagination
    - Next / previous
    - Disable buttons correctly
    - Page number display
- [ ] Timer / Stopwatch
    - Start / pause / reset
    - Cleanup intervals correctly

Components & Reusability
- [ ] Modal Component
    - Open / close
    - Close on backdrop click / ESC
- [ ] Accordion
    - Single or multiple open
    - Smooth toggle
- [ ] Dropdown
    - Open on click
    - Close on outside click
- [ ] Star Rating Component
    - Hover preview
    - Click to select

Slightly Advanced
- [ ] Infinite Scroll
    - Load more on scroll
    - Prevent duplicate calls
- [ ] Shopping Cart
    - Add/remove items
    - Quantity update
    - Total price calculation
- [ ] Kanban Board
    - Drag & drop (basic version)
    - Column state management
- [ ] Theme Toggle
    - Light / dark mode
    - Persist in localStorage