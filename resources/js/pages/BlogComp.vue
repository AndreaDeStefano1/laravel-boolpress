<template>
    <div>
        <h1 class="text-center">POST</h1>
        <div class="container d-flex justify-content-between">
            <div class="posts-container">
                <ul>

                    <PostComp
                    v-for="post in posts"
                    :key="post.id"
                    :post='post'/>
                </ul>
                <nav aria-label="..." v-if="pagination">
                    <ul class="pagination justify-content-center">

                        <li v-if="pagination.current - 1 > 0" class="page-item " @click="getApi(pagination.current - 1)">
                            <a class="page-link" href="#" tabindex="-1">Previous</a>
                        </li>

                        <li v-if="pagination.current - 1 > 0" @click="getApi(pagination.current - 1)" class="page-item">
                            <a class="page-link" href="#">{{ pagination.current - 1 }}</a>
                        </li>

                        <li class="page-item active">
                            <a class="page-link" href="#">{{ pagination.current }}</a>
                        </li>

                        <li v-if="pagination.current + 1 <= pagination.last" class="page-item">
                            <a  @click="getApi(pagination.current + 1)" class="page-link" href="#">{{ pagination.current + 1 }}</a>
                        </li>

                        <li v-if="pagination.current + 1 <= pagination.last" class="page-item" @click="getApi(pagination.current + 1)">
                            <a class="page-link" href="#">Next</a>
                        </li>

                    </ul>
                </nav>
            </div>
            <div class="sidebar">
                <SidebarComp
                :tags="tags"
                @postByTag="postByTag" />
            </div>
        </div>
    </div>
</template>

<script>
import PostComp from '../partials/PostComp';
import SidebarComp from '../partials/SidebarComp.vue';

    export default {
        name:'BlogComp',
        components:{
    PostComp,
    SidebarComp
},
        data(){
            return {
                apiUrl:'http://127.0.0.1:8000/api/posts',
                posts: null,
                pagination:{
                    current: null,
                    last: null
                },
                tags:[],
                pagination: true
            }
        },
        methods: {
            getApi(page) {
                axios.get(this.apiUrl + '?page=' + page )
                    .then(res => {
                    //console.log(res.data);
                    this.posts = res.data.posts.data;
                    this.pagination = {
                        current: res.data.posts.current_page,
                        last: res.data.posts.last_page
                    };
                    this.tags = res.data.tags
                });
            },
            postByTag(slug) {
                axios.get(this.apiUrl + '/post-tag/' + slug )
                    .then(res => {
                    console.log(res.data);
                    this.posts = res.data.posts.posts;
                    this.pagination = false
                });
            },
        },
        mounted() {
            this.getApi(1);
        }

    }
</script>

<style lang="scss" scoped>
.sidebar{
    width: 30%;
}
.posts-container{
    width: 60%;

}

</style>
