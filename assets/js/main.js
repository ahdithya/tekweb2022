Vue.createApp({
  data() {
    return {
      navbar: {},
      header: {},
      about: {},
      porfolio: [
        {
          title: "Project 1",
          description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni fugit ut animi numquam",
          thumbnail:
            "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        },
        {
          title: "Project 1",
          description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni fugit ut animi numquam",
          thumbnail:
            "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        },
      ],
    };
  },
  methods: {
    getHeaderData() {
      axios
        .get(
          "https://raw.githubusercontent.com/ahdithya/tekweb2022/main/data/header.json"
        )
        .then((res) => {
          console.log(res.data); //melihat respon data pada console browser
          this.header = res.data; //memperbarui variabel header pada bagian data()
        })
        .catch((error) => {
          console.log(error); //melihat error jika pengambilan data adalah gagal
        });
    },
  },
  beforeMount() {
    this.getHeaderData(); //eksekusi fungsi getHeaderData() pada bagian methods saat halaman terbuka
  },
}).mount("#app");
