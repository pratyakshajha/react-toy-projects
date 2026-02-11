# Simple Search

A React project demonstrating real-time search and filtering with debouncing and text highlighting.

## Features

- **Real-time Search**: Filter users as you type
- **Debounced Search**: Search executes after 500ms of user inactivity to optimize performance
- **Search Highlighting**: Matched search terms are highlighted in the results
- **Multiple Field Search**: Can search across user name and email fields
- **Performance Optimization**: Uses `useMemo` for memoization and effect cleanup for debouncing

## Project Structure

- `UserSearch.js`: Main component with search logic, filtering, and highlighting
- `data/users.json`: Sample user data for searching
- Uses [PureCSS](https://purecss.io/) for styling

## Available Scripts

### `npm start`

Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm test`

Launches the test runner in interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.

## Learning Concepts

- React hooks: `useState`, `useEffect`, `useMemo`
- Debouncing with cleanup functions
- String manipulation and regex for text highlighting
- Controlled components
- Array filtering and mapping


## Demo
![Demo GIF](demo.gif)