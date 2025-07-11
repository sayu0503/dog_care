
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる

    //ハンバーガーメニューの開閉
    // ドロワーメニューの開閉
    $(".js-hamburger").click(function () {
      if ($(this).hasClass("is-active")) {
        // メニューを閉じる
        $(this).removeClass("is-active");
        $(".js-sp-nav").fadeOut(300);
        $(".header").removeClass("is-open");
        $("body").css("overflow", "auto"); // 背景スクロールを戻す
      } else {
        // メニューを開く
        $(this).addClass("is-active");
        $(".js-sp-nav").fadeIn(300);
        $(".header").addClass("is-open");
        $("body").css("overflow", "hidden"); // 背景を固定
      }
    });

    // メニュー内リンクをクリックした時
    $(".js-sp-nav a").click(function (event) {
      const target = $(this).attr("href");

      if (target.startsWith("#")) {
        event.preventDefault();
        const position = $(target).offset().top;

        $("html, body").animate({ scrollTop: position }, 500);
      }

      // 共通でメニューを閉じる処理
      $(".js-hamburger").removeClass("is-active");
      $(".js-sp-nav").fadeOut(300);
      $(".header").removeClass("is-open");
      $("body").css("overflow", "auto"); // スクロールを有効に戻す
    });
  
    // ウィンドウサイズが768px以上になったらメニューを強制的に閉じる
    $(window).resize(function () {
      if (window.matchMedia("(min-width: 768px)").matches) {
        $(".js-hamburger").removeClass("is-active");
        $(".js-sp-nav").fadeOut(300);
        $(".header").removeClass("is-open");
        $("body").css("overflow", "auto");
      }
    });

    // アンカーリンクのスムーススクロール
    $('a[href^="#"]').click(function (e) {
      e.preventDefault();
      var headerHeight = $(".js-header").outerHeight();
      var href = $(this).attr("href");
      var target = href === "#" || href === "" ? $("html") : $(href);

      if (target.length) {
        var position = target.offset().top - headerHeight;
        $("html, body").animate({ scrollTop: position }, 600, "swing");
      }
    });
  });

