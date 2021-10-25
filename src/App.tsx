import { FormEvent, useCallback, useEffect, useRef } from "react";
import Input from "./components/Input";

function App() {
	const nameInputRef = useRef<HTMLInputElement>(null);
	const acceptTermsRef = useRef({ value: false });
	// useEffect(() => {
	// 	nameInputRef.current?.focus();
	// }, []);

	const handleSubmit = useCallback((e: FormEvent) => {
		e.preventDefault();
		nameInputRef.current?.focus();
		console.log(nameInputRef.current?.value);
		console.log(acceptTermsRef.current.value);
	}, []);

	const handleAcceptTerms = useCallback(() => {
		acceptTermsRef.current.value = !acceptTermsRef.current.value;
	}, []);

	return (
		<div className="App">
			<form onSubmit={handleSubmit}>
				<Input name="name" label="Nome completo" ref={nameInputRef} />
				<button type="button" onClick={handleAcceptTerms}>
					Aceitar termos
				</button>
				<button type="submit">Realizar foco</button>
			</form>
		</div>
	);
}

export default App;
