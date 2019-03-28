<template>
    <div class="dashboard_form">
        <h1>Add post</h1>
        <form @submit.prevent="submitHandler">
            <div class="input_field">
                <label for="title">Image</label>
                <input type="file" name="image" 
                    ref="myFile"
                    @change="processFile">
            </div>
            <div v-if="imageUpload">
                <img :src="imageUpload.url">
            </div>
            <div class="input_field"
                :class="{invalid: $v.formData.title.$error}">
                <label for="title">Titke</label>
                <input type="text" name="title" 
                    @blur="$v.formData.title.$touch()"
                    v-model="formData.title">
                <div v-if="$v.formData.title.$error">
                    <p class="error_lable"
                        v-if="!$v.formData.title.required">This field is required</p>
                </div>
            </div>
            <div class="input_field"
                :class="{invalid: $v.formData.desc.$error}">
                <label for="desc">Descriptiosn</label>
                <input type="text" name="desc" 
                    @blur="$v.formData.desc.$touch()"
                    v-model="formData.desc">
                <div v-if="$v.formData.desc.$error">
                    <p class="error_lable"
                        v-if="!$v.formData.desc.required">This field is required</p>
                    <p class="error_lable"
                        v-if="!$v.formData.desc.maxLength">Must not be greater than {{$v.formData.desc.$params.maxLength.max }} characters</p>
                </div>
            </div>
            <div class="input_field">
                <label for="content">Content</label>
                <wysiwyg id="content" v-model="formData.content" />
            </div>
            <div class="input_field"
                :class="{invalid: $v.formData.rating.$error}">
                <label for="rating">Rating</label>
                <select 
                    @blur="$v.formData.rating.$touch()"
                    v-model="formData.rating">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <div v-if="$v.formData.rating.$error">
                    <p class="error_lable"
                        v-if="!$v.formData.rating.required">Mark rating</p>
                </div>
            </div>
            <button type="submit">Add post</button>
        </form>
        <md-dialog :md-active="dialog">
            <p>Your post has no content</p>
            <md-dialog-actions>
                <md-button classs="md-primary" @click="dialogCancel">Oop, I want to add it</md-button>
                <md-button class="md-primary" @click="dialogConfirm">Yes I am sure</md-button>
            </md-dialog-actions>
        </md-dialog>
        <div v-if="addPostStatus" class="post_succesfull">Your post was posted</div>
    </div>
</template>

<script>
import { required, maxLength } from 'vuelidate/lib/validators';
import { mapGetters } from 'vuex';

export default {
    data(){
        return{
            error: false,
            dialog: false,
            formData: {
                title: '',
                desc: '',
                content: '',
                rating: '',
                img: ''
            }
        }
    },
    methods: {
        submitHandler(){
             if(!this.$v.$invalid) {
                 if (this.formData.content === '') {
                     this.dialog = true;
                 }else{
                     this.addPost();
                 }
            }else{
                this.error = true;
            }
        },
        addPost(){
            this.formData.img = this.imageUpload.url;
            this.$store.dispatch('admin/addPost', this.formData);
            this.clearForm();
        },
        clearForm(){
            this.$store.commit('admin/clearImage');
            if(this.$refs.myFile){
              this.$refs.myFile.value = '';  
            }
            this.formData = {
                title: '',
                desc: '',
                content: '',
                rating: '',
                img: ''
            };
            this.$v.$reset();
        },
        dialogCancel(){
            this.dialog = false;
        },
        dialogConfirm(){
            this.dialog = false;
            this.addPost();
        },
        processFile(e){
            let file = e.target.files[0];
            this.$store.dispatch('admin/imageUpload', file);
        }
    },
    computed: {
        ...mapGetters('admin', ['addPostStatus', 'imageUpload'])
    },
    destroyed(){
        this.clearForm();
    },
     validations: {
       formData: {
            title: {
                required
            },
            desc: {
                required,
                maxLength: maxLength(100)
            },
            rating: {
                required
            },
        }
    },
}
</script>

<style scoped>
@import "~vue-wysiwyg/dist/vueWysiwyg.css";

.input_field.invalid input,
.input_field.invalid select{
    border: 1px solid red;
}
.error_lable{
    color: red;
}
</style>