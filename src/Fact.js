import React from 'react';
import "./fact.css";

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '{process.env.RAPID_API_KEY}',
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
	}
};
function getFacts(city) {
	if (!city) return Promise.resolve([]);

	fetch('https://wft-geo-db.p.rapidapi.com/v1/geo/{city}', options)
		.then(response => response.json())
		.then(response => console.log(response))
		.catch(err => console.error(err))
}
export default function Fact() {
	return (
		<>
			<div class="container">
				<div class="card-carousel">
					<div class="card" id="1">
						<div class="image-container"></div>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, explicabo!</p>
					</div>
					
				</div>
				<a href="#" class="visuallyhidden card-controller">Carousel controller</a>
			</div>
		</>
	);
}




