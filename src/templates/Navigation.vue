<template>
    <div class="navigation-layer">
        <ul>
            <li class="nav-item" v-bind:class="{ chosen: router.rootPage==='nav1' }" @click="onNav1Click">
                <a>nav1</a>
            </li>
            <li class="nav-item" v-bind:class="{ chosen: router.rootPage==='nav2' }" @click="onNav2Click">
                <a>nav2</a>
            </li>
            <li class="nav-item" v-bind:class="{ chosen: router.rootPage==='nav3' }" @click="onNav3Click">
                <a>nav3</a>
            </li>
        </ul>
    </div>
</template>

<script>
    import { mapState } from 'vuex';
    export default {
        data(){
            return {
            }
        },
        name:"navView",
        created: function(){

        },
        methods:{
            onNav1Click : function(){
                this.$router.replace("/nav1");
            },
            onNav2Click: function(){
                this.$router.replace("/nav2");
            },
            onNav3Click: function(){
                this.$router.replace("/nav3");
            }
        },
        computed: {
            ...mapState("router", {
                router: state => ({...state})
            })
        }
    }

</script>

<style scoped>
    .navigation-layer ul{display: flex;align-items: center;padding: 0 .86rem;justify-content: space-between;height: 100%;color: #aaaaaa;}
    .nav-item{display: flex;flex-direction: column;align-items: center;width: 33%; height: 1rem}
    .nav-item a{transform: scale(.83);}
    .nav-item.chosen a{color: #fbcf29;}
</style>
