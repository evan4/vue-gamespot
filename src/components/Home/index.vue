<template>
    <div>
        <comp-featured/>
        <comp-content/>
    </div>
</template>

<script>
import compFeatured from './featured';
import compContent from './content';

export default {
    components: {
        compFeatured,
        compContent
    }
}
</script>

<style>

</style>
