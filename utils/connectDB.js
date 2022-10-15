import mongoose from "mongoose";

const connection = {};

const connectDB = async () => {
	try {
		if (connection.isConnected) {
			console.log("Utilizando la conexión existente");
			return;
		}

		const db = await mongoose.connect(process.env.MONGO_DB, {
			useNewUrlParser: true,
			useUnifiedTopology: true
		});

		console.log("MongoDB Conectado ", db.connection.host);
		connection.isConnected = db.connections[0].readyState;
	} catch (error) {
		console.error(error.message);
	}
};

export default connectDB;
