const app = new Vue ({
  el: '#app',
  data: {
    searchTitle: '',
    movies: [],
    series: [],
    searchLanguages: 'it'
  },
  methods: {
    search(){
      this.searchMovies();
      this.searchSeries();
      this.searchTitle = ''
    },
    searchMovies() {
      if (this.searchTitle) {
        axios.get('https://api.themoviedb.org/3/search/movie', {
          params: {
            api_key: '919d074e474dce1f45d121775aee20ee',
            query: this.searchTitle,
            language: this.searchLanguages,
          }
        })
        .then(result => {
          this.movies = [...result.data.results];
        })
        .catch(error => {
          console.log(error);
        });
      }
    },
    searchSeries() {
      if (this.searchTitle) {
        axios.get('https://api.themoviedb.org/3/search/tv', {
          params: {
            api_key: '919d074e474dce1f45d121775aee20ee',
            query: this.searchTitle,
            language: this.searchLanguages,
          }
        })
        .then(result => {
          this.series = [...result.data.results];
        })
        .catch(error => {
          console.log(error);
        });
      }
    },
    getValutation(vot) {
      return Math.ceil(vot / 2);
    },
  }
});
