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
        printer(){
          console.log("lunghezza "+this.myArr.length);
          for (let item in this.myArr) {
            console.log(item.titolo);
            console.log("ciao");
          }
        }
      },
      created() {
        this.request();
        this.printer();
      },
});

app.mount("#app");