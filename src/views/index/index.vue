<template>
  <div>
    <!-- 轮播 -->
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li
          v-for="(item, num) in imgSrc"
          :key="num"
          data-target="#carouselExampleIndicators"
          :data-slide-to="num"
          :class="num == 0 ? 'active': ''"
        ></li>
      </ol>
      <div class="carousel-inner">
        <div
          class="carousel-item"
          :class="num == 0 ? 'active': ''"
          v-for="(item, num) in imgSrc"
          :key="num"
        >
          <img v-lazy="item" class="d-block w-100 pic" alt="..." />
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
    <!-- <b-carousel fade indicators :img-width="bannerWidth" :img-height="bannerHeight">
      <b-carousel-slide v-for="item in imgSrc" :key="item" :img-src="item"></b-carousel-slide>
    </b-carousel>-->
    <!-- 静态图片区域 -->
    <div class="w-100 bg-still stillBox P-5010">
      <!-- head -->
      <div class="headerBox">
        <p class="text-gradient text-header">PRODUCT</p>
        <p class="text-gradient text-header">CENTER</p>
      </div>
        <div class="w-1200 mx-auto d-flex justify-content-between">
          <div class="mr-4">
            <div style="height:795px;width:540px" class="bg-white imgBlock" @click="go('super')">
              <b-img :src="imgList[2]" fluid alt="Fluid image"></b-img>
              <!-- <div class="imgText text-gradient">VIEW DETAILL</div> -->
            </div>
          </div>
          <div class="d-flex flex-column justify-content-between">
            <div style="height:520px;width:640px" class="bg-white mb-4 imgBlock" @click="go('blockChain')">
              <b-img :src="imgList[3]" fluid alt="Fluid image"></b-img>
              <!-- <div class="imgText text-gradient" @click="go('blockChain')">VIEW DETAILL</div> -->
            </div>
            <div class="d-flex justify-content-between">
              <div style="height:255px;width:310px;" class="bg-white mr-4 imgBlock" @click="go('hash')">
                <b-img :src="imgList[0]" fluid alt="Fluid image"></b-img>
              <!-- <div class="imgText text-gradient" @click="go('hash')">VIEW DETAILL</div> -->
              </div>
              <div style="height:255px;width:310px;" class="bg-white imgBlock" @click="go('fintech')">
                <b-img :src="imgList[1]" fluid alt="Fluid image"></b-img>
              <!-- <div class="imgText text-gradient" @click="go('fintech')">VIEW DETAILL</div> -->
              </div>
            </div>
          </div>
        </div>
    </div>
      <!-- 新闻中心区域 -->
      <div class="w-100 bg-news newsBox P-5010">
        <!-- head -->
        <div class="headerBox">
          <p class="text-gradient text-header">NEWS</p>
          <p class="text-gradient text-header">CENTER</p>
        </div>
        <div class="w-1200 mx-auto">
          <div class="overflow-hidden">
            <div class="newImg">
              <img :src="imgList[4]" alt="Image"/>
              <!-- <div class="marsk">
                <p class="mb-1 text-light text-truncate">{{ $t('newsList.newstitle02') }}</p>
                <p class="text-muted small">2019-10-29</p>
              </div> -->
            </div>
            <div class="newsList">
              <div class="newsItem">
                <div class="ml-20 mb-20 mr-20 dateBox">
                  <p class="day text-gradient">22</p>
                  <hr class="dateLine">
                  <p class="year text-gradient">2019/07</p>
                </div>
                <div class="newTitle">
                  <p class="mb-1 newsTitle text-truncate" @click="goArticle('01')"><b-icon icon="dot"></b-icon>ATTENTION AGAIN!!!</p>
                  <hr class="line">
                  <p class="newsSub">Dear customers,Please pay attention again.Now we received several feedbacks, someone copied our company website...</p>
                  <div class="more" @click="goNews()">more+</div>
                </div>
              </div>
              <div class="newsItem">
                <div class="ml-20 mb-20 mr-20 dateBox">
                  <p class="day text-gradient">09</p>
                  <hr class="dateLine">
                  <p class="year text-gradient">2019/07</p>
                </div>
                <div class="newTitle">
                  <p class="mb-1 newsTitle text-truncate" @click="goArticle('02')"><b-icon icon="dot"></b-icon>Attention Please！！！</p>
                  <hr class="line">
                  <p class="newsSub">Dear customers,Please pay attention again!!!These days we received several customers' feedback. there are some scammers...</p>
                  <div class="more" @click="goNews()">more+</div>
                </div>
              </div>
              <div class="newsItem">
                <div class="ml-20 mb-20 mr-20 dateBox">
                  <p class="day text-gradient">14</p>
                  <hr class="dateLine">
                  <p class="year text-gradient">2019/06</p>
                </div>
                <div class="newTitle">
                  <p class="mb-1 newsTitle text-truncate" @click="goArticle('03')"><b-icon icon="dot"></b-icon>Attention！！！</p>
                  <hr class="line">
                  <p class="newsSub">Dear customers,Attention, please!!!Recently the criminals copied the website of our company and the skype account...</p>
                  <div class="more" @click="goNews()">more+</div>
                </div>
              </div>
              <div class="newsItem">
                <div class="ml-20 mb-20 mr-20 dateBox">
                  <p class="day text-gradient">10</p>
                  <hr class="dateLine">
                  <p class="year text-gradient">2018/12</p>
                </div>
                <div class="newTitle">
                  <p class="mb-1 newsTitle text-truncate" @click="goArticle('04')"><b-icon icon="dot"></b-icon>Attention</p>
                  <hr class="line">
                  <p class="newsSub">Dear customers,Attention, please. The only official website of our company is miner.ebang.com.cn, the only official...</p>
                  <div class="more" @click="goNews()">more+</div>
                </div>
              </div>
              <div class="newsItem">
                <div class="ml-20 mb-20 mr-20 dateBox">
                  <p class="day text-gradient">14</p>
                  <hr class="dateLine">
                  <p class="year text-gradient">2018/12</p>
                </div>
                <div class="newTitle">
                  <p class="mb-1 newsTitle text-truncate" @click="goArticle('05')"><b-icon icon="dot"></b-icon>The Year-End Promotion of EBIT</p>
                  <hr class="line">
                  <p class="newsSub">Dear All:To present our appreciation for your support and ever trust, we EBIT launches the year-end promotion...</p>
                  <div class="more" @click="goNews()">more+</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      bannerHeight:'',bannerWidth:'',
      imgSrc:[require('../../assets/img/banner1.jpg'),require('../../assets/img/banner2.jpg'),require('../../assets/img/banner3.jpg'),require('../../assets/img/banner4.jpg'),require('../../assets/img/banner5.jpg')],
      imgList:['/static/img/product-b1.jpg','/static/img/product-b2.jpg','/static/img/product-left.jpg','/static/img/product-top.jpg','/static/img/news.jpg']
    }
  },
  methods: {
    imgLoad() {
      this.$nextTick(() => {
        this.bannerHeight = $(window).height();
        this.bannerWidth = $(window).width();
      });
    },
    goNews() {
      this.$router.push({
        path: "/news"
      });
    },
    go(url){
      this.$router.push({
        path:'/product/'+url
      })
    },
    goArticle(num){
      window.open("new"+num)
    }
  },
  mounted() {
    this.imgLoad();
    window.addEventListener(
      "resize",
      () => {
        this.bannerHeight = $(window).height();
        this.bannerWidth = $(window).width();
        this.imgLoad();
      },
      false
    );
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
/deep/ {
  .carousel-indicators li {
    height: 6px;
    background-color: #dbdbdb;
    opacity: 1;
  }
  .carousel-indicators .active {
    background-color: #eedd22;
    opacity: 1;
    outline: none;
  }
  :focus {
    outline: none;
  }
}
#carouselExampleIndicators {
  .carousel-inner {
    .carousel-item {
      .pic[lazy="loading"] {
        opacity: 0.9;
      }
    }
  }
}
.marsk {
  position: absolute;
  background-color: rgba(14, 14, 14, 0.85);
  width: 100%;
  height: 70px;
  bottom: 0;
  color: #fff;
  padding: 10px 20px;
}
.more {
  position: absolute;
  color: #eedd22;
  z-index: 50;
  right: 5px;
  bottom: 20px;
  font-size: 16px;
}

