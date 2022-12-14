import React, { useState } from "react";
import axios from "axios";

const HomePage = () => {
	const [usuario, setUsuario] = useState({
		nombre: "",
		correo: ""
	});

	const [mensaje, setMensaje] = useState("");

	const onChange = (event) => {
		setUsuario({
			...usuario,
			[event.target.name]: event.target.value
		});
	};

	const onSubmit = async (event) => {
		event.preventDefault();
		const { nombre, correo } = usuario;
		const { data } = await axios.post("http://localhost:3000/api/suscripcion", {
			nombre,
			correo
		});
		setMensaje(data);
		setUsuario({ nombre: "", correo: "" });
	};

	return (
		<div>
			<form onSubmit={onSubmit} className="bg-yellow-300 m-2 p-2 rounded">
				<h1 className="p-2 text-xl">Suscríbete a correos electrónicos</h1>
				{mensaje && (
					<p className="border border-blue-400 p-2 rounded">{mensaje}</p>
				)}
				<div className="flex flex-col">
					<label className="px-2 mb-0" htmlFor="">
						Nombre
					</label>
					<input
						className="border p-2 m-2"
						type="text"
						placeholder="Ingresa el nombre"
						name="nombre"
						value={usuario.nombre}
						onChange={onChange}
					/>
				</div>
				<div className="flex flex-col">
					<label className="px-2 mb-0" htmlFor="">
						Correo
					</label>
					<input
						className="border p-2 m-2"
						type="text"
						placeholder="Ingresa el nombre"
						name="correo"
						value={usuario.correo}
						onChange={onChange}
					/>
				</div>
				<div className="p-2">
					<button className="p-2 m-2 text-white bg-green-500" type="submit">
						Suscríbete
					</button>
				</div>
			</form>
		</div>
	);
};

export default HomePage;
