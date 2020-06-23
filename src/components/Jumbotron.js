import React ,{useEffect, useState} from 'react';

export default function Jumbotron(props) {
	const [title] = useState('');
  	const [content] = useState('');

	return (
		<div className="jumbotron">
			<h1>{props.title}</h1>
			<p>{props.content}</p>
		</div>
	);
  }
