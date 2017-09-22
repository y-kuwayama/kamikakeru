// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs

//= require twitter/bootstrap
//= require bootstrap-material-design
//= require turbolinks
//= require_tree .


// $(document).ready(function () {
//     hsize = $(window).height();
//     $("#first").css("height", hsize + "px");
// });
// $(window).resize(function () {
//     hsize = $(window).height();
//     $("#first").css("height", hsize + "px");
// });

$(function () {
    $('#massage').textillate({
      //繰り返し
      loop: false,
      // アニメーションの間隔時間
      minDisplayTime: 3000,
      // アニメーション開始までの遅延時間
      initialDelay: 1000,
      // アニメーションの自動スタート
      autoStart: true,

      // 開始時のアニメーション設定
      in: {
        // エフェクトの指定
        effect: 'fadeIn',
        // 遅延時間の指数
        delayScale: 1.5,
        // 文字ごとの遅延時間
        delay: 50,
        // true:アニメーションをすべての文字に同時適用
        sync: false,
        // true:文字表示がランダムな順に表示される
        shuffle: false
      },

      // 終了時のアニメーション設定
      // out: {
      //   effect: 'fadeOut',
      //   delayScale: 1.5,
      //   delay: 50,
      //   sync: false,
      //   shuffle: false
      // }
    });
})
$(function () {
    $('.massage2').textillate({
      //繰り返し
      loop: false,
      // アニメーションの間隔時間
      minDisplayTime: 3000,
      // アニメーション開始までの遅延時間
      initialDelay: 1000,
      // アニメーションの自動スタート
      autoStart: true,

      // 開始時のアニメーション設定
      in: {
        // エフェクトの指定
        effect: 'fadeIn',
        // 遅延時間の指数
        delayScale: 1.5,
        // 文字ごとの遅延時間
        delay: 50,
        // true:アニメーションをすべての文字に同時適用
        sync: false,
        // true:文字表示がランダムな順に表示される
        shuffle: false
      },

      // 終了時のアニメーション設定
      // out: {
      //   effect: 'fadeOut',
      //   delayScale: 1.5,
      //   delay: 50,
      //   sync: false,
      //   shuffle: false
      // }
    });
})



// $(function() {
//     var bgsc1 = 0;
//     var bgsc2 = 0;
// setInterval(function(){
//     bgsc1+= 0.1;//マイナスは左に、プラスは右に移動します。この場合だと-1なので左に1pxづつ移動します。右に移動させる場合は1に変えます。
//     bgsc2+= 0;//マイナスは上に、プラスは下に移動。このサンプルは0にしてあるので上下には移動しません。
//     $(".skinBody").css("background-position", bgsc1 + "px " + bgsc2 + "px");
// });
// });







$(function() {
        // フェードイン
        $('.inviewfadeIn').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
            if (isInView) {
                $(this).stop().addClass('fadeIn');
            } else {
                $(this).stop().removeClass('fadeIn');
            }
        });
    });

 $(function(){
    $('.slides').slick({
      fade: true,
      arrows: false,
      asNavFor: '.slides-nav'
    });
    $('.slides-nav').slick({
      dots: false,
      arrows: false,
      slidesToShow: 5,
      centerMode: true,
      focusOnSelect: true,
      asNavFor: '.slides',
    });
  });

function initialize() {
  var latlng = new google.maps.LatLng(21.57475938,128.03335625);
  var myOptions = {
    zoom: 3, /*拡大比率*/
    center: latlng, /*表示枠内の中心点*/
    mapTypeId: google.maps.MapTypeId.ROADMAP/*表示タイプの指定*/
  };

  var map = new google.maps.Map(document.getElementById('map_canvas'), myOptions);
}


