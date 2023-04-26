<template>
  <div class="card-wrapper">
    <a href=""
      ><img
        :src="'https://image.tmdb.org/t/p/w500/' + props.movie.poster_path"
        :alt="props.movie.original_title"
    /></a>
  </div>
</template>

<script>
export default {
  props: {
    movie: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    return { props }
  }
}
</script>

<style scoped>
.card-wrapper {
  border-radius: 16px;
  overflow: hidden;
  transition: transform 0.2s;
  transition-timing-function: ease-in-out;
}

.card-wrapper:hover {
  transform: scale(105%);
  cursor: pointer;
}
</style>
