import { defineStore } from "pinia";
import { useMovieStore } from "@/stores/MovieStore";
import { ref } from "vue";

const URL =
  "https://api.themoviedb.org/3/search/movie?api_key=120a90fbbd298a151e86d09249d2e886&query=";

// Option Api
// export const useSearchStore1 = defineStore("searchStore", {
//   state: () => ({
//     loader: false,
//     movies: [],
//   }),
//   actions: {
//     async getMovies(search) {
//       this.loader = true;
//       const res = await fetch(`${URL}${search}`);
//       const data = await res.json();
//       this.movies = await data.results;
//       this.loader = false;
//     },
//     addToUserMovies(object) {
//       const movieStore = useMovieStore();
//       movieStore.movies.push({ ...object, isWatched: false });
//     },
//   },
// });

// Composition Api
export const useSearchStore = defineStore("searchStore", () => {
  const loader = ref(false);
  const movies = ref([]);

  const getMovies = async (search) => {
    loader.value = true;
    const res = await fetch(`${URL}${search}`);
    const data = await res.json();
    movies.value = data.results;
    loader.value = false;
  };

  const addToUserMovies = (object) => {
    const movieStore = useMovieStore();
    movieStore.movies.push({ ...object, isWatched: false });
  };

  return {
    loader,
    movies,
    getMovies,
    addToUserMovies,
  };
});
