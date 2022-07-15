<template>
    <div>


            <li>
                <router-link :to="{name:'show',params:{slug: post.slug}}">{{ post.title }}</router-link>
                <p>{{ post.text }} </p>
            </li>


    </div>
</template>

<script>

    export default {
        name:'PostComp',
        props:{
            post: Object,
        },
        data(){
            return {

            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
