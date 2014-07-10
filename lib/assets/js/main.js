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
    handler: function(response) {
      for (var i = 0; i < response.items.length; i++) {
        var item = response.items[i];
        // in production code, item.htmlTitle should have the HTML entities escaped.
        document.getElementById("results").innerHTML += "<br>" + item.htmlTitle;
      }
    },
    run: function() {
      var elem = document.createElement('script'),
          args = ['key=AIzaSyCMGfdDaSfjqv5zYoS0mTJnOT3e9MURWkU',
                  'cx=000157629893119917628:5rcen_5ss4c',
                  'callback=Search.handler',
                  'q=' + Page.param('q')];

      elem.type = 'text/javascript';
      elem.src = 'https://www.googleapis.com/customsearch/v1?' + args.join('&');

      var s = document.getElementsByTagName('script')[0];
      s.parentNode.insertBefore(elem, s);
    }
  };

  // toggle
  $(".toggle").each(function(i, element) {
    Page.Toggle.init(element);
  });
  $(".toggle").click(function(event) {
    Page.Toggle.update($(event.target).parent()[0]);
  });

})(jQuery);
