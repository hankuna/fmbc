<template>
  <div class="right">
    <div class="right-top">
      <b>top</b>
    </div>
      content
    <router-view/>
  </div>

</template>

<script>
export default {
   
}
</script>

<style>
.right{
  flex: 1;
}
.right-top{
  width: 100%;
  height: 40px;
  line-height: 40px;
  background-color: #ccc;
}
</style>
