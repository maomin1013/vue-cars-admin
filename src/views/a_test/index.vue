<template>
  <div>
    <h1>1</h1>

    <Shan :show.sync="showatt" />
    <!-- :showatt.sync="showatt" -->
    <!-- dataString="qqq"
      @test="testMethod"  -->
    <!-- <h4>现在{{showatt}}</h4> -->
    <button @click="chu">处理</button>

  </div>
</template>


<script>
import Shan from "@c/shan"; //引用组件
export default {
  name: "test",
  components: { Shan }, //使用组件
  data() {
    return {
      showatt: "true",
    };
  },
  methods: {
    testMethod(data) {
      //此函数用来接收子组件返回的数据data，可以进行操作
    },
    chu() {
      this.showatt = "false";
      console.log(this.showatt);
    },
  },
};
</script>


