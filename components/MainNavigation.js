import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const MainNavigation = () => {
	const router = useRouter();
	const activeLink = (pathname) => router.pathname === pathname;
	return (
		<nav className="bg-zinc-900 text-zinc-100">
			<ul className="container mx-auto p-4 flex items-center justify-center">
				{/* formulario para añadir correos a la subscripcion */}
				<li
					className={`${
						activeLink("/") && "text-yellow-200 font-bold"
					} mx-2 hover:text-zinc-200 transition-all`}>
					<Link href="/">Crear</Link>
				</li>
				{/* get para la lista subscripcion */}
				<li
					className={`${
						activeLink("/admin") && "text-yellow-200 font-bold"
					} mx-2 hover:text-zinc-200 transition-all`}>
					<Link href="/admin">Admin</Link>
				</li>
			</ul>
		</nav>
	);
};

export default MainNavigation;
