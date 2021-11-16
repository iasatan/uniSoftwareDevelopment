<template>
    <main>
        <h1>Login into your account</h1>
        <form id="login-form" class="login-form" @submit.prevent="processForm(loginData)">
            <div class="form-group">
                <label for="email">Email</label>
                <input
                    v-model="loginData.email"
                    type="email"
                    name="email" 
                    id="email"
                >
                <label for="password">Password</label>
                <input
                    v-model="loginData.password"
                    type="password"
                    name="password" 
                    id="password"
                >
                <button class="submit-btn" type="submit">Login</button>
            </div>

            <div v-if="errors.length > 0" class="errors">
                <ul>
                    <li v-for="(error, k) in errors" :key="k">
                        {{ error }}
                    </li>
                </ul>
            </div>
        </form>
    </main>
</template>

<script>
    import axios from "axios";
    import { mapActions } from "vuex";

    export default {
        name: 'LoginPage',
        data() {
            return {
                loginData: {
                    email: '',
                    password: ''
                },
                errors: []
            }
        },
        methods: {
            ...mapActions(["login"]),
            processForm: function(loginData) {
                axios
                    .post(`http://localhost:8080/signin`, {
                        email: loginData.email,
                        password: loginData.password
                    })
                    .then(response => {
                        if(response.status == 200) {
                            const { token, user } = response.data;
                            
                            this.login({token, user});

                            this.$router.push('/');
                        }
                    })
                    .catch(e => {
                        console.log(e);

                        this.errors = e?.response?.data?.errors || [];
                    });
            }
        },
    }
</script>

<style scoped>
    .login-form {
        max-width: 200px;
        margin: auto;
    }

    .form-group {
        display: flex;
        flex-direction: column;
    }

    label {
        text-align: left;
        font-weight: bold;
    }

    input {
        margin-bottom: 10px;
        height: 20px;
        padding: 2px 5px;
    }

    .submit-btn {
        width: 80px;
        color: white;
        background-color: #42b983;
        border: none;
        padding: 5px 10px;
        font-size: 15px;
        font-weight: bold;
        margin: auto;
        margin-top: 5px;
        transition: 0.5s;
        border: 1px solid transparent;
    }

    .submit-btn:hover {
        background-color: transparent;
        color: black;
        border-color: black;
    }

    .errors ul {
        list-style: none;
        color: red;
        padding: 0;
    }

    .errors li {
        margin: 5px 0;
    }
</style>