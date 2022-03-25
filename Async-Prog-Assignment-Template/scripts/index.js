var image = document.getElementById("aaa");

var img_array=["https://miro.medium.com/max/1400/1*8Bd24HyRu8pBkN6M4AeOyg.png","https://miro.medium.com/max/1400/1*5yNFmYA7IyOZF9x9i2vEOQ.jpeg","https://shikshanews.com/wp-content/uploads/Tenet.jpg"];


var index=0;
function slide()
{

     image.src = img_array[index];
    index++;
    if(index>=img_array.length)
    {
    index=0;
    }
}
setInterval("slide()",2000);

var moviedata = [
    {
        id:1,
        name: "Money Heist",
        poster: "https://icdn.digitaltrends.com/image/digitaltrends/money-heist-poster-500x500.jpg",
        rating:"8.3/10 ",
        votes:"450,329 votes",
        release:"May 2, 2017 (United States)",
        rate:83
    },
    {
        name: "Squid Game",
        poster: "https://cdn.wallpapersafari.com/82/45/dgsftH.jpg",
        rating:" 8.1/10 ",
        votes:"408,732 votes",
        release:"18-Sept-2021",
        id:2,
        rate:81
    },
    {
        name: "Mirzapur",
        poster: "https://www.adgully.com/img/800/201812/mirzapur-poster.jpg",
        rating:"8.5/10 ",
        votes:"67,195 votes",
        release:"15-Oct-2018 (India)",
        id:3,
        rate:85
    },
    {
        name: "AARYA",
        poster: "https://i.pinimg.com/originals/1d/d6/e8/1dd6e8c3e4313d39812c5b3d17431965.jpg",
        rating:"7.9/10 ",
        votes:"13,356 votes",
        release:"June 19, 2020 (India)",
        id:4,
        rate:79
    },
    {
        name: "Criminal Justice",
        poster: "https://popcornreviewss.com/wp-content/uploads/2020/12/Criminal-Justice-Behind-Closed-Doors.jpg",
        rating:"8.2/10 ",
        votes:"14,980 votes",
        release:"January 2, 2019 (India)",
        id:5,
        rate:82
    },
    {
        name: "The Dark Knight Rises",
        poster: "https://m.media-amazon.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_FMjpg_UX1000_.jpg",
        rating:"8.4/10 ",
        votes:"1,633,070 votes",
        release:"Jul 20, 2012",
        id:6,
        rate:84
    },
    {
        name: "Krrish 3",
        poster: "https://static-koimoi.akamaized.net/wp-content/new-galleries/2013/10/Priyanka-Chopra-And-Hrithik-Roshan-in-Krrish-3-Movie-Poster-Pic-1.jpg",
        rating:"2.25/5",
        votes:"-- votes",
        release:"01 November, 2013 (India)",
        id:7,
        rate:50
    },
    {
        name: "Shootout at Wadala",
        poster: "https://m.media-amazon.com/images/M/MV5BOTE0NDIwNTEtNTI4NS00MWE4LWJiMWMtNjVjZGMwMzllYTE2XkEyXkFqcGdeQXVyNjE1OTQ0NjA@._V1_UY1200_CR100,0,630,1200_AL_.jpg",
        rating:"6/10 ",
        votes:"6,807 votesvotes",
        release:"03-May-2013 (India)",
        id:8,
        rate:61
    },
    {
        name: "Once Upon a Time in Mumbai",
        poster: "https://m.media-amazon.com/images/I/A1sOnO7VFRL._SL1500_.jpg",
        rating:"7.4/10 ",
        votes:"17,432 votes",
        release:"09-Mar-2016 (India)",
        id:9,
        rate:74
    },
]

localStorage.setItem('movies', JSON.stringify(moviedata));
displaydata(moviedata);

function displaydata(moviedata){
    document.querySelector("#movies").innerHTML = ""
    moviedata.map(function(elem){
        var main = document.createElement("div")
        main.className = 'main-div'
        
        var poster = document.createElement("img")
        poster.src = elem.poster
    
    
        var name = document.createElement("h2")
        name.textContent = elem.name
    
        var rating = document.createElement("p")
        rating.textContent = elem.rating
    
    
        var relese = document.createElement("p")
        relese.textContent = elem.release
    
        var vote = document.createElement("p")
        vote.textContent = elem.votes
    
        main.append(poster,name,rating,relese,vote)
        document.querySelector("#movies").append(main)
    })
}



function handlesort(){
    var selected = document.querySelector(".sorting").value;
    console.log(selected)
    if(selected === "l2h"){
        moviedata.sort(function (a,b){
    return a.rate-b.rate
    })
}
    if(selected === "h2l"){
        moviedata.sort(function (a,b){
    return b.rate-a.rate
    })  
    }
    console.log(moviedata)
    displaydata(moviedata)
}