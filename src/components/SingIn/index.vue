<template>
    <div class="container">
        <div class="signin_container">
            <h1>Sing in</h1>
            <form @submit.prevent="onSubmit">
                <div class="input_field"
                    :class="{invalid: $v.formData.email.$error}">
                    <label for="email">Email</label>
                    <input type="email" name="email" 
                        v-model="formData.email"
                        @blur="$v.formData.email.$touch()"
                        id="email">
                    <div v-if="$v.formData.email.$error">
                        <p class="error_lable"
                            v-if="!$v.formData.email.required">This field is required</p>
                         <p class="error_lable"
                            v-if="!$v.formData.email.email">Please enter a valid email</p>
                    </div>
                </div>
                <div class="input_field"
                    :class="{invalid: $v.formData.password.$error}">
                    <label for="password">Password</label>
                    <input type="password" name="password" 
                        v-model="formData.password"
                        @blur="$v.formData.password.$touch()"
                        id="password">
                    <div v-if="$v.formData.password.$error">
                        <p class="error_lable"
                            v-if="!$v.formData.password.required">This field is required</p>
                         <p class="error_lable"
                            v-if="!$v.formData.password.minLength">At least 4 characters</p>
                    </div>
                </div>
                <button type="submit">Sing in</button>
                <p class="error_lable"
                    v-if="error">Something is goes wrong</p>
            </form>
            
        </div>
    </div>
</template>

<script>
import { required, email, minLength } from 'vuelidate/lib/validators';
import { setTimeout } from 'timers';

export default {
    data(){
        return{
            error: false,
            formData: {
                email: '',
                password: ''
            }
        }
    },
    validations: {
       formData: {
            email: {
                required,
                email
            },
            password: {
                required,
                minLength: minLength(4)
            }
        }
    },
    methods: {
        onSubmit(){
            if(!this.$v.$invalid) {
                this.$store.dispatch('admin/singin', this.formData);
            }else{
                this.error = true;
                setTimeout(() => {
                     this.error = false;
                }, 1000);
            }

            
        }
    }
}
</script>

<style>
.input_field.invalid input,
.input_field.invalid select{
    border: 1px solid red;
}
.error_lable{
    color: red;
}
</style>
