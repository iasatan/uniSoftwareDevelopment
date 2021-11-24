<template>
    <main>
        <h1>User Admin 😎</h1>
        <div>
          <div class="card"  v-for="user in users" :key="user.uid">
            <img v-if= "user.gender == 'm'" src="../img/userm.png" alt="Avatar" style="width:100%">
            <img v-if= "user.gender == 'f'" src="../img/userf.png" alt="Avatar" style="width:100%">
            <img v-if= "user.gender == 'o'" src="../img/usero.png" alt="Avatar" style="width:100%">
            <div class="container">
              <h4 v-if="!user.editing" @dblclick="edit(user)"><b>{{user.name}}</b></h4>
              <input class="inp" v-else type="text" v-model="user.name"  >
              <p v-if="!user.editing" @dblclick="edit(user)">{{ user.email }}</p>
              <input class="inp" v-else type="text" v-model="user.email"  >
              <p v-if="!user.editing" @dblclick="edit(user)">{{ user.address }}</p>
              <input class="inp"  v-else type="text" v-model="user.address" >
              <p v-if="!user.editing" @dblclick="edit(user)">{{ user.gender }}</p>
              <select class="inp"  v-else v-model="user.gender">
                <option value="m">Male</option>
                <option value="f">Female</option>
                <option value="o">Other</option>
              </select>
              <p v-if="!user.editing" @dblclick="edit(user)">{{ user.typeOfResidence }}</p>
              <select class="inp"  v-else v-model="user.typeOfResidence">
                <option value="flat">flat</option>
                <option value="detached house">detached house</option>
                <option value="cottage">cottage</option>
                <option value="mansion">mansion</option>
                <option value="dormitory">dormitory</option>
              </select>
              <button v-if="user.editing" type="button" @click="doneEdit(user)">Done</button>
              <button v-if="!user.editing" type="button" @click="remove(user.uid)">Delete</button>
            </div>
          </div>

        </div>

    </main>
</template>

<script>

import axios from 'axios';

  export default {
    name:'adminuser',
    data(){
      return{
        users:[],
        myModel:false,

        user:{
          uid:null,
          name:'',
          email:'',
          password:'',
          gender:'',
          address:'',
          typeOfResidence:'',
          editing:false
        }

      }
    },
    created() {
      this.list()
    },
    methods:{
      list(){
        axios.get('http://localhost:8080/users/').then(resp => {
          this.users=resp.data;
          console.log(resp.data);

        });
      },
      edit(user){
        user.editing=true;
      },
      doneEdit(user){
        this.modify(user);
        user.editing = false;

      },

      modify(user){
        axios.put('http://localhost:8080/users/'+user.uid, {
          name: user.name,
          email: user.email,
          password: user.password,
          gender: user.gender,
          address: user.address,
          typeOfResidence: user.typeOfResidence,
        }).then(resp => {
          this.user=resp.data;
          console.log(this.user);
          this.list();
        })
      },

      remove(id){
        axios.delete('http://localhost:8080/users/'+id).then(resp =>{
          console.log(resp.data)
          this.list();

        })
      },
    }
  };
</script>

<style scoped>
.inp{
  margin: 5px;
}
</style>