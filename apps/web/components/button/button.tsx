'use client';

import { useState } from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	defaultCount: number;
}

export const Button = ({ className, defaultCount, ...props }: ButtonProps) => {
	const [count, setCount] = useState(defaultCount);

	const handleClick = () => {
		setCount((prevCount) => prevCount + 1);
	};

	return (
		<button
			className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${className ?? ''}`}
			type='button'
			onClick={handleClick}
			{...props}
		>
			Count: {count}
		</button>
	);
};
