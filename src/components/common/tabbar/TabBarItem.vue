<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
   <div v-else>
     <slot name="item-icon-activate"></slot>
   </div>
    <div :style="activeStyle">
      <slot name="item-name"></slot>
    </div>

  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    props: {
      //存储item的path
      path: String,
      activeColor: {
        type: String,
        default: 'red'
      }
    },
    data() {
      return {
        //isActive: false
      }
    },
    computed: {
      isActive() {
        //indexOf返回值为-1则表示活跃path不匹配当前的path
        return this.$route.path.indexOf(this.path) !== -1
      },
      activeStyle() {
<<<<<<< HEAD
        return this.isActive? {color:this.activeColor} : {}
=======
        return this.isActive ? {color:this.activeColor} : {}
>>>>>>> 667e7c6f9b6db3c912a231d8dcc9bc42fd200482
      }
    },
    methods: {
      itemClick() {
<<<<<<< HEAD
        // console.log('click');
=======
        console.log('click');
>>>>>>> 667e7c6f9b6db3c912a231d8dcc9bc42fd200482
        this.$router.replace(this.path)
      }
    }
  }
</script>

<style scoped>
  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }
  .tab-bar-item img {
    width: 24px;
    height: 24px;
    vertical-align: middle;
    margin-top: 3px;
    margin-bottom: 2px;
  }

</style>