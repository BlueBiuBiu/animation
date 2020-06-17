<template>
    <div>
        <swiper class="home-swiper">
            <swiper-item :key="index" v-for="(item,index) in recommend">
                <img :src="item.src" alt="">
            </swiper-item>
        </swiper>
    </div>
</template>

<script>
import {Swiper,SwiperItem} from 'components/common/swiper/index'
export default {
    name: '',
    data() {
        return {
            recommend: [                
                {src: require('assets/img/0.jpg')},
                {src: require('assets/img/1.jpg')},
                {src: require('assets/img/2.jpg')},
                {src: require('assets/img/3.jpg')}
            ]
        }
    },
    components: {
        Swiper,
        SwiperItem
    }
}
</script>

<style scoped>
    .home-swiper img{
        height: 100%;
    }
</style>
