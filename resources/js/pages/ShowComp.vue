<template>
    <div>
        <h1>Titolo: {{ post.title }}</h1>
        <h4>Tags:</h4>
        <span class="tag-badge" v-for="tag in post.tags" :key="tag.id">
            {{ tag.name }}
        </span>
        <h3 class="mt-3">Cosa dice il post:</h3>
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
                    text: '',
                    tags:[]
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
                    this.post.tags = res.data.tags
                    console.log(this.post.tags);
                });
            }
        },
        mounted(){
            this.getPostDetails();
        }


    }
</script>

<style lang="scss" scoped>
.tag-badge{
    color: white;
    background-color: rgb(11, 172, 11);
    border-radius: 20px;
    margin-right: 10px;
    padding: 3px 10px;
}
</style>
