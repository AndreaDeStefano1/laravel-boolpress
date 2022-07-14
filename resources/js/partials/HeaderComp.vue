<template>
    <header>
        <nav class="navbar navbar-expand-lg navbar-light align-items-center">
            <div class="collapse navbar-collapse justify-content-center align-items-center" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item font-weight-bolder mx-2 ">
                        <router-link class="" :to="{name:'home'}">HOME</router-link>
                    </li>
                    <li class="nav-item font-weight-bolder mx-2">
                        <router-link class="" :to="{name:'blog'}">BLOG</router-link>
                    </li>
                    <li class="nav-item font-weight-bolder mx-2">
                        <router-link class="" :to="{name:'about'}">CHI SIAMO</router-link>
                    </li>
                    <li class="nav-item font-weight-bolder mx-2">
                        <router-link class="" :to="{name:'contacts'}">CONTATTI</router-link>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'HeaderComp',
    data () {
        return {}
    }
}
</script>

<style lang="scss" scoped>
header{
    height: 60px;
    background-color: grey;

    nav{
        height: 100%;

        ul{
            li{
                a{
                    color: black;
                    &.active,
                    &:hover{
                        color: green;
                    }
                }
            }
        }
    }
}

</style>
