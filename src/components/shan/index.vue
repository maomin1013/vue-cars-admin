<template>
  <!-- <div>
   
    <h1>{{dataString}}</h1>
    <button @click="change">改吧</button>
  </div> -->
  <div>
    <div>{{showatt}}</div>
    <!-- <button @click="change">点我</button> -->
  </div>

</template>


<script>
export default {
  name: "shan",
  props: {
    // dataString: {
    //   type: String,
    //   default: "",
    // },
    showatt: {
      type: String,
      default: "",
    },
  },
  data() {
    return {};
  },
  methods: {
    change() {
      // console.log("1:" + showatt);
      //子组件改变值
      // showatt = "second";
      this.$emit("update:showatt", "false");
      // console.log("2:" + showatt);
      // this.$emit("test", dataString);
    },
    closeDiv() {
      this.$emit("update:show", false);
    },
  },
};
</script>