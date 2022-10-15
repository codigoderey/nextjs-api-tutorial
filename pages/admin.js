import React from "react";
import axios from "axios";
import Link from "next/link";

const AdminPage = ({ suscriptores }) => {
	return (
		<div className="m-2">
			<h1 className="text-xl">Suscriptores</h1>
			{suscriptores.map((s) => (
				<div className="border border-black p-2 rounded my-2" key={s._id}>
					<div>Nombre: {s.nombre}</div>
					<div>Correo: {s.correo}</div>
					<div className="flex flex-col">
						<Link href={`/editar?id=${s._id}`}>
							<a className="text-yellow-600">Editar</a>
						</Link>
						<Link href={`/eliminar?id=${s._id}`}>
							<a className="text-red-600">Eliminar</a>
						</Link>
					</div>
				</div>
			))}
		</div>
	);
};

export async function getServerSideProps() {
	const { data } = await axios.get("http://localhost:3000/api/suscripcion", {
		params: { accion: "todas" }
	});
	return {
		props: {
			suscriptores: data
		}
	};
}

export default AdminPage;
