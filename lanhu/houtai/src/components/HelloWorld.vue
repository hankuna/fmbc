<template>
  <div class="hello">
    <button @click='jia'>➕</button>
    {{$store.state.total}}
    {{$store.state.home.a}}
    <button @click='jianAction("-9999")'>➖</button>
    <button @click='homeAa'>触发home aa</button>
    {{count}}
    
  </div>
</template>

<script>
import { mapState,mapActions } from 'vuex'
export default {
  name: 'HelloWorld',
  computed: {
    ...mapState([
      'count'
    ]),
  },
    
  methods:{
    ...mapActions([
      'jianAction'
    ]),
    jian() {
      this.$store.dispatch('jianAction','-111')
    },
    jia() {
      this.$store.dispatch('jiaAction','0')
    },
    homeAa() {
      this.$store.dispatch('aa','我对你爱爱不完')
    }
  },
  mounted () {
    console.log(this.$store.getters.getTotal)
    this.$store.dispatch('actionName','可爱脸')
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      localState: 99
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
