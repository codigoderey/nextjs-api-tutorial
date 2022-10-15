import React from "react";

const Footer = () => {
	return (
		<footer className="w-full bg-zinc-800 text-zinc-100">
			<div className="container mx-auto p-4">
				{new Date().getFullYear()} Creado con{" "}
				<span className="text-red-100">❤</span> por Javascript Ecosistema
			</div>
		</footer>
	);
};

export default Footer;
