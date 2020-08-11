<template>
  <div id="app">
    <myScroll :ops="ops">
      <headerbox></headerbox>
      <router-view></router-view>  
      <footerBottom></footerBottom>
    </myScroll>
  </div>
</template>

<script>
  import headerbox from '@/components/navbar'
  import footerBottom from '@/components/footer'
  export default {
    name: 'App',   
    components: { headerbox,footerBottom }, 
    data() {
      return {
        ops: {
          vuescroll: {},
          scrollPanel: {},
          rail: {background: 'transparent',},
          bar: {background: '#000',opacity: .4,}
        }
      }
    },
    watch:{
      '$route':function(to,from){
        console.log(this.$parent.$el)
        this.$parent.$el.scrollTop = 0
      }
    }
  }
</script>

<style lang="scss">
html,body,#app{
  height: 100%; background-color: #d8d8d8;min-width: 1440px;
}
@media (min-width: 1200px) {
  html,body,#app{
    overflow-x: hidden;min-width: 1200px;
  }
}
@keyframes main {
  0% {
    opacity:0;
    transform:translateY(50px)
  }
  100% {
    opacity:1;
    transform:translateY(0)
  }
}
#app{
    animation: main 1s;
    padding: 0;
    background-color: #d8d8d8;
}
</style>

