var titleV, genreV, developerV, platformsV, ratingV, releaseDateV, reviewsV

function readForm () {
    titleV = document.getElementById("title").value;
    genreV = document.getElementById("genre").value;
    developerV = document.getElementById ("developer").value
    platformsV = document.getElementById ("platforms").value
    ratingV = document.getElementById ("rating").value
    releaseDateV = document.getElementById ("release_date").value
    reviewsV = document.getElementById ("reviews").value    
    console.log (titleV, genreV, developerV, platformsV, ratingV, releaseDateV, reviewsV)
}

document.getElementById("insert").onclick = function () {
   readForm()
   
   firebase.database().ref('games/' + titleV).set({
        title: titleV,
        genre: genreV,
        developer: developerV,
        platforms: platformsV,
        rating: ratingV,
        release_date: releaseDateV,
        reviews: reviewsV,
        
    });
    alert("Hola")

}
