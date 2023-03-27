const dummyDataM: dummyDataInterface = JSON.parse(window.localStorage.getItem("data") as string);

const queryString: string = window.location.search;
const params: URLSearchParams = new URLSearchParams(queryString);
const id:string|null = params.get("id");
const data: movieData = <movieData> dummyDataM.results.find((e: movieData) => e.id == <number><unknown>id);

(document.getElementsByTagName("title"))[0].innerText = data.title;
(<HTMLDivElement>document.getElementById("title")).innerText = data.title;
(<HTMLImageElement>(<HTMLDivElement>document.getElementById(
  "card-wrapper"
)).childNodes[0]).src = `https://image.tmdb.org/t/p/w500${data.poster_path}`;
(<HTMLParagraphElement>document.getElementById("date")).innerText += ` ${data.release_date}`;
(<HTMLParagraphElement>document.getElementById("rate")).innerText += ` ${data.vote_average}`;
(<HTMLParagraphElement>document.getElementById("overview")).innerText += data.overview;
