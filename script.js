fetch("http://www.omdbapi.com/?i=tt3896198&apikey=f5eaa0cb")
.then ((response) => response.json())
.then ((data) => {
    const card = document.getElementById("card")

    renderUI(data)
})

const renderUI = (item) => {
    const {Title, imdbRating, Rated, Year, Production, Genre, Plot, Actors, Poster} = item
    card.innerHTML += `
    <div class="middle">
        <div class="middle__left">
            <img width="180px"
                src="${Poster}"
                alt="">
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
                <p>${Genre.split(",")[0]}</p>
                <p>${Genre.split(",")[1]}</p>
                <p>${Genre.split(",")[2]}</p>
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