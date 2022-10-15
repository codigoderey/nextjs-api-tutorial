import React from "react";
import MainNavigation from "./MainNavigation";
import Footer from "./Footer";

const MainLayout = ({ children }) => {
	return (
		<>
			<MainNavigation />
			<main className="container mx-auto">{children}</main>
			<Footer />
		</>
	);
};

export default MainLayout;
