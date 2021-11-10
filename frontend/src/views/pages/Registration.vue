<template>
  <main>
    <h1 align="left">Sign up</h1>
  </main>

  <div id="registrationForm">
    <form @submit="signUp" method="post">
      <div>
        <label for="name">Name: </label>
        <input name="name" v-model="name" placeholder="name" required="required">
      </div>
      <div>
        <label for="email">Email: </label>
        <input type="email" name="email" v-model="email" placeholder="email" required="required">
      </div>
      <div>
        <label for="password">Password: </label>
        <input name="password" v-model="password" placeholder="password" type="password" required="required">
      </div>
      <div>
        <label for="gender">Gender: </label>
        <select required id="gender" v-model="gender" name="gender" >
          <option hidden>Pls select</option>
          <option value="m">Male</option>
          <option value="f">Female</option>
          <option value="o">Other</option>
        </select>
      </div>
      <div>
        <label for="address">Address: </label>
        <input name="address" v-model="address" placeholder="address">
      </div>
      <div>
        <label for="typeOfResidence">Type of residence: </label>
        <select required id="typeOfResidence" v-model="typeOfResidence" name="typeOfResidence" >
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
export default {
  name: 'Registration',
  data ()
  {
    return {
      errors: [],
      name: null,
      email: null,
      password: null,
      gender: null,
      address: null,
      typeOfResidence: null
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
    float: right;
  }

 option {
   padding: 12px;
   margin: 8px 0;
 }

  label {
    padding: 12px 12px 12px 0;
    display: inline-block;
    float: right;
    width: 75%;
    margin-top: 6px;
    font-weight: bold;
    font-size: larger;
  }
  input:focus {
    background-color: lightblue;
  }
  input[type=submit]:hover {
    background-color: #45a049;
  }



 #registrationForm {
align-content: center;
 }

</style>