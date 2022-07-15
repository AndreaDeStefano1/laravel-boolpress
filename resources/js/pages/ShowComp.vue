<template>
    <div>
        <h1>{{ post.title }}</h1>
        <p>{{ post.text }}</p>
    </div>
</template>

<script>

    export default {
        name:'ShowComp',
        data(){
            return{
                post: {
                    title: '',
                    text: ''
                },
                apiUrl: '/api/posts'
            }
        },
        methods:{
            getPostDetails(){
              axios.get(this.apiUrl + '/show/'  + this.$route.params.slug  )
                    .then(res => {
                    console.log('ciao',res.data);
                    this.post.title = res.data.title;
                    this.post.text = res.data.text;

                });
            }
        },
        mounted(){
            this.getPostDetails();
        }


    }
</script>

<style lang="scss" scoped>

</style>
