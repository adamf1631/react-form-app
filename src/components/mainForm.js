import React, { useState } from "react";

const MainForm = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [results, setResults] = useState(false);

	const formSubmit = (e) => {
		e.preventDefault();
		setResults(false);
		console.log(name, email);
		setResults(true);
		setName("");
		setEmail("");
	};

	return (
		<div className='main-form'>
			<form onSubmit={formSubmit}>
				<label htmlFor='name'>Name:</label>
				<input
					type='text'
					name='name'
					value={name}
					placeholder='First and Last'
					onChange={(e) => setName(e.target.value)}
				/>
				<label htmlFor='email'>Email:</label>
				<input
					type='text'
					name='email'
					value={email}
					placeholder='tedsmith@gmail.com'
					onChange={(e) => setEmail(e.target.value)}
				/>
				<input type='submit' value='submit' />
			</form>
			<h5>Form Results:</h5>
			{results ? "Form Submitted successfully" : ""}
			<h4>{name}</h4>
			<h4>{email}</h4>
		</div>
	);
};

export default MainForm;
