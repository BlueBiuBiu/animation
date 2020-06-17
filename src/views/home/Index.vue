<template>
    <div v-show='$store.state.isIndexShow' >
        <home-swiper></home-swiper>
        <tab-bar></tab-bar>
        <tab-bar>
            <div slot='left'>国产动漫</div>
        </tab-bar>
        <tab-bar>
            <div slot='left'>日本动漫</div>
        </tab-bar>
        <tab-bar>
            <div slot='left'>欧美动漫</div>
        </tab-bar>
        <tab-bar>
            <div slot='left'>全部动漫</div>
            <div slot='center'></div>
        </tab-bar>
    </div>
</template>

<script>
import TabBar from 'components/common/tabbar/TabBar'

import HomeSwiper from './childComs/HomeSwiper'
export default {
    name: '',
    data() {
        return {

        }
    },
    components: {
        TabBar,
        HomeSwiper
    }
}
</script>

<style scoped>

</style>
