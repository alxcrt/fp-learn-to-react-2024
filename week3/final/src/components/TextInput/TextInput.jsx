import { forwardRef } from "react";

const TextInput = forwardRef(
	(
		{
			label,
			error,
			value,
			onChange,
			placeholder,
			id = Math.random(),
			className,
		},
		ref,
	) => (
		<div>
			{label && <label htmlFor={id}>{label}</label>}
			<input
				ref={ref}
				value={value}
				onChange={onChange}
				id={id}
				type="text"
				placeholder={placeholder}
				className={className}
			/>
			{error && <p>{error}</p>}
		</div>
	),
);

export default TextInput;
