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
    if ($(this).hasClass('active')) {
      $('.button').addClass('active');
    } else {
      $('.button').removeClass('active');
    }
    $('#header-nav').slideToggle();
    var movefun = function (event) {
      event.preventDefault();
      return false;
    }
  });
  // 背景画面のスクロール停止の処理
  window.addEventListener('touchmove', movefun, { passive: false });
  // 背景画面のスクロール停止することを停止する処理
  window.removeEventListener('touchmove', movefun, { passive: false });
});