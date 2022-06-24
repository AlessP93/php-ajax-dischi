const app = new Vue({
    el:'#app',
    data: {
        arrayData: []
    },
    created() {
        axios.get('https://http://localhost:8000/php-ajax-dischi/server/api.php')
        .then((response) => {
            this.albums = response.data;
        })
        .catch((error) => {
            console.log(error);
        });
    }
});