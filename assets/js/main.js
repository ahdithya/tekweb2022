Vue.createApp({
  data() {
    return {
      navbar: {
        name: "Aditya",
        about: "About",
        portfolio: "Portfolio",
      },
      header: {
        title: "Aditya Atallah",
        univ: "Student at Ahmad Dahlan University",
        social: {
          ig: {
            url: "https://www.instagram.com/ahdithya/",
            title: "Aditya A",
          },
          gh: {
            url: "https://github.com/ahdithya",
            title: "Aditya A",
          },
          yt: {
            url: "https://www.youtube.com/channel/UCERdynRBJiXTc_z0AvYp8OQ",
            title: "Aditya A",
          },
        },
      },
      about: {
        description:
          "Mahasiswa Sistem Informasi di Universitas Ahmad Dahlan, yang memiliki ketertarikan pada bidang teknologi dan digital.",
      },
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
}).mount("#app");
