// src/App.tsx
import React, { useState } from "react";
import HomePage from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddNewQuote from "./pages/AddNewQuote";

const App: React.FC = () => {
	// initialize a browser router
	const router = createBrowserRouter([
		{
			path: "/",
			element: <HomePage />,
		},
		// other pages....
		{
		  path: "/add_new_quote",
		  element: <AddNewQuote />,
		},
	]);

	return <RouterProvider router={router} />;
};

export default App;
