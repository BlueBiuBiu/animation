<template>
    <div class="login" v-show='isShow'>
        <div class="user-id">
            <label for="userId">账号:</label>
            <input type="text" id='userId' placeholder="请输入账号">
        </div>
        <div class="pass-word">
            <label for="passWord">密码:</label>
            <input type="text" id='passWord' placeholder="请输入密码">
        </div>
        <div class="bottom">
            <button class="login-button" @click="loginClick">登录</button>
            <button class="register-button">注册</button>
        </div>
    </div>
</template>

<script>
export default {
    name: '',
    data() {
        return {
            isShow: true
        }
    },
    methods: {
        loginClick(){
            this.$router.replace('/index')
            this.isShow = false
            this.$store.commit('loginClick')
        }
    },
}
</script>

<style scoped>
    body {
        background: url(../../assets/img/test.jpg);
    }
    .login {
        width: 80%;
        position: fixed;
        top: 40%;
        left: 60%;
        transform: translate(-50%,-50%);
        font-size: 14px;
    }
    .user-id {
        display: flex;
        margin-bottom: 5px;
    }
    .user-id label {
        display: flex;
        margin-right: 5px;
    }
    .pass-word label{
        margin-right: 5px;
    }
    .bottom {
        display: flex;
        margin-top: 10px;
        justify-content: center ;
    }
    .login-button {
        margin-right: 3px;
    }
    @import '~assets/css/normal.css'
</style>
