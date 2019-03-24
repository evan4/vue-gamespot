<template>
    <div class="container">
        <div class="signin_container">
            <h1>Sing in</h1>
            <form @submit.prevent="onSubmit">
                <div class="input_field">
                    <label for="email">Email</label>
                    <input type="email" name="email" 
                        v-model="formData.email"
                        id="email">
                </div>
                <div class="input_field">
                    <label for="password">Password</label>
                    <input type="password" name="password" 
                        v-model="formData.password"
                        id="password">
                </div>
                <button type="submit">Sing in</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            formData: {
                email: '',
                password: ''
            }
        }
    },
    methods: {
        onSubmit(){
            this.$store.dispatch('admin/singin', this.formData);
        }
    }
}
</script>

<style>

</style>
