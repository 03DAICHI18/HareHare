$(function () {
  // ・・・・・・・・・・・・・・・・・・ページ内スクロール・・・・・・・・・・・・・・・・・・
  $('a[href^="#"]').click(function (event) {
    // クリックした要素のhref属性の値を取得
    var anchor = $(this).attr("href");
    // 表示位置を取得
    var position = $(anchor).offset().top;
    // アニメーションの効果の作成
    $('body,html').animate({ scrollTop: position }, 500);
    return false;
  });

  // ・・・・・・・・・・・・・・・・・・ハンバーガーメニュー・・・・・・・・・・・・・・・・・・
  var $header = $('#header');
  $('.button-trigger').on('click', function () {
    $(this).toggleClass('active');
    return false;
  });
});