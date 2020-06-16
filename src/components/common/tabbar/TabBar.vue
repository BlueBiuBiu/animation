<template>
    <div class="tabbar">
        <div class="tab">
            <div class='left'><slot name='left'>热门推荐</slot></div>
            <div class='center'><slot name='center'>更多 ></slot></div>
        </div>
        <table>
            <tr class='tab-bottom' v-for='(item,index) in animations' :key='index' >
                <td><img :src="item.src" alt=""><div>{{item.title}}</div></td>
                <td><img :src="item.src" alt=""><div>{{item.title}}</div></td>
                <td><img :src="item.src" alt=""><div>{{item.title}}</div></td>
            </tr>              
        </table>   
    </div>
</template>

<script>
export default {
    name: 'TabBar',
    data() {
        return {
            animations: [
                {title:'图片1', src: require('assets/img/0.jpg')},
                {title:'图片2', src: require('assets/img/1.jpg')},
                {title:'图片3', src: require('assets/img/2.jpg')}
            ]
        }
    },
}
</script>

<style scoped>
    .tabbar {
        padding: 10px 10px;
        background: #eee;
        margin-bottom: 30px;
        border-radius: 7px;
    }
    .tab {
        display: flex;
    }
    .left {
        margin-right: 10px;
    }
    .center {
        display: flex;
        font-size: 11px;
        padding-top: 5px;
        color: rgba(31, 27, 27, 0.308);
    }
    .tab-bottom {
        font-size: 12px;
        text-align: center;
        font-weight: 550;
    }
    .tab-bottom img {
        width: 90px;
        border-radius: 5px; 
        height: 110px;
    }
</style>
