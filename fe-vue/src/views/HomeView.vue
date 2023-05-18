<template>
  <HomeHeader :searchValue="searchValue"></HomeHeader>
  <main>
    <div id="sub-wrapper">
      <MovieCard v-for="movie in moviesF" :key="movie.id" :movie="movie" />
    </div>
  </main>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import HomeHeader from '@/components/HomeHeader.vue'
import MovieCard from '@/components/MovieCard.vue'
import axios from 'axios'
const instance = axios.create({
  baseURL: `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=${
    import.meta.env.VITE_API_KEY
  }`
})
const moviesR = ref([])
const searchValue = ref({ value: '' })
const moviesF = computed(() => {
  if (searchValue.value.value === '') return moviesR.value.results
  return moviesR.value.results.filter((movie) => {
    return movie.title.toLowerCase().includes(searchValue.value.value.toLowerCase())
  })
})

instance.get().then((response) => {
  moviesR.value = response.data
})
</script>

<style scoped>
main {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
}

#sub-wrapper {
  display: flex;
  align-items: center;
  padding: 20px 0;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 25px;
  max-width: 520px;
}

@media screen and (max-width: 520px) {
  #sub-wrapper {
    grid-template-columns: 1fr;
  }
}
</style>
