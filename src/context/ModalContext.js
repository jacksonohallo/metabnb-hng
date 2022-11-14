import { useContext, createContext, useState } from "react";

const ModalContext = createContext();

export const ModalContextProvider = ({ children }) => {
	const [showModal, setShowModal] = useState(false);
	const values = { showModal, setShowModal };
	return (
		<ModalContext.Provider value={values}>{children}</ModalContext.Provider>
	);
};

export const ModalContextUse = () => {
	return useContext(ModalContext);
};
