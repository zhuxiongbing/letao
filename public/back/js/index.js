$(function(){
   // 基于准备好的dom，初始化echarts实例
  // 柱状图
  var echars1 = echarts.init(document.querySelector(".echarts_1"));

  // 指定图表的配置项和数据
  var option1 = {
    // 大标题
    title: {
      text: '2019年注册人数'
    },
    // 提示框组件
    tooltip: {},
    // 图例
    legend: {
      data:['人数']
    },
    // x轴的数据
    xAxis: {
      data: ["1月","2月","3月","4月","5月","6月"]
    },
    // y 轴的刻度, 根据数据自动生成比较合适
    yAxis: {},
    // 数据
    series: [{
      name: '人数',
      // 表示柱状图
      type: 'bar',
      data: [1000, 1500, 1800, 1200, 1000, 500]
    }]
  };

  // 使用刚指定的配置项和数据显示图表。
  echars1.setOption(option1);

  // 饼状图
  var echars2 = echarts.init(document.querySelector(".echarts_2"));

  // 指定图表的配置项和数据
  var option2 = {
    title : {
        text: '热门品牌畅销',
        subtext: '2019年6月',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['耐克','阿迪','李宁','匡威','安德玛']
    },
    series : [
        {
            name: '访问来源',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
                {value:335, name:'耐克'},
                {value:310, name:'阿迪'},
                {value:234, name:'李宁'},
                {value:135, name:'匡威'},
                {value:1548, name:'安德玛'}
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};



  // 使用刚指定的配置项和数据显示图表。
  echars2.setOption(option2);
});



