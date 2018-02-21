<template>
  <div class="home">
    <Left></Left>
    <Right></Right>
    
  </div>  
</template>

<script>

import Left from './Left/index'
import Right from './Right/index'

export default {
  name: 'home',
  components:{
    Left,
    Right
  },
  data () {
    return {
     
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home{
  display: flex;
}
</style>
