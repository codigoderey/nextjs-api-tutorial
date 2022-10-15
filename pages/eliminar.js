import React from "react";
import axios from "axios";

const EliminarPage = ({ data }) => {
	return (
		<>
			<div className="text-green-700 border border-green-700 rounded m-2 p-2 text-center">
				{data}
			</div>
		</>
	);
};

export async function getServerSideProps({ query: { id } }) {
	console.log(id);

	const { data } = await axios.delete("http://localhost:3000/api/suscripcion", {
		params: { id }
	});

	return {
		props: {
			data
		}
	};
}

export default EliminarPage;
