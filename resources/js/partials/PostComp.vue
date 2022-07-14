<template>
    <div>


            <li>
                <h3>{{ post.title }}</h3>
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
