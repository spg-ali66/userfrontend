<template>
  <div class="titel">
  Users
  </div>
  <div>
    <v-table theme="dark">
      <thead>
        <tr>
           <th class="text-center">
            Name
           </th> 
           <th class="text-center">
            Created
           </th>
           <th class="text-center">
            Role
           </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id"></tr>
      </tbody>
    </v-table>
  </div>
</template>
<script setup>
import axios from 'axios';
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiDotsHorizontal } from '@mdi/js';
</script>
<script>
export default{
  components:{
    SvgIcon
  },
  data(){
    return{
      users: [
        {id: 1, name: "John Doe", email:"johndoe@gmail.com",created:"13.12.2023",role:"Guest"},
        {id: 2, name: "Jane Doe", email:"janedoe@gmail.com", created:"11.12.2023",role: "Admin"}
      ],
      path: mdiDotsHorizontal,
    };
  },
  async mounted(){
    try{
      const response = await axios.get("users/all");
      this.users = response.date;
    }
    catch(e){
      alert(e)
    }
    
  },
  methods:{

  },
}
</script>
<style scoped></style>