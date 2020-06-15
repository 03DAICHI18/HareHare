$(function () {
  // ・・・・・・・・・・・・・・・・・・ページ内スムーススクロール・・・・・・・・・・・・・・・・・
  var headerHeight = $('#header').outerHeight();
  var urlHash = location.hash;
  if (urlHash) {
    $('body,html').stop().scrollTop(0);
    setTimeout(function () {
      var target = $(urlHash);
      var position = target.offset().top - headerHeight;
      $('body,html').stop().animate({ scrollTop: position }, 500);
    }, 100);
  }
  $('a[href^="#"]').click(function () {
    var href = $(this).attr("href");
    var target = $(href);
    var position = target.offset().top - headerHeight - 50;
    $('body,html').stop().animate({ scrollTop: position }, 500);
  });

  // ・・・・・・・・・・・・・・・・・・セクションタイトルスクロールイン・・・・・・・・・・・・・・・・・・
  // ↓windowがスクロールされた時に実行する処理
  $(window).scroll(function () {
    // ↓複数のオブジェクトに対して繰り返し処理を行う
    $(".sec-title").each(function () {
      // ↓要素が画面上に表示されたかどうかを判定させる変数を定義----------
      var scroll = $(window).scrollTop(); // 画面トップからのスクロール量
      var blockPosition = $(this).offset().top; // 画面トップから見たブロックのある位置
      var windowHeihgt = $(window).height(); // ウィンドウの高さ
      // ↓if式で計算する流れ----------
      // 手順① 表示させたいブロックの位置している高さ - ウィンドウの高さ
      // 手順② スクロール量が①より多くなった時＝要素が画面上に表示されたと認識
      // 手順③ 要素に「fadeIn」クラスを付与。動きはCSSで制御。
      if (scroll > blockPosition - windowHeihgt + 100) {
        $(this).addClass("fadeIn");
      }
    });

  });

});