$(function(){
  var flg = null;
  var check_access = function () {
    // ★sessionStorageの値を判定
    if (sessionStorage.getItem('access_flg')) {
      // 2回目以降
      flg = 1;
    } else {
      // 1回目
      sessionStorage.setItem('access_flg', true);
      flg = 0
    }
    return flg;
  }
 
  var $i = check_access();
  if($i == 0){
    // 1回目アクセスの処理
    $(function(){
      // ローダー終了
      function end_loader() {
        $('.loader').fadeOut(800);
      }
      // ローディング表示
      function show_load() {
        $('.loader .looping-rhombuses-spinner').fadeIn(400);
      }
      // ローディング非表示
      function hide_load() {
        $('.loader .looping-rhombuses-spinner').fadeOut(400);
      }
     
      // タイマー処理
      $(window).on('load', function () {
      // 処理①
      setTimeout(function () {
        show_load();
      }, 800)
      // 処理②
      setTimeout(function () {
        hide_load();
      }, 3000)
      // 処理③
      setTimeout(function () {
        show_txt();
      }, 3000)
      // 処理④
      setTimeout(function () {
        end_loader();
      }, 3000)
      })
    });
  }else{
    // 2回目アクセスの処理
    $(".loader").remove();
  }
})



