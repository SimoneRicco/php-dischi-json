const app = Vue.createApp({
    data() {
        return {
            myArr: []
        }
    },
    methods: {
        request() {
          axios.get('http://localhost/php-dischi-json/server.php').then(response => this.myArr = response.data);
        },
      },
      created() {
        this.request();
      },
});

app.mount("#app");