<template>
    <div class="auth">
        <div class="tabs is-centered">
  <ul>
    <li 
    :class="{'is-active': !register}">
        <a @click.prevent="register=false">Login</a>
    </li>
    <li
    :class="{'is-active': register}">
        <a @click.prevent="register=true" >Register</a>
    </li>
  </ul>
</div>

<div class="card auth-form">
  <div class="card-content">
    <div class="title has-text-centered">{{formTitle}}</div>

    <form
    @submit.prevent="onSubmit"
    >
        <div class="field">
        <label class="label">Email</label>
        <div class="control">
            <input
              v-model="credentials.email"
              class="input"
              placeholder="e.g. alexsmith@gmail.com"
              type="email"
            >
        </div>
        </div>

        <div class="field">
        <label class="label">Password</label>
        <div class="control">
            <input
              v-model="credentials.password"
              class="input"
              placeholder="Enter Password"
              type="password"
            >
        </div>
        </div>

        <div class="field is-grouped is-grouped-right">
        <p class="control">
            <button class="button is-primary" id="submitBtn">
            {{formTitle}}
            </button>
        </p>
        </div>


    </form>

  </div>
</div>

<br><br>
    </div>
</template>
<script setup>

/* imports */

import {computed, reactive, ref} from 'vue'
import Swal from 'sweetalert2'
import {useAuth} from '@/stores/Auth'

/* Store */

const storeAuth =  useAuth()

/* register/login */

const register = ref(false)

/* Form title */

const formTitle = computed(() => {
    return register.value ? 'Register' : 'Login'
})

/* Credientials */

const credentials = reactive({

    email:'',
    password:''
})
/* Submit */

const onSubmit = () => {
    if(!credentials.email || !credentials.password){
        Swal.fire('Please enter an email and password') 
    }
    else{
        if(register.value){
            storeAuth.registerUser(credentials)
        }
        else{
            storeAuth.loginUser(credentials)
        }
    }
}

</script>

<style>

.auth-form{
    max-width: 400px;
    margin: 0 auto;
}

#submitBtn{
    background-color: rgb(135, 176, 236);
}


</style>