<template>
<div class="querystu">
  <v-simple-table style="align='center">
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            工号
          </th>
          <th class="text-left">
            姓名
          </th>
           <th class="text-left">
            性别
          </th>
           <th class="text-left">
            管理楼栋
          </th>
           <th class="text-left">
            月薪
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in desserts"
          :key="item.name"
        >
          <td>{{ item}}</td>
          <!-- <td>{{ item.calories }}</td> -->
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</div>
</template>
<script>
import axios from 'axios';
  export default {
    data () {
      return {
        desserts:''
      }
    }, mounted(){
         axios({
            method:'get',
            url:'http://httpbin.org/'
          }).then(res =>{
            this.desserts = res.data;
            console.log(res.data);
          })
          
    } 
  }
</script>