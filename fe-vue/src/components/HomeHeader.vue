<template>
  <header>
    <div v-show="!show" id="title-wrapper">
      <h1 id="title">MOVIE APP</h1>
      <button id="search_button" @click="show = !show">
        <svg viewBox="0 0 512 512" width="1.2em" height="1.2em">
          <path
            fill="currentColor"
            d="M416 208c0 45.9-14.9 88.3-40 122.7l126.6 126.7c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0s208 93.1 208 208zM208 352c79.5 0 144-64.5 144-144S287.5 64 208 64S64 128.5 64 208s64.5 144 144 144z"
          ></path>
        </svg>
      </button>
    </div>
    <div v-show="show" id="search-wrapper">
      <button @click="show = !show" id="search-back-button">
        <svg viewBox="0 0 384 512" width="1.2em" height="1.2em" class="text-sm text-black">
          <path
            fill="currentColor"
            d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256L278.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
          ></path>
        </svg>
      </button>
      <input
        v-model="searchValue"
        type="text"
        name="search"
        id="search_input"
        placeholder="🔍 Enter the movie title"
      />
    </div>
  </header>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const show = ref(false)
    const searchValue = ref('')
    return { show, searchValue }
  }
}
</script>

<style scoped>
header {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  position: sticky;
  top: 0;
  padding: 10px;
  background-color: #fff;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 10%);
  z-index: 999;
}

input#search_input {
  background-color: transparent;
  width: 100%;
}

h1#title {
  display: flex;
  max-width: 520px;
  width: 100%;
  height: 100%;
  font-size: 24px;
  font-weight: bold;
  align-items: center;
}

#title-wrapper {
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 520px;
}

#search-wrapper {
  display: flex;
  align-items: center;
  gap: 10px;
  border-radius: 5px;
  background-color: #eee;
  width: 100%;
  height: 100%;
  max-width: 520px;
  padding: 10px;
}
</style>
