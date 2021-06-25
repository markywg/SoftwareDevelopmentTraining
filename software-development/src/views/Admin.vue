<template>
<v-app class="admin">
    <nav>
        <v-toolbar>
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title class="black--text">
                <span class="font-weight-light">宿舍管理系统</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn flat color="white" @click="$router.push({path: '/login'})">
                <span>退出登录</span>
                <v-icon right>exit_to_app</v-icon>
            </v-btn>
        </v-toolbar>

        <v-navigation-drawer v-model="drawer" absolute temporary class="indigo lighten-2">
            <v-list
                nav
                dense
            >
                <v-list-item-group
                active-class="light-indigo--text text--accent-4"
                >
                    <v-list-item link @click="$router.push({path: '/home'})">
                        <v-list-item-icon>
                        <v-icon>mdi-home</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title class="white--text">首页</v-list-item-title>
                    </v-list-item>
                        
                        <v-list-group
                        no-action
                        sub-group
                        >
                            <template v-slot:activator>
                                <v-list-item-content>
                                    <v-list-item-title class="white--text">查询用户信息</v-list-item-title>
                                </v-list-item-content>
                            </template>

                            <v-list-item
                                v-for="link in searchlinks" 
                                :key="link.title" 
                                link @click="$router.push({path: link.route})"
                            >
                                <v-list-item-title v-text="link.title" class="white--text"></v-list-item-title>
                            </v-list-item>
                        </v-list-group>


                    <v-list-group
                        no-action
                        sub-group
                    >
                        <template v-slot:activator>
                            <v-list-item-content>
                                <v-list-item-title class="white--text">管理用户信息</v-list-item-title>
                            </v-list-item-content>
                        </template>

                        <v-list-item
                            v-for="link in managelinks" 
                            :key="link.title" 
                            link @click="$router.push({path: link.route})"
                        >
                            <v-list-item-title v-text="link.title" class="white--text"></v-list-item-title>
                        </v-list-item>
                    </v-list-group>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>
    </nav>

    <router-view></router-view>
</v-app>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name: 'admin',
    data() {
        return{
            drawer: false,
            group: null,
            searchlinks: [
                {title: '查询学生信息',route: '/admin/querystu'},
                {title: '查询宿管信息',route: '/admin/queryhp'}
            ],
            managelinks: [
                {title: "管理学生信息",route: '/admin/managestu'},
                {title: "管理宿管信息",route: '/admin/managehp'}
            ]
        }
    }
})
</script>