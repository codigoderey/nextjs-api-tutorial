/* eslint-disable import/no-anonymous-default-export */
import connectDB from "../../utils/connectDB";
import Suscripcion from "../../models/suscripcionModel";

connectDB();

export default async (req, res) => {
	switch (req.method) {
		case "GET":
			await obtenerSuscripciones(req, res);
			break;

		case "POST":
			await crearSuscripcion(req, res);
			break;

		case "DELETE":
			await eliminarSuscripcion(req, res);
			break;

		case "PUT":
			await modificarSuscripcion(req, res);
			break;

		default:
			return `El metodo ${req.method} no esta permitido`;
	}
};

const obtenerSuscripciones = async (req, res) => {
	const { id, accion } = req.query;

	console.log(id, accion);

	try {
		if (accion === "todas") {
			const subs = await Suscripcion.find();
			return res.status(200).json(subs);
		} else if (accion === "sencilla") {
			const sub = await Suscripcion.findById({ _id: id });
			return res.status(200).json(sub);
		}
	} catch (error) {
		console.error(error.message);
	}
};

const crearSuscripcion = async (req, res) => {
	const { nombre, correo } = req.body;

	try {
		const existeSuscripcion = await Suscripcion.findOne({ correo });

		if (existeSuscripcion) {
			return res.status(200).send("Usted ya está suscripto");
		}

		const newSub = await new Suscripcion({ nombre, correo });
		newSub.save();

		return res.status(200).send("Suscripcion Exitosa");
	} catch (error) {
		console.error(error.message);
	}
};

const eliminarSuscripcion = async (req, res) => {
	try {
		const { id } = req.query;
		await Suscripcion.findByIdAndDelete({ _id: id });
		return res.status(200).json("Su suscripción ha sido eliminada");
	} catch (error) {
		console.error(error.message);
	}
};

const modificarSuscripcion = async (req, res) => {
	const { id, nombre, correo } = req.body;

	try {
		await Suscripcion.findByIdAndUpdate(
			{ _id: id },
			{ nombre, correo },
			{ new: true }
		);

		return res.status(200).send("Su suscripción ha sido modificada");
	} catch (error) {
		console.error(error.message);
	}
};
