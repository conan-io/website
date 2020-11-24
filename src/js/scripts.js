document.body.classList.contains("home") &&
  MktoForms2.loadForm("https://leap.jfrog.com", "256-FNZ-187", 2684, function (
    t
  ) {
    t.onSuccess(function (o, e) {
      return (
        t.getFormElem().fadeOut(),
        (document.getElementById("contactUsTitle").textContent =
          "Thanks! your message has been sent."),
        document.getElementById("contactUsEmail").fadeOut(),
        !1
      );
    });
  }),
  document.querySelector("section#signUp") &&
    MktoForms2.loadForm(
      "https://leap.jfrog.com",
      "256-FNZ-187",
      1479,
      function (t) {
        t.onSuccess(function (o, e) {
          return (
            t.getFormElem().fadeOut(),
            (document.getElementById("signUpTitle").textContent =
              "Thanks! you have subscribed successfuly."),
            !1
          );
        });
      }
    );
const bootstrap_sm = "769px",
  bootstrap_md = "992px";
var shuffleHasStarted = !1;
function toggleMenu(t, o) {
  let e = o.offset(),
    a = t(window).width() - (e.left + o.outerWidth()),
    i = e.top + o.outerHeight(),
    n = t("nav#headerNav");
  n.hasClass("toggled") || n.appendTo("body"),
    n.addClass("toggled shadow"),
    n
      .toggleClass("is-visible")
      .removeClass("align-items-center d-lg-flex")
      .css("top", i)
      .css("right", a);
}
function matchHeight(t) {
  var o = 0;
  t.length < 2 ||
    (t.each(function () {
      var t = jQuery(this).outerHeight();
      t > o && (o = t);
    }),
    t.each(function () {
      jQuery(this).outerHeight(o);
    }));
}
function downloadsMatchHeight() {
  matchHeight(jQuery(".front-text")),
    matchHeight(jQuery(".install")),
    matchHeight(jQuery(".small-title"));
}
function copyToClipboard(t, o) {
  var e = t("<input>");
  t("body").append(e),
    e.val(o).select(),
    document.execCommand("copy"),
    e.remove();
}
function shuffleArray(t) {
  for (var o = t.length - 1; o > 0; o--) {
    var e = Math.floor(Math.random() * (o + 1)),
      a = t[o];
    (t[o] = t[e]), (t[e] = a);
  }
}
function shuffleUsers(t) {
  shuffleHasStarted = !0;
  const o = $(".users-flex .user-box").length,
    e = $("#usersStock");
  t && e.find("img").randomize();
  var a = 0;
  (arr = Array.apply(null, { length: o }).map(Number.call, Number)),
    shuffleArray(arr),
    setInterval(function () {
      (v = arr[a]),
        ++a > 14 && (a = 0),
        (userBox = $(".user-box").eq(v)),
        (boxImg = userBox.find("img")),
        boxImg.fadeOut(300, function () {
          boxImg.appendTo(e),
            (stockImg = e.find("img").first()),
            stockImg.appendTo(userBox).hide().fadeIn(300);
        });
    }, 3e3);
}
function testiSlick(t) {
  t(".testis-carousel").slick({
    prevArrow: t(".cs-slick-right"),
    nextArrow: t(".cs-slick-left"),
    slidesToShow: 1,
    slidesToScroll: 1,
  });
}
const tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
let player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('ytPlayer', {
    height: '270',
    width: '480',
    videoId: 'MJw7F5HeuiI',
    rel: '0'
  });
}

