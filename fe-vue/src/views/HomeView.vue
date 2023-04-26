<template>
  <HomeHeader :searchValue="searchValue"></HomeHeader>
  <main>
    <div id="sub-wrapper">
      <MovieCard v-for="movie in moviesR.results" :key="movie.id" :movie="movie" />
    </div>
  </main>
</template>

<script>
import { reactive, watch } from 'vue'
import HomeHeader from '@/components/HomeHeader.vue'
import MovieCard from '@/components/MovieCard.vue'
import movies from '@/data/movies.json'

export default {
  components: {
    HomeHeader,
    MovieCard
  },
  setup() {
    const moviesR = reactive(JSON.parse(JSON.stringify(movies))) // deep copy
    const searchValue = reactive({ value: '' })
    watch(searchValue, (newValue) => {
      if (newValue.value === '') {
        moviesR.results = movies.results
      } else {
        moviesR.results = movies.results.filter((movie) => {
          return movie.title.toLowerCase().includes(newValue.value.toLowerCase())
        })
      }
      console.log(movies.results)
    })
    return { moviesR, searchValue }
  }
}
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