.bg-still{ background-color: #191935; }
.bg-news{ background-color: #000022; }
.headerBox{ border-left: 6px solid #eedd22;height:85px;margin:auto;margin-bottom: 50px;width:200px;text-align: left;padding-left:15px; }
.P-5010{ padding:50px 0 100px 0; }
.text-header{ font-size:36px;margin: 0;letter-spacing: 1px;line-height: 43px;font-weight: 500; }
.stillBox{ background-image: url("/static/img/bg-still.png");
  .imgBlock{overflow: hidden;position: relative;cursor: pointer;
    .imgText{position: absolute; z-index:66; bottom: 50px; left: 50px;font-size:18px;border-top: 1px solid #fff;border-bottom: 1px solid #fff;padding:10px;cursor: pointer;transition:all 1s;
      &:hover,&:active{border:2px solid #fff;}
    }
    img{transition:all 1s;}
    &:hover{
      img{
        transform: scale(1.2);
      }
    }
  }
}
.title{ font-size: 32px; color: #32374a; text-align: center; font-weight: 700; }
.newImg{ width: 540px;height:680px;display: inline-block;vertical-align: top;
  img{width:100%;height:100%}
}
.bg-news {
  background-color: #000022;
}
.headerBox {
  border-left: 6px solid #eedd22;
  height: 85px;
  margin: auto;
  margin-bottom: 50px;
  width: 200px;
  text-align: left;
  padding-left: 15px;
}
.P-5010 {
  padding: 50px 0 100px 0;
}
.text-header {
  font-size: 36px;
  margin: 0;
  letter-spacing: 1px;
  line-height: 43px;
  font-weight: 500;
}
.stillBox {
  background-image: url("/static/img/bg-still.png");
}
.title {
  font-size: 32px;
  color: #32374a;
  text-align: center;
  font-weight: 700;
}
.newImg {
  width: 540px;
  height: 680px;
  display: inline-block;
  vertical-align: top;
  img {
    width: 100%;
    height: 100%;
  }
}
.newsList {
  width: 650px;
  display: inline-block;
  color: #fff;
  transition: all 1s;
  .newsItem {
    cursor: pointer;
    position: relative;
    &:hover {
      .newTitle {
        .newsTitle {
          color: #00ff77;
        }
        .more {
          color: #00ff77;
        }
      }
    }
    .dateBox {
      width: 120px;
      height: 120px;
      background-color: #191935;
      display: inline-block;
      vertical-align: top;
      text-align: center;
      font-family: "黑体";
      p {
        margin: 0;
        font-weight: bold;
      }
      .day {
        font-size: 48px;
      }
      .year {
        font-size: 22px;
        line-height: 45px;
      }
      .dateLine {
        border-color: #000022;
        margin: 0;
      }
    }
    .newTitle {
      display: inline-block;
      width: 480px;
      .line {
        border-color: #171834;
        margin-top: 0;
        margin-bottom: 5px;
      }
      .newsTitle {
        font-size: 24px;
        line-height: 60px;
        font-weight: 400;
      }
      .newsSub {
        font-size: 16px;
        color: #dbdbdb;
        max-height: 50px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
      }
    }
  }
}
</style>

