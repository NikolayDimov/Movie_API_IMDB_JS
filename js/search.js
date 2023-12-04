// const url = 'https://movies-api14.p.rapidapi.com/search?query=breaking%20bad';
// const options = {
//     method: 'GET',
//     headers: {
//         'X-RapidAPI-Key': '739f73b89amshc5865ff2d198483p1f8f8cjsn941822cca2a8',
//         'X-RapidAPI-Host': 'movies-api14.p.rapidapi.com'
//     }
// };






function performSearch() {
    //console.log('Search button clicked!');
    const query = document.getElementById('search').value;


    const searchUrl = `https://movies-api14.p.rapidapi.com/search?query=${encodeURIComponent(query)}`;

    //console.log('Search URL:', searchUrl);

    // Clear input search
    document.querySelector('.movie-cards').innerHTML = '';

    try {
        fetch(searchUrl, options)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Network response was not ok: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                const results = data.contents || [];

                if (results.length === 0) {
                    //console.log('No results found.');
                    return;
                }

                results.map(item => {
                    const movieName = item.title;
                    const img = item.backdrop_path ? item.backdrop_path : 'default-image-url';
                    const movie = `<li><img src="${img}"><h2>${movieName}</h2></li>`;
                    document.querySelector('.movie-cards').innerHTML += movie;
                });
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });

    } catch (error) {
        console.error(error);
    }


    document.getElementById('search').value = '';
}


document.getElementById('search-btn').addEventListener('click', performSearch);



