import React from "react";
import App from "./App";
import { createRoot } from 'react-dom/client';

// Select the HTML element where React should render
const domNode = document.getElementById('root');
const root = createRoot(domNode);

// Render the App component inside the root div
root.render(React.createElement(App));