import React, { useState } from 'react';

const Search = () => {
	const[term, setTerm] = useState('');
	return (
		<div className="ui form">
			<div class Name="field">
				<label>Enter Search Term</label>
				<input 
					value={term}
					onChange={e => setTerm(e.target.value)}
					className="input" />
			</div>

		</div>
	);
}

export default Search;