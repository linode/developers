(function($) {

  Page = {
    isMobile: function() {
      return $(window).width() <= 768;
    },
    param: function(sVar) {
      return decodeURI(window.location.search.replace(new RegExp("^(?:.*[&\\?]"
             + encodeURI(sVar).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));
    },
    Toggle: {
      init: function(element) {
        var $element = $(element);
        var $child = $($element.data("target"));

        if ($child.hasClass("in")) {
          $element.find(".toggle-open").show();
          $element.find(".toggle-closed").hide();
        } else {
          $element.find(".toggle-closed").show();
          $element.find(".toggle-open").hide();
        }
      },

      update: function(element) {
        var $element = $(element);
        if ($element.find(".toggle-closed").is(":visible")) {
          $element.find(".toggle-open").show();
          $element.find(".toggle-closed").hide();
        } else {
          $element.find(".toggle-closed").show();
          $element.find(".toggle-open").hide();
        }
      }
    }
  };

  Search = {
    numReps: 2,
    resultsPerPage: 10,

    getPageNumber: function() {
      return Math.max(1, ( parseInt(Page.param('page')) || 1 ));
    },
    getQuery: function() {
      return Page.param('q') || Page.param('query') || '';
    },
    init: function() {
      Search.repsLeft = Search.numReps;

      var placeholderCallback = function() {
        google.setOnLoadCallback(function() {
          $('#gsc-i-id1').attr('placeholder', 'What do you need help with?').focus();
        });
      };

      window.__gcse = {
        callback: placeholderCallback
      };

      (function() {
        var cx = '006150713320016956361:5rcen_5ss4c';
        var gcse = document.createElement('script');
        gcse.type = 'text/javascript';
        gcse.async = true;
        gcse.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') +
        '//www.google.com/cse/cse.js?cx=' + cx;
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(gcse, s);
      })();
    },

    hideNextButton: function() {
      Search.noneLeft = true;
      $('#pager-next').hide();
    },
    showNextButton: function() {
      if (!Search.noneLeft) {
        var nextPage = Search.getPageNumber() + 1,
            args = ['q=' + Search.getQuery(), 'page=' + nextPage],
            $pagerNext = $('#pager-next'),
            $pagerNextLink = $('#pager-next-link');

        $pagerNext.css('display', 'inline-block');
        $pagerNextLink.attr('href', '/docs/search?' + args.join('&'));
      }
    },
    showPrevButton: function() {
      var previousPage = Search.getPageNumber() - 1,
          args = ['q=' + Search.getQuery(), 'page=' + previousPage],
          $pagerPrev = $('#pager-prev'),
          $pagerPrevLink = $('#pager-prev-link');

      $pagerPrev.css('display', 'inline-block');
      $pagerPrevLink.attr('href', '/docs/search?' + args.join('&'));
    }
  };

  Handlebars.registerHelper('formatDate', function(object) {
    var date = new Date(object),
        months = [ "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December" ];

    return months[date.getMonth()] + ' ' + (date.getDay() + 1) + ', ' + date.getFullYear();
  });

  // toggle
  $(".toggle").each(function(i, element) {
    Page.Toggle.init(element);
  });
  $(".toggle").click(function(event) {
    Page.Toggle.update($(event.target).parent()[0]);
  });

  Search.init();

  if (Page.param('format') === 'app') {
    $('header').hide();
    $('.breadcrumb-row').hide();
    $('.first-section').addClass('library-section-app');
    $('footer').hide();
    $("[href^='/docs']").each(function(){
        var u;
        if (this.href.match(/format=app/)) return;
        u=new URL(this.href);
        u.search=u.search+(u.search.match(/^\?/)?'&':'?')+'format=app';
        this.href = u.toString();
    });
  }

})(jQuery);
