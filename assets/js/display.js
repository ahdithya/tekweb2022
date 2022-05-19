Vue.createApp({
  data() {
    return {
      article: null, //variabel article
    };
  },
  methods: {
    getMarkdownData() {
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      const article = urlParams.get("article");
      var converter = new showdown.Converter(); //mendefinisikan konverter
      axios
        .get(
          "https://raw.githubusercontent.com/ahdithya/tekweb2022/main/data/" +
            article
        )
        .then((res) => {
          var html = converter.makeHtml(res.data); //eksekusi konverter
          this.article = html; //update variabel article
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  beforeMount() {
    this.getMarkdownData();
  },
}).mount("#app");
