<template>
    <div>
        <h1 class="text-center">POST</h1>
        <ul>

            <PostComp
            v-for="post in posts"
            :key="post.id"
            :post='post'/>
        </ul>
        <nav aria-label="...">
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
                <li class="page-item">
                    <a v-if="pagination.current + 1 <= pagination.last" @click="getApi(pagination.current + 1)" class="page-link" href="#">{{ pagination.current + 1 }}</a>
                    </li>
                <li v-if="pagination.current + 1 <= pagination.last" class="page-item" @click="getApi(pagination.current + 1)">
                    <a class="page-link" href="#">Next</a>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
import PostComp from '../partials/PostComp';

    export default {
        name:'BlogComp',
        components:{
            PostComp,
            PaginationComp
        },
        data(){
            return {
                apiUrl:'http://127.0.0.1:8000/api/posts',
                posts: null,
                pagination:{
                    current: null,
                    last: null
                }
            }
        },
        methods: {
            getApi(page) {
                axios.get(this.apiUrl + '?page=' + page )
                    .then(res => {
                    console.log(res.data);
                    this.posts = res.data.posts.data;
                    this.pagination = {
                        current: res.data.posts.current_page,
                        last: res.data.posts.last_page
                    };
                });
            }
        },
        mounted() {
            this.getApi(1);
        }

    }
</script>

<style lang="scss" scoped>

</style>
