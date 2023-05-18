<template>
  <div v-show="movie" id="main-wrapper">
    <main>
      <h1 id="title">{{ movie?.title }}</h1>
      <div class="flex wrapper">
        <div id="card-wrapper">
          <img :src="'https://image.tmdb.org/t/p/w500/' + movie?.poster_path" :alt="movie?.title" />
        </div>
        <div class="wrapper">
          <p id="date">📅 {{ movie?.release_date }}</p>
          <p id="rate">⭐ {{ movie?.vote_average }}</p>
          <ul>
            <li>Darma</li>
            <li>Hero</li>
          </ul>
        </div>
      </div>
      <div class="wrapper">
        <h2>📖 Overview</h2>
        <p id="overview">{{ movie?.overview }}</p>
      </div>
      <div class="wrapper">
        <button @click="goBack" id="backButton" type="button">Go Back</button>
      </div>
    </main>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'

export default {
  setup() {
    const route = useRoute() // setup에서는 this.$route 대신 useRoute()를 사용
    const movie = ref()
    const instance = axios.create({
      baseURL: `https://api.themoviedb.org/3/movie/${
        route.params.id
      }?language=en-US&page=1&api_key=${import.meta.env.VITE_API_KEY}`,
      headers: {
        accept: 'application/json'
      }
    })
    instance.get().then((response) => {
      movie.value = response.data
    })
    const goBack = () => {
      window.history.back()
    }
    return { movie, goBack }
  }
}
</script>

<style scoped>
main {
  width: 520px;
  flex-direction: column;
  align-items: start;
  padding: 10px;
}

h1,
h2 {
  font-weight: bold;
  margin-bottom: 15px;
}

h1 {
  font-size: 1.8rem;
}

h2 {
  font-size: 1.4rem;
}

p {
  font-size: 1.2rem;
  margin-bottom: 15px;
}

ul {
  display: flex;
  gap: 10px;
}

li {
  border-radius: 5px;
  padding: 10px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 15%);
}

button {
  border: 1px solid;
  border-radius: 5px;
  padding: 10px;
}

#main-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}

.flex {
  display: flex;
  gap: 15px;
  margin: 30px 0;
  flex-wrap: wrap;
}

.flex .wrapper {
  margin: 0;
}

#card-wrapper {
  width: 300px;
  border-radius: 15px;
  overflow: hidden;
}

.wrapper {
  margin: 15px 0;
}

@media screen and (max-width: 520px) {
  #card-wrapper {
    width: 100%;
  }
}
</style>
