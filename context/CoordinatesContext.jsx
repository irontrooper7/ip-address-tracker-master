import { createContext, useState, useContext } from "react";

const CoordinatesContext = createContext();

export const CoordinatesProvider = ({ children }) => {
	const [coordinates, setCoordinates] = useState([]);

	const addToCoordinates = (data) => {
		setCoordinates((prevCoordinates) => [...prevCoordinates, { ...data }]);
	};

	const clearCoordinates = () => {
		setCoordinates([]);
	};

	return (
		<CoordinatesContext.Provider value={{ coordinates, addToCoordinates, clearCoordinates }}>
			{children}
		</CoordinatesContext.Provider>
	);
};

export const useCoordinates = () => useContext(CoordinatesContext);