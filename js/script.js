$(function () {
  // ・・・・・・・・・・・・・・・・・・ページ内スムーススクロール・・・・・・・・・・・・・・・・・・
  $('a[href^="#"]').click(function (event) {
    // クリックした要素のhref属性の値を取得
    var anchor = $(this).attr("href");
    // 表示位置を取得
    var position = $(anchor).offset().top + -100;
    // アニメーションの効果の作成
    $('body,html').animate({ scrollTop: position }, 500);
    return false;
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

    // ・・・・・・・・・・・ヘッダー文字色変化・・・・・・・・・・・・・・・・
    var Header = $('.header-menu__list a');
    var harehare = $('#harehare');
    //ウィンドウ枠からのharehare位置を取得
    var harehareTop = harehare.offset().top;
    // ウィンドウ枠からのスクロール量を取得
    var winTop = $(this).scrollTop();
    //harehareがウィンドウ枠より上にきたら文字色を黒に
    if (winTop >= harehareTop - 180) {
      Header.css('color', '#1c1c1c');
      //harehareがウィンドウ枠より下であれば文字色は白に
    } else if (winTop <= harehareTop) {
      Header.css('color', '#ebebeb');
    }
  });

});