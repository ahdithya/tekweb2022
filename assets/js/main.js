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
  },
  beforeMount() {
    this.getHeaderData();
    this.getNavbarData();
    this.getAboutData();
    this.getArticles();
  },
}).mount("#app");
