import React from 'react';

const SidebarItem = ({ name, active, handleClick }) => {
	return (
		<div>
			<button
				className={`sidebar-item ${active ? 'active' : ''}`}
				onClick={handleClick}
			>
				{name}
			</button>
		</div>
	);
};

export default SidebarItem;
