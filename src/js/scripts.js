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
  })

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

/* Search Logic Starts */
function autocomplete(inp) {

  //TODO search bar checking
  if (!inp) return

  var currentFocus;
  inp.addEventListener("input", async function(e) {
      var a, b, i, val = this.value;
      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;
      const res = await fetchData(val);
      const arr = res.packages ? res.packages : [];
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      this.parentNode.appendChild(a);
      const len = arr.length > 5 ? 5 : arr.length;
      for (i = 0; i < len; i++) {
          b = document.createElement("DIV");
          b.innerHTML += '<span class="at-row"><span class="at-column-70 pkg-name">'
          + arr[i].name + '</span>'
          + '<span class="at-column-30 pkg-version">'
          + arr[i].latest_version + '</span>'
          + '</span>';
          b.addEventListener("click", function(e) {
              window.open('/center/' + this.querySelector(".pkg-name").innerHTML);
              closeAllLists();
          });
          a.appendChild(b);
      }
      const seeAll = document.createElement("A");
      seeAll.className += 'see-all';
      seeAll.innerHTML = '<div class="all-results">See All Results</div>';
      seeAll.href = '/center/search/' + val;
      seeAll.setAttribute("target", "_blank");
      a.appendChild(seeAll);
  });
  inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
        currentFocus++;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 38) { //up
        /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
        currentFocus--;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 13) {
        /*If the ENTER key is pressed, prevent the form from being submitted,*/
        e.preventDefault();
        if (currentFocus > -1) {
          /*and simulate a click on the "active" item:*/
          if (x) x[currentFocus].click();
        }
      }
  });
  function addActive(x) {
    if (!x) return false;
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  /*execute closeAllLists when someone clicks in the document:*/
  document.addEventListener("click", function (e) {
      closeAllLists(e.target);
  });
}

function fetchData(q) {
	return  $.ajax({
    type: 'POST',
    url: '/center/api/ui/smartsearch',
    data: `{"search_params": "searchstring:${q}"}`,
    contentType: "application/json"
  })
  .done(function(res) {
    console.log('Relative Search AJAX res=', res);
  })
  .fail(function(err) {
    console.log('Error: ' + err.status);
  });
}

/*initiate the autocomplete function on the "searchInput" element*/
//please add an "if is home statement !"
if ($('body.home').length)
autocomplete(document.getElementById("searchInput"));

/* Search Logic Ends */

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

    $('.info-circle').tooltip()

    //subscribe modal
    let openSourceSubscribeModal = $('#openSourceSubscribeModal');
    $('#artifactoryZipPackage .cn-download').on('click', function() {
        openSourceSubscribeModal.modal('show')
    })
    //subscribe modal end

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

  if (document.body.classList.contains('downloads') ) {
    MktoForms2.loadForm(
      "//leap.jfrog.com",
      "256-FNZ-187", 3511,
      function (t) { 
          t.onSuccess(function (o, e) {
            
            if (dataLayer != undefined) {
              dataLayer.push({
                'formName': 'ConanEmailUpdates',
                'event': 'conanFormSent' 
              });
            }

            return (
                t.getFormElem().fadeOut(),
                (document.getElementById("subscribeSuccess").textContent =
                "Thanks! you have subscribed successfuly."),
                !1
            );

          });
        //form
        let form = t.getFormElem()[0]
        form.querySelector('style').remove()
        form.style.width = 'auto'
        form.style.padding = '0'
        form.style.margin = '0'
                                      
        //email
        let emailInput = form.querySelector('input#Email')
        emailInput.classList.add('form-control')
        emailInput.setAttribute('placeholder', 'Your Email')
                                      
        //TAC checkbox
        let tacCheckbox = form.querySelector('input#acceptthetermsandconditions')
        tacCheckbox.classList.add('magic-checkbox')
        tacCheckbox.parentNode.parentNode.parentNode.parentNode.classList.add('mkto-checkbox-form-row')

        let checkBoxAndLabelContainer = form.querySelector('label#Lblacceptthetermsandconditions')
        let labelElement = form.querySelector('.mktoHtmlText.mktoHasWidth')
        checkBoxAndLabelContainer.appendChild(labelElement)

        let submitBtn = form.querySelector('button.mktoButton')
        submitBtn.classList.add('j-btn')
        submitBtn.innerText = 'Subscribe'
        submitBtn.parentNode.parentNode.classList.add('marketo-submit-row')
      }
    )
  }
