import React from 'react';

interface ButtonProps {
	styles?: string;
	children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ styles, children }) => {
	return (
		<button
			autoFocus
			className={`flex items-center p-1 md:p-2 border rounded ${styles}`}
		>
			{children}
		</button>
	);
};

export default Button;
