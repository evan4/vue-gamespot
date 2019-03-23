<template>
  <div id="app">
    <compHeader/>
    <compFooter/>
  </div>
</template>

<script>
import compHeader from './components/header_footer/Header';
import compFooter from './components/header_footer/Footer';

export default {
  name: 'app',
  components: {
    compHeader,
    compFooter
  }
}
</script>

<style>
@import url('./assets/css/fonts.css');
@import url('./assets/css/style.css');
</style>
