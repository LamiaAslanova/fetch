document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("input")
    const searchButton = document.getElementById("search")
    const cardBody = document.getElementById("cardBody")

    searchButton.addEventListener("click", () => {
        const searchTerm = searchInput.value
        searchMovie(searchTerm)
        searchInput.value = ""
    })

    function searchMovie(searchTerm) {
        fetch(`http://www.omdbapi.com/?t=${searchTerm}&apikey=f5eaa0cb`)
            .then((response) => response.json())
            .then((data) => {
                renderUI(data)
            })
            .catch((error) => {
                console.error("Error:", error)
                alert("Movie not found...")
            })
    }

    const renderGenres = (genres) => {
        let genreHTML = ""
        const genreList = genres.split(',')
        for (let i = 0; i < genreList.length; i++) {
            const genre = genreList[i].trim()
            genreHTML += `<p>${genre}</p>`
        }
        return genreHTML
    }

    const renderUI = (item) => {
        const { Title, imdbRating, Rated, Year, Production, Genre, Plot, Actors, Poster } = item
        cardBody.innerHTML = ""
        cardBody.innerHTML += `
        <div class="middle">
            <div class="middle__left">
                <img width="180px" src="${Poster}" alt="${Title}">
            </div>
            <div class="middle__right">
                <h3>${Title}</h3>
                <div class="score">
                    <i class="fa-solid fa-star"></i>
                    <p>${imdbRating}</p>
                </div>
                <div class="info">
                    <p id="rated">${Rated}</p>
                    <p id="released">${Year}</p>
                    <p id="runtime">${Production}</p>
                </div>
                <div class="genre">
                    ${renderGenres(Genre)}
                </div>
            </div>
        </div>
        <div class="bottom">
            <div class="plot">
                <h4>Plot:</h4>
                <p>${Plot}</p>
            </div>
            <div class="cast">
                <h4>Cast:</h4>
                <p>${Actors}</p>
            </div>
        </div>
        `
    }
})