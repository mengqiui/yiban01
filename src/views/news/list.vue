<template>
  <b-jumbotron fluid class="text-center mb-0 main-bg pt-100" style="height:800px;">
    <div class="my-4">
      <div class="item d-flex justify-content-between align-items-center">
        <div class="item-news">
          <p>ATTENTION AGAIN!!!</p>
          <p>Release time：2019-07-22 15:52:41</p>
        </div>
        <b-button class="newBtn" @click="readText('01')">Detail</b-button>
      </div>
      <div class="item d-flex justify-content-between align-items-center">
        <div class="item-news">
          <p>Attention Please！！！</p>
          <p>Release time：2019-07-09 16:24:08</p>
        </div>
        <b-button class="newBtn" @click="readText('02')">Detail</b-button>
      </div>
      <div class="item d-flex justify-content-between align-items-center">
        <div class="item-news">
          <p>Attention！！！</p>
          <p>Release time：2019-06-14 17:38:05</p>
        </div>
        <b-button class="newBtn" @click="readText('03')">Detail</b-button>
      </div>
      <div class="item d-flex justify-content-between align-items-center">
        <div class="item-news">
          <p>Attention</p>
          <p>Release time：2018-12-10 11:36:41</p>
        </div>
        <b-button class="newBtn" @click="readText('04')">Detail</b-button>
      </div>
      <div class="item d-flex justify-content-between align-items-center">
        <div class="item-news">
          <p>The Year-End Promotion of EBIT</p>
          <p>Release time：2018-12-14 11:22:30</p>
        </div>
        <b-button class="newBtn" @click="readText('05')">Detail</b-button>
      </div>
    </div>
  </b-jumbotron>
</template>

<script>
export default {
  name: "list",
  data() {
    return {
      list:''
    };
  },
  created(){
    // this.$axios.get('/static/data/newsList' +'.json')
    // .then( response => {
    //     this.list = response.data;  
    //     console.log(JSON.parse(response.data))                  
    // })
    // .catch(error => {
    //   console.log(error)
    // });
  },
  methods:{
    readText(num){
      this.$router.push({
        path: '/new'+num,
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .item{ width:100%;border:1px solid #39395a;padding:15px;margin:20px 0;
    .item-news{ text-align: left; }
    .newBtn{ height: 36px; font-size: 18px; line-height: 20px; background-color: #000022; border: 1px solid #39395a;transition:all 1s;
      &:hover{ border: 1px solid #02ff76!important; border-radius: 12px; color: #00ff77!important; }
    }
  }
</style>
