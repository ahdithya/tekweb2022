let api = "https://api.adithya.my.id/index.php/";

Vue.createApp({
  data() {
    return {
      navbar: {},
      header: {},
      about: {},
      articles: [],
    };
  },

  methods: {
    getHeaderData() {
      axios
        .get(api + "users/1")
        .then((res) => {
          console.log(res.data);
          this.header = res.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getNavbarData() {
      axios
        .get(
          "https://raw.githubusercontent.com/ahdithya/tekweb2022/main/data/navbar.json"
        )
        .then((res) => {
          console.log(res.data);
          this.navbar = res.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getAboutData() {
      axios
        .get(
          "https://raw.githubusercontent.com/ahdithya/tekweb2022/main/data/about.json"
        )
        .then((res) => {
          console.log(res.data);
          this.about = res.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getArticles() {
      axios
        .get(api + "articles")
        .then((res) => {
          console.log(res.data);
          this.articles = res.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getMarkdown() {
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      const articles = urlParams.get("article");
      var converter = new showdown.Converter();
      console.log(articles);
      axios
        .get((src = "./data/" + articles))
        .then((res) => {
          var html = converter.makeHtml(res.data);
          this.article = html;
          console.log(html);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  beforeMount() {
    this.getHeaderData();
    this.getNavbarData();
    this.getAboutData();
    this.getArticles();
    this.getMarkdown();
  },
}).mount("#app");
