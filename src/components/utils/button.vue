<template>
    <div>
        <router-link 
        v-if="type === 'link'"
        :class="['button_default', ...addClass]"
        :to="linkTo">
            <slot></slot>   
        </router-link>
       <div v-if="type === 'btn'"
        @click="action"
        :class="['button_default', ...addClass]"
        >
            <slot></slot> 
       </div>
    </div>
</template>

<script>
export default {
    props: {
        linkTo: {
            type: String,
            required: true,
        },
        addClass: Array,
        ovStyle: Object,
        type: {
            type: String,
            required: true,
        },
        action: {
            type: Function
        }
    }
}
</script>

<style>

</style>
