<template>
  <HomeHeader></HomeHeader>
  <main>
    <div id="sub-wrapper">
      <MovieCard v-for="movie in movies" :key="movie.id" :movie="movie" />
    </div>
  </main>
</template>

<script>
import { reactive } from 'vue'
import HomeHeader from '@/components/HomeHeader.vue'
import MovieCard from '@/components/MovieCard.vue'
import { results } from '@/data/movies.json'

export default {
  components: {
    HomeHeader,
    MovieCard
  },
  setup() {
    const movies = reactive(results)
    return { movies }
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
