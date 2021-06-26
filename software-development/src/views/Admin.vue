<template>
    <v-app>
        <v-app-bar height="64" color="primary" :elevation="appbarShadow" clipped-left app dark>
            <v-toolbar-title>
                <v-avatar tile>
                    <v-icon size="40" style="transform: rotate(180deg)">mdi-android-auto</v-icon>
                </v-avatar> 宿舍管理系统
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
                <v-btn text @click="logout">
                    <v-text>退出登录</v-text>
                </v-btn>
            </v-toolbar-items>
        </v-app-bar>

        <Navigation :miniNav="miniNav" :backgroundNav="backgroundNav" />

        <v-content class="divder pb-12" :style="background">
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
            
        </v-content>
    </v-app>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Navigation from '../components/adminNav.vue'

export default {
    name: 'Home',
    components: {
        Navigation
    },
    data() {
        return {
            tabList: [],
            setting: false,
            miniNav: false,
            tabsView: true,
            backgroundNav: true,
            appbarShadow: 4,
            background: {
                backgroundImage: `url(${require('../assets/background.png')})`,
                backgroundAttachment: 'fixed'
            },
            fullscreenIcon: 'mdi-fullscreen',
            tabMenu: false,
            x: 0,
            y: 0
        }
    },
    mounted() {
        this.tabList.push({
            name: this.$route.name,
            path: this.$route.path,
            title: this.$route.meta
        })
        this.tabsView = JSON.parse(localStorage.getItem('tabsView') || true)
        this.miniNav = JSON.parse(localStorage.getItem('miniNav') || false)
        this.backgroundNav = JSON.parse(localStorage.getItem('backgroundNav') || true)
        this.appbarShadow = localStorage.getItem('appbarShadow') || 4
    },
    methods: {
        logout() {
            localStorage.removeItem('token')
            this.$router.push('/login')
        }
    },
    watch: {
        $route(to) {
            // 查找tabs里面是否已经包含该路由
            let isCover = this.tabList.some((val) => {
                return val.name == to.name
            });
            !isCover && this.tabList.push({
                name: to.name,
                path: to.path,
                title: to.meta
            })
        }
    }
}
</script>