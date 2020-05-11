// pages/daily_report/index.js
import * as echarts from '../../ec-canvas/echarts';
import ajax from '../../utils/ajax.js' //引入
const app = getApp();

var price = 500
function getBarOption(){
  return {
    backgroundColor: "#ffffff",
    title: {
      text: price,
      left: 'center',
      top:'46%'
    },
    color: ["#37A2DA", "#32C5E9", "#67E0E3", "#91F2DE", "#FFDB5C", "#FF9F7F"],
    series: [{
      label: {
        normal: {
          fontSize: 14
        }
      },
      type: 'pie',
      center: ['50%', '50%'],
      radius: ['40%', '60%'],
      data: [{
        value: 55,
        name: '92#'
      }, {
        value: 20,
        name: '95#'
      }, {
        value: 10,
        name: '98#'
      }, {
        value: 20,
        name: '0#'
      }, {
        value: 38,
        name: '100#'
      }]
    }]
  }
}


Page({

  /**
   * 页面的初始数据
   */
  data: {
    background: ['1', '2', '3'],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 10000,
    duration: 500,
    // 92
    ec: {
      onInit: function (canvas, width, height, dpr) {
        const barChart = echarts.init(canvas, null, {
          width: width,
          height: height,
          devicePixelRatio: dpr // new
        });
        canvas.setChart(barChart);
        barChart.setOption(getBarOption());

        return barChart;
      }
    },
    
    tableDate:[],
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    ajax('mobile/station/oils', 'get', {
      time: "2019-12-26"
    }).then((e) => {
      console.log(e)
      this.setData({
        tableDate: e.data.maps
      })
      var a = 0;
      for(var item of e.data.maps){
        a += item.tradeMoney
      }
      price = a
    }).catch((err) => {
      console.log(err)
    })
  },
  aaa(){
    console.log("-----")
    price = 1000
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})