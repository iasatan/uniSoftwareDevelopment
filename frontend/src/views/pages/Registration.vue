<template>
  <main>
    <h1>Sign up</h1>
  </main>

  <div id="registrationForm">
    <form @submit.prevent="processForm(formData)" method="post">
      <div>
        <label for="name">Name: </label>
        <input name="name" v-model="formData.name" placeholder="Name" required="required">
      </div>
      <div>
        <label for="email">Email: </label>
        <input type="email" name="email" v-model="formData.email" placeholder="email" required="required">
      </div>
      <div>
        <label for="password">Password: </label>
        <input name="password" v-model="formData.password" placeholder="password" type="password" required="required">
      </div>
      <div>
        <label for="gender">Gender: </label>
        <select required id="gender" v-model="formData.gender" name="gender" >
          <option hidden>Pls select</option>
          <option value="m">Male</option>
          <option value="f">Female</option>
          <option value="o">Other</option>
        </select>
      </div>
      <div>
        <label for="address">Address: </label>
        <input name="address" v-model="formData.address" placeholder="address">
      </div>
      <div>
        <label for="typeOfResidence">Type of residence: </label>
        <select required id="typeOfResidence" v-model="formData.typeOfResidence" name="typeOfResidence" >
          <option disabled selected hidden>Pls select</option>
          <option value="flat">Flat</option>
          <option value="detached house">Detached house</option>
          <option value="cottage">Cottage</option>
          <option value="mansion">Mansion</option>
          <option value="dormitory">Dormitory</option>
        </select>
      </div>
      <input type="submit" value="Sign up!">
    </form>
  </div>

</template>

<script>
import axios from "axios";
import router from "../../router";

export default {
  name: 'Registration',
  data ()
  {
    return {
      formData: {
        errors: [],
        name: '',
        email: '',
        password: '',
        gender: '',
        address: '',
        typeOfResidence: ''
      }
    }
  },
  methods : {
    processForm: function (formData) {

      axios.post(`http://localhost:3000/signup`, {
            name: formData.name,
            email: formData.email,
            password: formData.password,
            gender: formData.gender,
            address: formData.address,
            typeOfResidence: formData.typeOfResidence
          }).then(function (response) {
            console.log(response);
      }).catch(e => {
              console.log(e);
            });
      alert('Registration successfull.');
      router.push('HomePage');
    }
  }
}
</script>

<style scoped>
  input, select {
    width: 75%;
    padding: 12px;
    margin: 8px 0;
    box-sizing: border-box;
    border-radius: 4px;
    border: 2px solid green;
    alignment: center;
  }

  option {
   padding: 12px;
   margin: 8px 0;
 }

  label {
    padding: 12px 12px 12px 0;
    display: inline-block;
    alignment: center;
    width: 75%;
    margin-top: 6px;
    font-weight: bold;
    font-size: larger;
  }

  input:focus {
    background-color: lightblue;
  }

  input[type = submit] {
    font-weight: bold;
    font-size: larger;
  }

  input[type=submit]:hover {
    background-color: #45a049;
    color: white;
  }

</style>