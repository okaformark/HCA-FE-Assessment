import React from 'react';

interface BadgeProps {
	count: number;
	styles?: string;
}

const Badge: React.FC<BadgeProps> = ({ count, styles }) => {
	return (
		<span
			className={`inline-block px-2 py-1 text-xs font-bold rounded-full ${styles}`}
		>
			{count}
		</span>
	);
};

export default Badge;
