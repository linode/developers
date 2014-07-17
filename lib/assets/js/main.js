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
    resultsPerPage: 10,

    getPageNumber: function() {
      return Math.max(1, ( parseInt(Page.param('page')) || 1 ));
    },
    handler: function(response) {
      var $searchResults = $('#search-results'),
          $searchStatus  = $('#library-search-status');

      if (!response.items) {
        $searchStatus.html('<p>No results found.</p>');
        return;
      }

      // search was successful
      $('.remove-after-search').remove();

      for (var i = 0; i < response.items.length; i++) {
        var item = response.items[i];
        $searchResults.append(Handlebars.templates.search(item));
      }

      var $pagerPrev = $('#pager-prev'),
          $pagerNext = $('#pager-next'),
          $pagerNextLink = $('#pager-next-link'),
          $pagerPrevLink = $('#pager-prev-link'),
          $pageCounter = $('#library-page-num');

      if (response.queries.nextPage) {
        var nextPage = Math.ceil(response.queries.nextPage[0].startIndex / Search.resultsPerPage),
            args = ['q=' + Page.param('q'), 'page=' + nextPage];

        $pagerNext.css('display', 'inline-block');
        $pagerNextLink.attr('href', '/library/search?' + args.join('&'));
      }

      if (response.queries.previousPage) {
        var previousPage = Math.ceil(response.queries.previousPage[0].startIndex / Search.resultsPerPage),
            args = ['q=' + Page.param('q'), 'page=' + previousPage];

        $pagerPrev.css('display', 'inline-block');
        $pagerPrevLink.attr('href', '/library/search?' + args.join('&'));
      }

    },
    init: function() {
      var placeholderCallback = function() {
        google.setOnLoadCallback(function() {
          $('#gsc-i-id1').attr('placeholder', 'What do you need help with?');
        });
      };

      window.__gcse = {
        callback: placeholderCallback
      };

      (function() {
        var cx = '000157629893119917628:5rcen_5ss4c';
        var gcse = document.createElement('script');
        gcse.type = 'text/javascript';
        gcse.async = true;
        gcse.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') +
        '//www.google.com/cse/cse.js?cx=' + cx;
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(gcse, s);
      })();
    },
    run: function() {
      var elem = document.createElement('script'),
          page = Search.getPageNumber(),
          args = ['key=AIzaSyCMGfdDaSfjqv5zYoS0mTJnOT3e9MURWkU',
                  'cx=000157629893119917628:5rcen_5ss4c',
                  'callback=Search.handler',
                  'q=' + Page.param('q'),
                  'start=' + (1 + (page - 1) * Search.resultsPerPage)];

      elem.type = 'text/javascript';
      elem.src = 'https://www.googleapis.com/customsearch/v1?' + args.join('&');

      var s = document.getElementsByTagName('script')[0];
      s.parentNode.insertBefore(elem, s);
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
    $('.first-section').addClass('some-space-top');
    $('footer').hide();
  }

})(jQuery);
