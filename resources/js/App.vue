<!-- creo il componente principale di vue -->
<template>
    <div>
        <HeaderComp/>
        <router-view></router-view>
    </div>
</template>

<script>
import HeaderComp from './partials/HeaderComp.vue';



export default {
    data() {
        return {
            apiUrl: "http://127.0.0.1:8000/api/posts",
            posts: null
        };
    },
    components:{
        HeaderComp,
    },
    methods: {
        getApi() {
            axios.get(this.apiUrl)
                .then(res => {
                console.log(res.data);
                this.posts = res.data.posts;
            });
        }
    },
    mounted() {
        this.getApi();
    },
    components: { HeadreComp }
}
</script>

<style lang="scss" scoped>

</style>
