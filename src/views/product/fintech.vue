<template>
  <b-jumbotron fluid class="text-center mb-0 main-bg pt-100 h-650">
    <h3 class="my-4">Fintech</h3>
    <!-- <p class="small">Release time：2017-11-27 09:15:05</p> -->
    <hr class="text-line">
    <div class="inner">
      <div class="left">
        <img src="../../assets/img/fetch1.png" alt class="pic" />
      </div>
      <div class="right">
        <div class="rightinner">
          <p class="tit">EBANG</p>
          <p class="info">Ebang international holdings Inc. is also a financial technology company which focuses on automation, big data and people-oriented design to make your financial life easy and enjoyable.<br><br>Ebang Fintech provides a method, which is a consulting engine based on massive data and software, and provides a financial planning platform to help users achieve a better return on investment.<br><br>Through the platform, the information provided is for reference only, and you agree to our terms of use and privacy policy. Ebang Fintech consultants rely on information from a variety of reliable sources, including customers and third parties.</p>
        </div>
      </div>
    </div>
    <div class="inner1">
      <div class="right">
        <div class="rightinner">
          <p class="tit">Cultural foundation</p>
          <p class="info">Our corporate culture is based on transparency and trust. Whether communicating with clients or with our team, we believe in being honest and straightforward. We are building the business of financial technology, which can help you succeed in investment and financial management, design a better life for you, and make it a reality.  </p>
        </div>
      </div>
      <div class="left">
        <img src="../../assets/img/fetch2.png" alt class="pic" />
      </div>
    </div>
  </b-jumbotron>
</template>

<script>
export default {
  name: 'fintech',
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
  margin-bottom: 97px;
  .left {
    width: 60%;
    float: left;
    overflow: hidden;
    .pic{
      display: block;
      width: 480px;
      height: 665px;
      overflow: hidden;
    }
  }
  .right {
    width: 40%;
    float: left;
    overflow: hidden;
    text-align: left;
    height: 665px;
    display: table;
    .rightinner{
      display: table-cell;
      vertical-align: middle;
      .tit{
        font-size: 32px;
        color: #fff;
      }
      .info{
        font-size: 16px;
      }
    }
  }
}
.inner1 {
  overflow: hidden;
  padding: 0 8%;
  .left {
    width: 60%;
    float: left;
    overflow: hidden;
    .pic{
      display: block;
      width: 480px;
      height: 383px;
      overflow: hidden;
      float: right;
    }
  }
  .right {
    width: 40%;
    float: left;
    overflow: hidden;
    text-align: left;
    height: 383px;
    display: table;
    .rightinner{
      display: table-cell;
      vertical-align: middle;
      .tit{
        font-size: 32px;
        color: #fff;
      }
      .info{
        font-size: 16px;
      }
    }
  }
}
</style>
