import React, { useCallback, useEffect, useState, useRef } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const PasswordGeneratorModule = () => {
	const [password, setPassword] = useState("");
	const [length, setLength] = useState("8");
	const [number, setNumber] = useState(false);
	const [character, setCharacter] = useState(false);
	const [passwordCopy, setPasswordCopy] = useState(false);
	const passwordCopyRef = useRef(null);

	const copyToClipboard = () => {
		passwordCopyRef.current?.select();
		window.navigator.clipboard.writeText(password);
		setPasswordCopy(true);

		setTimeout(() => {
			setPasswordCopy(false);
		}, 1500);
	};

	const passwordGenerator = useCallback(() => {
		let pass = "";
		let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
		if (number) str += "0123456789";
		if (character) str += "!@#$%^&*-_+=[]{}~`";

		for (let i = 1; i <= length; i++) {
			let char = Math.floor(Math.random() * str.length + 1);
			pass += str.charAt(char);
		}
		setPassword(pass);
	}, [length, number, character]);

	useEffect(() => {
		passwordGenerator();
	}, [length, number, character, passwordGenerator]);

	return (
		<div className="container mt-5">
			<h2 className="text-center">Password Generator</h2>

			<Form>
				<Form.Group className="mb-3" controlId="formPassword">
					<Form.Label column sm="2">
						Password:
					</Form.Label>
					<Form.Control
						type="text"
						value={password}
						readOnly
						ref={passwordCopyRef}
					/>
				</Form.Group>

				<Form.Group className="mb-3" controlId="formCopyButton">
					<Button onClick={copyToClipboard} className="copy-button">
						{passwordCopy ? "Copied" : "Copy"}
					</Button>
				</Form.Group>
			</Form>

			<Form.Group className="mb-3" controlId="formLengthRange">
				<Form.Label column sm="2">
					Length: {length}
				</Form.Label>
				<input
					type="range"
					min={6}
					max={50}
					value={length}
					onChange={(e) => setLength(e.target.value)}
					className="form-range"
				/>
			</Form.Group>
			<Form.Group className="mb-3" controlId="formIncludeNumbers">
				<Form.Check
					type="checkbox"
					label="Include Numbers"
					checked={number}
					onChange={() => setNumber((prev) => !prev)}
				/>
			</Form.Group>

			<Form.Group className="mb-3" controlId="formIncludeCharacters">
				<Form.Check
					type="checkbox"
					label="Include Special Characters"
					checked={character}
					onChange={() => setCharacter((prev) => !prev)}
				/>
			</Form.Group>
		</div>
	);
};

export default PasswordGeneratorModule;
