const section = document.querySelector('section');
const button = document.getElementById('get_info');
const list = document.getElementById('list');
const next = document.getElementById('next');
const previous = document.getElementById('previous');
const planetList = document.getElementById('planet_list');
const span = document.querySelector('span');
const search = document.getElementById('searchButton');
const input = document.getElementById('input');
const filmInfo = document.getElementById('film_info');
const peoplePicture = {
    "https://swapi.dev/api/people/1/": "https://starwars.ru/media/universe_entity/lukeskywalker_detail_K8TQnEq.png",
    "https://swapi.dev/api/people/2/": "https://cdn.pixabay.com/photo/2017/08/30/16/15/c-3po-2697682_1280.png",
    "https://swapi.dev/api/people/3/": "https://upload.wikimedia.org/wikipedia/ru/3/39/R2-D2_Droid.png",
    "https://swapi.dev/api/people/4/": "https://www.nicepng.com/png/full/23-230540_darth-vader-star-wars-free-png-image-darth.png",
    "https://swapi.dev/api/people/5/": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e5785bc8-8d39-43c4-a483-1854ebc3e564/dau2pzr-9bc20619-2949-4b7b-8a1e-af5b4568b4fe.png/v1/fill/w_400,h_911,strp/carrie_fisher_leia_organa_01_by_jj_247_dau2pzr-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTExIiwicGF0aCI6IlwvZlwvZTU3ODViYzgtOGQzOS00M2M0LWE0ODMtMTg1NGViYzNlNTY0XC9kYXUycHpyLTliYzIwNjE5LTI5NDktNGI3Yi04YTFlLWFmNWI0NTY4YjRmZS5wbmciLCJ3aWR0aCI6Ijw9NDAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.kK3vlnodDgCmHU-KUtPAZIpmwze8zCxwr8iQjDBqbIE",
    "https://swapi.dev/api/people/10/": "https://www.pngall.com/wp-content/uploads/9/Star-Wars-Obi-Wan-Kenobi-PNG-File.png",
    "https://swapi.dev/api/people/13/": "https://www.pngall.com/wp-content/uploads/9/Chewbacca.png",
    "https://swapi.dev/api/people/14/": "https://images.pngnice.com/thumb.php?src=https://images.pngnice.com/download/2007/Star-Wars-Han-Solo-PNG-HD.png&h=200&w=200&zc=1",
    "https://swapi.dev/api/people/18/": "https://vignette.wikia.nocookie.net/star-wars-canon/images/b/b9/Hellmy.png/revision/latest?cb=20160526000827",
    "https://swapi.dev/api/people/20/": "https://www.pngkey.com/png/full/476-4763779_https-image-noelshack-com-fichiers-2018-51-sad.png",
    "https://swapi.dev/api/people/21/": "https://images.pngnice.com/thumb.php?src=https://images.pngnice.com/download/2007/Emperor-Palpatine-PNG-Transparent-Picture.png&h=200&w=200&zc=1",
    "https://swapi.dev/api/people/22/": "https://retoys.ru/image/cache/catalog/BobaFett/star-wars-boba-fett-premium-format-silo-3005151-min-228x228.png",
    "https://swapi.dev/api/people/23/": "https://starwars.ru/media/cache/77/02/770252838ea0adac7179f59b6d76a69b.png",
    "https://swapi.dev/api/people/24/": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ec55a469-bb2e-484e-aa22-237f48fe45db/d1ztju1-a2dd3c92-1270-4029-b84d-c4bb7d9c2b6d.png/v1/fill/w_429,h_465,strp/star_wars_bossk_by_dorsalfin_d1ztju1-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NDY1IiwicGF0aCI6IlwvZlwvZWM1NWE0NjktYmIyZS00ODRlLWFhMjItMjM3ZjQ4ZmU0NWRiXC9kMXp0anUxLWEyZGQzYzkyLTEyNzAtNDAyOS1iODRkLWM0YmI3ZDljMmI2ZC5wbmciLCJ3aWR0aCI6Ijw9NDI5In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.wBKGL0osr2QmMhYUQik8M9MaJwsjEMZkEVq3W4_LDGc",
    "https://swapi.dev/api/people/25/": "https://discourse.disneyheroesgame.com/uploads/default/original/3X/f/8/f8b506fbcabdf61dbbdccdfe186d7d2f3efb62c3.png",
    "https://swapi.dev/api/people/26/": "https://starwars.ru/media/universe_entity/lobot_detail.png"
};
let currentPage = 1;
const limit = 6;
const baseUrl = 'https://swapi.dev/api/';

function getPeople() {
    section.textContent = 'loading...'
    axios
        .get(`${baseUrl}films/2`)
        .then((response) => {
            section.innerHTML = "";
            const item = response.data.characters;
            item.forEach(url => {
                axios
                    .get(url)
                    .then((response) => {
                        const charItem = response.data;
                        const charList =
                            `<div class="cell">
                            <img src="${peoplePicture[url]}" class="picture" alt="#"></img>
                                <h1>${charItem.name}</h1>
                                    <p>Birth Year: ${charItem.birth_year}</p>
                                    <p>Gender: ${charItem.gender}</p>
                            </div>`;
                        section.innerHTML += charList;
                    })
            })
        })
        .catch((err) => {
            console.log('Error: ', err);
        })
}

function getPlanets() {    
    axios
        .get(`${baseUrl}planets/?page=${currentPage}`)
        .then((response) => {
            span.textContent = "Planets :"
            list.innerHTML = '';
            const planet = response.data.results;
            planet.forEach(planet => {
                const planetName = planet.name;
                const planetList = `<li>${planetName}</li>`
                list.innerHTML += planetList;
            })
        })
}
getPlanets();

function aboutFilm(){
    axios
    .get(`${baseUrl}films/${currentPage}`)
    .then((response) => {
        const aboutFilm = response.data;
        const aboutFilmList = `
        <div class="aboutFilm">
        <p class="aboutFilmCenter">Title: ${aboutFilm.title}</p>
        <p class="aboutFilmCenter">Episode: ${aboutFilm.episode_id}</p>
        <p class="aboutFilmCenter">Release data: ${aboutFilm.release_date}</p>
        <p class="aboutFilmCenter">Created in: ${aboutFilm.created} </p>
        <div>
        `;
        filmInfo.innerHTML = aboutFilmList;
        console.log(aboutFilm.title);
    })
}
button.addEventListener('click', getPeople)
next.addEventListener('click', () => {
    if (currentPage === limit) {
        return
    } else {
        currentPage++
        getPlanets();
    }
})
previous.addEventListener('click', () => {
    if (currentPage === 1) {
        return
    } else {
        currentPage--
        getPlanets();
    }
})

search.addEventListener('click', function(){
    switch(input.value){
        case '1':
            currentPage = 1;
            aboutFilm();
            break;
        case '2':
            currentPage = 2;
            aboutFilm();
            break;  
        case '3':
            currentPage = 3;
            aboutFilm();
            break;  
        case '4':
            currentPage = 4;
            aboutFilm();
            break;  
        case '5':
            currentPage = 5;
            aboutFilm();
            break;  
        case '6':
            currentPage = 6;
            aboutFilm();
            break;  
    }

})

