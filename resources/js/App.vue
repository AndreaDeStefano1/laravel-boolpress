<!-- creo il componente principale di vue -->
<template>
    <div>
        <HeaderComp/>
        <div class="container">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import HeaderComp from './partials/HeaderComp.vue';



export default {
    data() {
        return {

        };
    },
    components:{
        HeaderComp,
    },


}
</script>

<style lang="scss" scoped>

</style>
