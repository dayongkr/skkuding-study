const dummyData = JSON.parse(window.localStorage.getItem("data"));

const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const data = dummyData.results.find((e) => e.id == id);

document.getElementsByTagName("title")[0].innerText = data.title;
document.getElementById("title").innerText = data.title;
document.getElementById(
  "card-wrapper"
).childNodes[0].src = `https://image.tmdb.org/t/p/w500${data.poster_path}`;
document.getElementById("date").innerText += ` ${data.release_date}`;
document.getElementById("rate").innerText += ` ${data.vote_average}`;
document.getElementById("overview").innerText += data.overview;