jQuery(document).ready(function (t) {
  if (
    (t(".lazy").Lazy(),
    t(".small-title-lazy").Lazy({
      afterLoad: function () {
        window.matchMedia("(min-width: 769px)").matches &&
          matchHeight(t(".small-title"));
      },
    }),
    t(window).bind("orientationchange", function (t) {
      location.reload(!0);
    }),
    t(".hamburger").on("click", function () {
      let o = t(this);
      o.toggleClass("is-active"), toggleMenu(t, o);
    }),
    t("body.home").length &&
      (testiSlick(t), shuffleUsers(t),
      window.matchMedia("(min-width: 769px)").matches &&
        (matchHeight(t(".one-advantage-content .text")),
        matchHeight(t(".advantage-text .line-1")))),
    t("body.downloads").length)
  ) {
    let o = "Copy install command to clipboard",
      e = "Download",
      a = "Go To URL";
    t(".cn-download").tooltip({ title: e }),
      t(".show-full-command").tooltip(),
      t(".cn-link").tooltip({ title: a }),
      t(".package-wrapper.normal-dropdown a.dropdown-item").click(function () {
        let o = t(this),
          e = o.text(),
          a = o.data("href"),
          i = o.closest(".package-wrapper"),
          n = i.find(".dropdown-toggle"),
          l = i.find(".cn-download");
        n.text(e), l.attr("href", a);
      }),
      t(".package-wrapper.package-copy-plus-download a.dropdown-item").click(
        function (a) {
          let i = t(this),
            n = i.text(),
            l = i.closest(".package-wrapper"),
            c = l.find(".dropdown-toggle"),
            s = l.find(".cn-action");
          if ((c.text(n), i.hasClass("dropdown-item-copy")))
            s.removeClass("cn-download").addClass("cn-copy-multiline"),
              s.attr("data-original-title", o),
              s.attr("href", "#");
          else {
            let t = s.data("href");
            s.removeClass("cn-copy-multiline").addClass("cn-download"),
              s.attr("data-original-title", e),
              s.attr("href", t);
          }
        }
      ),
      t(".package-wrapper.package-copy-plus-download").on(
        "click",
        ".cn-copy-multiline",
        function (o) {
          o.preventDefault(), console.log(t(this));
          let e = t(this).data("copy-target"),
            a = t(e),
            i = a.val();
          (i = i.trim()),
            a.val(i),
            a.select(),
            document.execCommand("copy"),
            t(this)
              .tooltip("hide")
              .attr("data-original-title", "Copied!")
              .tooltip("show");
        }
      ),
      t(".package-wrapper.has-multiline-text .cn-copy-multiline").click(
        function (o) {
          o.preventDefault(), console.log(t(this));
          let e = t(this).data("copy-target");
          console.log(e);
          let a = t(e);
          console.log(a);
          let i = a.text();
          console.log(i),
            (i = i.trim()),
            console.log(i),
            a.text(i),
            a.select(),
            document.execCommand("copy"),
            t(this)
              .tooltip("hide")
              .attr("data-original-title", "Copied!")
              .tooltip("show");
        }
      ),
      t(".cn-copy")
        .attr("data-original-title", o)
        .tooltip()
        .click(function () {
          let o = t(this).data("copy-value");
          copyToClipboard(t, o),
            t(this)
              .tooltip("hide")
              .attr("data-original-title", "Copied!")
              .tooltip("show");
        }),
      t(".cn-copy-multiline").tooltip({ title: o }),
      t(".cn-options")
        .tooltip()
        .click(function (o) {
          t(this).hasClass("active")
            ? (t(".cn-options").removeClass("active"),
              t(this)
                .tooltip("hide")
                .attr("data-original-title", "Show Options")
                .tooltip("show"))
            : (t(".cn-options").removeClass("active"),
              t(this)
                .addClass("active")
                .tooltip("hide")
                .attr("data-original-title", "Hide")
                .tooltip("show"));
        });
  }
}),
  ($.fn.randomize = function (t) {
    return (
      (t ? this.find(t) : this).parent().each(function () {
        $(this)
          .children(t)
          .sort(function () {
            return Math.random() - 0.5;
          })
          .detach()
          .appendTo(this);
      }),
      this
    );
  }),
  jQuery(window).on("load", function () {
    $("body.downloads").length &&
      window.matchMedia("(min-width: 992px)").matches &&
      downloadsMatchHeight();
  });
