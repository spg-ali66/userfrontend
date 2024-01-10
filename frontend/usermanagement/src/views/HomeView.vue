<template>
  <div class="titel">
  Users
  </div>
  <div>
    <v-table theme="dark">
      <thead>
        <tr>
           <th class="text-center kopf">
            Name
           </th> 
           <th class="text-center kopf">
            Created
           </th>
           <th class="text-center kopf">
            Role
           </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td> <span class="username">{{ user.name }}</span> <br> <span>{{ user.email }}</span></td>
          <td>{{ user.created }}</td>
          <td>{{ user.role }}</td>
          <td><button class="btn-more"><svg-icon type="mdi" :path="path"></svg-icon></button></td>
        </tr>
      </tbody>
    </v-table>
  </div>
</template>
<script>
import axios from 'axios';
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiDotsHorizontal } from '@mdi/js';


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
  }
};
  </script>
<style scoped>
.titel{
  color: brown;
  font-size: medium;
}
.kopf{
  color: turquoise;
}
.username{
  font-weight: bold;
}
.btn-more{
  background-color: transparent;
  border: none;
}
</style>