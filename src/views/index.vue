<template>
    <div v-show='$store.state.isIndexShow' >
        <tab-bar></tab-bar>
        <tab-bar>
            <div slot='left'>国产动漫</div>
        </tab-bar>
    </div>
</template>

<script>
import TabBar from 'components/common/tabbar/TabBar'
export default {
    name: '',
    data() {
        return {

        }
    },
    components: {
        TabBar
    }
}
</script>

<style scoped>

</style>
