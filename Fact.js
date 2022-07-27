

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': {RAPID_API_KEY},
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
	}
};
function getFacts(city)
{
    
  if (!city) return Promise.resolve([]);

fetch('https://wft-geo-db.p.rapidapi.com/v1/geo/cities', options)
.then(response => response.json())
.then(response => console.log(response))
.catch(err => console.error(err))

}

