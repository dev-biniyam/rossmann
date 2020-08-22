



$(document).ready(function(){
  $('.meme').click(function(){
    $.get('/help',function(data, status){
        $('#place').html(data)
        load_chart()
        console.log(status)
    })
  })

  
  var load_chart1 = function(){

    var my_chart = document.getElementsByClassName('my-chart1');
    var chrt =  new Chart(my_chart,{
      type: 'line',
      data: {
        labels:[
          'jan 2013',
          'feb 2013',
          'mar 2013',
          'apr 2013',
          'may 2013',
          'jun 2013',
          'jul 2013',
          'aug 2013',
          'sep 2013',
          'oct 2013',
          'nov 2013',
          'dec 2013',
          'jan 2014',
          'feb 2014',
          'mar 2014',
          'apr 2014',
          'may 2014',
          'jun 2014',
          'jul 2014',
          'aug 2014',
          'sep 2014',
          'oct 2014',
          'nov 2014',
          'dec 2014',
          'jan 2015',
          'feb 2015',
          'mar 2015',
          'apr 2015',
          'may 2015',
          'jun 2015',
          'jul 2015',],
        datasets:[{
          label: 'Sales',
          data:[
            180132207,
            171534275,
            201180369,
            183431432,
            185411063,
            180702351,
            208843882,
            198042727,
            178053963,
            187662330,
            196170924,
            231710561,
            187752787,
            178924677,
            193019854,
            194544977,
            194693257,
            190047051,
            173892707,
            163748475,
            164516168,
            164216398,
            173327953,
            202120592,
            198843730,
            178275458, 
            205631683, 
            197918886, 
            189143897, 
            207363373, 
            212322616],
          backgroundColor:"#00b6ed",
          borderColor:"#00b6ed",
          fill:false,
          lineTension:0
        }]
      },
      options:{
        fill:false
      }
    })
  }

  var load_chart2 = function(){

    var my_chart = document.getElementsByClassName('my-chart2');
    var chrt =  new Chart(my_chart,{
      type: 'line',
      data: {
        labels:[
          'jan',
          'feb',
          'mar',
          'apr',
          'may',
          'jun',
          'jul',
          'aug',
          'sep',
          'oct',
          'nov',
          'dec'],
        datasets:[{
          label: 'Promotion (sales)',
          data:[
            7783.20,
            7773.37,
            8253.18,
            8427.14,
            8087.94,
            8509.40,
            8257.99,
            7926.83,
            7917.81,
            7646.745,
            8163.89,
            10490.79
          ],
          backgroundColor:"#00b6ed",
          borderColor:"#00b6ed",
          fill:false,
          lineTension:0
        },
        {
          label: 'No promotion (sales)',
          data:[
            5592.60,
            5748.05,
            5806.24,
            5855.30,
            6301.32,
            5871.99,
            5753.07,
            5680.40,
            5529.55,
            5845.74,
            6257.74,
            7318.43
          ],
          backgroundColor:"#eda600",
          borderColor:"#eda600",
          fill:false,
          lineTension:0
        }]
      },
      options:{
        fill:false
      }
    })
  }

  var load_chart3 = function(){

    var my_chart = document.getElementsByClassName('my-chart3');
    var chrt =  new Chart(my_chart,{
      type: 'line',
      data: {
        labels:[
          'jan',
          'feb',
          'mar',
          'apr',
          'may',
          'jun',
          'jul',
          'aug',
          'sep',
          'oct',
          'nov',
          'dec'],
        datasets:[{
          label: 'Promotion (customers)',
          data:[
            799.34,
            805.11,
            844.62,
            862.97,
            841.68,
            858.47,
            837.07,
            838.38,
            834.97,
            818.75,
            845.47,
            998.23
          ],
          backgroundColor:"#7e00ed",
          borderColor:"#7e00ed",
          fill:false,
          lineTension:0
        },
        {
          label: 'No promotion (customers)',
          data:[
            661.38,
            679.25,
            680.71,
            697.81,
            728.14,
            685.06,
            675.31,
            683.69,
            679.45,
            704.58,
            722.73,
            810.09
          ],
          backgroundColor:"#eda600",
          borderColor:"#eda600",
          fill:false,
          lineTension:0
        }]
      },
      options:{
        fill:false
      }
    })
  }

  var load_chart4 = function(){

    var my_chart = document.getElementsByClassName('my-chart4');
    var chrt =  new Chart(my_chart,{
      type: 'line',
      data: {
        labels:[
          'jan',
          'feb',
          'mar',
          'apr',
          'may',
          'jun',
          'jul',
          'aug',
          'sep',
          'oct',
          'nov',
          'dec'],
        datasets:[{
          label: 'Assortment A (Sales)',
          data:[
            6299.04,
            6299.76,
            6646.61,
            6738.67,
            6776.11,
            6676.13,
            6596.76,
            6243.73,
            6245.48,
            6330.47,
            6814.74,
            8079.38
          ],
          backgroundColor:"#eda600",
          borderColor:"#eda600",
          fill:false,
          lineTension:0
        },
        {
          label: 'Assortment B (Sales)',
          data:[
            7580.06,
            8290.55,
            8593.67,
            8738.91,
            9131.07,
            8999.65,
            8852.00,
            7949.79,
            8254.68,
            8616.47,
            9139.94,
            9685.26          ],
          backgroundColor:"#00b6ed",
          borderColor:"#00b6ed",
          fill:false,
          lineTension:0
        },
        {
          label: 'Assortment C (Sales)',
          data:[
            6850.78,
            6891.02,
            7325.09,
            7366.58,
            7441.36,
            7332.27,
            7315.56,
            7071.43,
            6846.79,
            6862.46,
            7563.05,
            9174.82
          ],
          backgroundColor:"#7e00ed",
          borderColor:"#7e00ed",
          fill:false,
          lineTension:0
        }]
      },
      options:{
        fill:false
      }
    })
  }

  var load_chart5 = function(){

    var my_chart = document.getElementsByClassName('my-chart5');
    var chrt =  new Chart(my_chart,{
      type: 'line',
      data: {
        labels:[
          'jan',
          'feb',
          'mar',
          'apr',
          'may',
          'jun',
          'jul',
          'aug',
          'sep',
          'oct',
          'nov',
          'dec'],
        datasets:[{
          label: 'No competition (Sales)',
          data:[
            4935.61,
            4679.54,
            5159.53,
            4940.95,
            4895.13,
            5246.12,
            4538.44,
            4262.00,   
            4901.80,
            4627.19,
            5384.83,
            5736.04 ],
          backgroundColor:"#00b6ed",
          borderColor:"#00b6ed",
          fill:false,
          lineTension:0
        },
        {
          label: 'New competition (Sales)',
          data:[
            5232.96,
            5339.83,
            5635.33,
            5597.12,
            5556.08,
            5147.68,      
            5528.37,
            5310.96,
            5444.20,   
            5464.03,
            5699.64,    
            6687.45
          ],
          backgroundColor:"#eda600",
          borderColor:"#eda600",
          fill:false,
          lineTension:0
        }]
      },
      options:{
        fill:false
      }
    })
  }

var show_table = function(dates, lower, prediction, upper){

     var $table = $('#t-body');

     for (var i = 0; i < dates.length ; i++) {
         $table.append('<tr> <td>' + dates[i] + '</td> <td>' + lower[i] + '</td><td>' + prediction[i] + '</td><td>' + upper[i] + '</td></tr>');
     }
 
}

  var load_forcast_chart = function(dates, lower, prediction, upper){

    var my_chart = document.getElementsByClassName('forcast-chart');
    var chrt =  new Chart(my_chart,{
      type: 'line',
      data: {
        labels:dates,
        datasets:[{
          label: 'lower limit (Sales)',
          data:lower,
          backgroundColor:"#7e00ed",
          borderColor:"#7e00ed",
          fill:false,
          lineTension:0
        },
        {
          label: 'forcasted (Sales)',
          data:prediction,
          backgroundColor:"#00b6ed",
          borderColor:"#00b6ed",
          fill:false,
          lineTension:0
        },
        {
          label: 'upper limit (Sales)',
          data:upper,
          backgroundColor:"#eda600",
          borderColor:"#eda600",
          fill:false,
          lineTension:0
        }]
      },
      options:{
        fill:false
      }
    })
  }

  $('.date-input').dateDropper({
    largeDefault:true,
    large:true,
    format: 'Y-m-d',
    defaultDate: '08/01/2015',
    minDate: '08/01/2015',
  });

  $('.date-input2').dateDropper({
    largeDefault:true,
    large:true,
    format: 'Y-m-d',
    defaultDate: '08/08/2015',
    minDate: '08/01/2015',

    
  });

  $(".menu-btn").click(function(){
    console.log("menu clicked")
    $(".nav-tab").toggleClass('nav-tab-compact ')
    $(".item-name").toggleClass('item-name-compact')
    $(".main-area").toggleClass('main-area-compact')

  })

  var s = function(x){
    l = ["home","stats","team"]
    if (x==0){
      $(".series-tab").addClass('active-predict-tab')
    }
    else{
      $(".single-tab").removeClass('active-predict-tab')
      $(".series-tab").removeClass('active-predict-tab')
    }

    for (i = 0 ; i < l.length; i++){
      if (i == x){
        $("." + l[i] + "-name").addClass('active-name')
        $("." + l[i] + "-beacon").addClass('active-beacon')
        $("." + l[i] + "-tab").addClass('active-tab')
      }
      else{
        $("." + l[i] + "-name").removeClass('active-name')
        $("." + l[i] + "-beacon").removeClass('active-beacon')

        $("." + l[i] + "-tab").removeClass('active-tab')


      }
    }

  }

  // http://127.0.0.1:5000/images/home-inactive.png
  // http://127.0.0.1:5000/static/images/rossmann-logo.png



  $(".home-item").click(function(){s(0)})

  $(".stats-item").click(function(){
    s(1);
    $.get('/stats',function(data, status){
      $('.stats-tab').html(data)
      load_chart1()
      load_chart2()
      load_chart3()
      load_chart4()
      load_chart5()
      console.log(status)
  })
  })

  $(".team-item").click(function(){s(2)})

  
  $(".single-day").click(function(){
        $(".time-series").removeClass('active-toggle')
        $(".single-day").addClass('active-toggle')

        $(".single-tab").addClass('active-predict-tab')
        $(".series-tab").removeClass('active-predict-tab')
  })
  
  $(".time-series").click(function(){
    $(".single-day").removeClass('active-toggle')
    $(".time-series").addClass('active-toggle')

    $(".series-tab").addClass('active-predict-tab')
    $(".single-tab").removeClass('active-predict-tab')
})



$(".series-submit").click(function(){
  console.log("request sent")
  var from_date = $('#from').val();
  var to_date = $('#to').val();

  $('.forcast').html('<p class="forcast-description">The forcast will be displayed here!</p><div class="loading loading-hidden">loading, this can take about 2 minutes...</div>')
  $('.loading').addClass('loading-active')
  
  var my_data = {
    from_date: from_date,
    to_date: to_date,
  }

if (from_date != "" && to_date != ""){
    $.post('/predict_test',my_data,function(data, status){
      $('.forcast').html('<canvas class="forcast-chart"></canvas><p class="table-title">Summary</p><table id="summaryOfResults"><tbody id="t-body"><tr><th>date</th><th>lower limit</th><th>forcasted sale($)</th><th>upper limit</th></tr></tbody></table>')
      load_forcast_chart(data.dates, data.lower, data.prediction, data.upper)
      show_table(data.dates, data.lower, data.prediction, data.upper)
      

  })
}
else{
  alert("fill the required inputs!")
}
})

})
