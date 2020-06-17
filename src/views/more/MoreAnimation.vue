<template>
    <div class="more">
        <swiper class="more-swiper">
            <swiper-item :key='index' v-for="(item,index) in recommend">
                <img :src="item.src" alt="">
            </swiper-item>
        </swiper>
        <div class="type">
            <table>
                <tr>
                    <td class="typeTd">类型:</td>
                    <td :key='index' v-for="(item,index) in animationType" class="tdList">
                        <a href="#">{{item}}</a>
                    </td>
                </tr>
                <tr>
                    <td class="typeTd">年份:</td>
                    <td :key='index' v-for="(item,index) in animationYear" class="tdList">
                        <a href="#">{{item}}</a>
                    </td>
                </tr>
                <tr>
                    <td class="typeTd">语言:</td>
                    <td :key='index' v-for="(item,index) in animationLanguage" class="tdList">
                        <a href="#" >{{item}}</a>
                    </td>
                </tr>
            </table>
        </div>
        <tab-bar>
            <div slot='left'></div>
            <div slot="center"></div>
        </tab-bar>
    </div>
</template>

<script>
import {Swiper,SwiperItem} from 'components/common/swiper/index'
import TabBar from 'components/common/tabbar/TabBar'
export default {
    name: '',
    data() {
        return {
            animationType: ['全部', '热血', '校园', '恋爱', '竞技'],
            animationYear: ['全部', '2020', '2019', '2018', '2017'],
            animationLanguage: ['全部', '国语', '日语', '英语', '韩语'],
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
        SwiperItem,
        TabBar
    }
}
</script>

<style scoped>
    .more {
        height: 100%;
    }
    .type {
        background-color: rgb(247, 247, 247);
        font-size: 11px;
        margin-bottom: 10px;
    }
    .type .typeTd {
        color: rgba(31, 27, 27, 0.308);
        padding: 5px 10px;
    }
    .type .tdList {
        padding-right: 10px;
    }
    .more-swiper {
        margin-bottom: 20px;
    }
    .more-swiper img {
        height: 100%;
    }
</style>
