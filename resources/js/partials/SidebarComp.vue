<template>
    <div>

        <h1 class="text-center">TAG</h1>
        <ul>
            <li v-for="tag in tags" :key="tag.id"
            @click="$emit('postByTag',tag.slug)">{{ tag.name }}</li>
        </ul>

    </div>
</template>

<script>

    export default {
        name:'SidebarComp',
        props:{

        },
        data(){
            return {

            }
        },
        props:{
            tags: Array
        }
    }
</script>

<style lang="scss" scoped>

</style>
