const app = Vue.createApp({
    data() {
        return {
            ciao: 'Ciaone incredibile'
        }
    },
    methods: {
        request() {
          axios.get('http://localhost/php-dischi-json/server.php"').then(response => console.log(response.data));
        },
      },
      created() {
        this.request();
      },
});

app.mount("#app");