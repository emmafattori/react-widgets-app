import React, { useState } from 'react';
import Search from './components/Search';
import Accordion from './components/Accordion';
import Dropdown from './components/Dropdown';

const items =[
	{
		title: 'What is React?', 
		content: 'React is a front end Javascript framework'
	}, 
	{
		title: 'Why use React?', 
		content: 'React is a favourite JS library among engineers'
	}, 
	{
		title: 'How do you use React?', 
		content: 'You use React by creating components'
	}
]

const options = [
	{
		label: 'The color red', 
		value: 'red'
	}, 
	{
		label: 'The Color Green', 
		value: 'green'
	}, 
	{
		label: 'A Shade of Blue', 
		value: 'blue'
	}

];

export default () => {

	const [selected, setSelected] = useState(options[0]);
	const [showDropdown, setShowDropdown] = useState(true)

	return (
		<div>
			<button conClick={() => setShowDropdown(!showDropdown)}>Toggle Dropdown</button>
			{showDropdown ? 
				<Dropdown 
				selected={selected} 
				options={options} 
				onSelectedChange={setSelected}/> : null
			}
			
		</div>
	)
}