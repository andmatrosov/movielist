<template>
  <form @submit.prevent="searchStore.getMovies(searchMovie)">
    <input type="text" class="search-input" placeholder="input movie" v-model="searchMovie" />
  </form>

  <Loader v-if="searchStore.loader" />
  <div v-else>
    <div v-if="searchStore.movies.length > 0">
      <h3>Search Result</h3>
      <Movie v-for="movie in searchStore.movies" :isSearch="true" :key="movie.id" :movie="movie" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useSearchStore } from "@/stores/SearchStore";
import Loader from "@/components/Loader.vue";
import Movie from "./Movie.vue";

const searchStore = useSearchStore();
const searchMovie = ref("");
</script>

<style scoped>
.search-input {
  border: 1px solid #e7e7e7;
  width: 100%;
  height: 40px;
  padding: 0 10px;
  margin-bottom: 20px;
  border-radius: 10px;
}
</style>
