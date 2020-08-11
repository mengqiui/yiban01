<template>
  <b-jumbotron fluid class="text-center mb-0 main-bg pt-100 h-650">
    <h3 class="my-4">Block chain computing server/BPU</h3>
    <!-- <p class="small">Release time：2017-11-27 09:15:05</p> -->
    <hr class="text-line">
    <div class="inner">
      <p class="tit">Introduction</p>
      <p class="info">Independent development of 7nm integrated<br> circuits Design <br>Advanced TSMC 7nm EUV Process<br> technology</p>
      <p class="sp">EBIT E12+ Series   50TH/s  50W/T</p>
    </div>
    <div class="inner1">
      <p class="tit">Introduction</p>
      <p class="info">Independent development of 7nm integrated<br> circuits Design <br>Advanced TSMC 7nm EUV Process<br> technology</p>
      <p class="sp">EBIT E12+ Series   50TH/s  50W/T</p>
    </div>
  </b-jumbotron>
</template>

<script>
export default {
  name: 'blockChain',
  data() {
    return {
      
    };
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.inner {
  overflow: hidden;
  padding: 0 8%;
  margin-top: 40px;
  background: url(../../assets/img/block1.png) no-repeat center top;
  background-size: auto 100%;
  height: 554px;
  position: relative;
  margin-bottom: 60px;
  .tit{
    width: 50%;
    text-align: left;
    font-size: 34px;
    padding-top: 46px;
    padding-left: 20px;
  }
  .info{
    width: 50%;
    text-align: left;
    font-size: 16px;
    padding-left: 20px;
  }
  .sp{
    padding-left: 20px;
    font-size: 18px;
    line-height: 130px;
    position: absolute;
    bottom: 80px;
  }
}
.inner1 {
  overflow: hidden;
  padding: 0 8%;
  background: url(../../assets/img/block2.png) no-repeat center top;
  background-size: auto 100%;
  height: 554px;
  position: relative;
  .tit{
    float: right;
    width: 52%;
    text-align: left;
    font-size: 34px;
    padding-top: 46px;
    padding-left: 106px;
  }
  .info{
    float: right;
    width: 52%;
    text-align: left;
    font-size: 16px;
    padding-left: 106px;
  }
  .sp{
    right: 0;
    padding-right: 212px;
    font-size: 18px;
    line-height: 119px;
    position: absolute;
    bottom: 97px;
  }
}
</style>
