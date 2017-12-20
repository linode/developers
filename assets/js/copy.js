(function($) {

    $("pre").each(function () {
      // Separate selector for file excerts
      if (!$(this).closest("td").length) {
        $(this).before('<div class="btn-copy" />');
      };
    });

    // Select odd to omit line numbers in pre tags
    $("tr td.lntd:odd pre").each(function () {
        $(this).before('<div class="btn-copy" />');
    });

    function generate_copy_code_buttons() {
      var $copy_button = $("<a>", {"class": "copy-code"}).append(
        $("<span>", {"class": "glyphicon glyphicon-copy", "text": ""})
      );

      $(".btn-copy").prepend($copy_button);
      var clipboard = new Clipboard(".copy-code", {
        target: function(trigger) {
          return trigger.parentNode.nextElementSibling;
        }
      })

      clipboard.on('success', function(e) {
        setTooltip(e.trigger, 'Copied!');
        hideTooltip(e.trigger);
      });

      clipboard.on('error', function(e) {
        setTooltip(e.trigger, 'Press Ctrl + c');
        hideTooltip(e.trigger);
      });
    };

    generate_copy_code_buttons();

    // Use bootstrap tooltip for on-click message
    // https://stackoverflow.com/questions/37381640/tooltips-highlight-animation-with-clipboard-js-click/37395225
    $(".copy-code").tooltip({
      trigger: 'click'
    });

    function setTooltip(btn, message) {
      $(btn).tooltip('hide')
        .attr('data-original-title', message)
        .tooltip('show');
    };

    function hideTooltip(btn) {
      setTimeout(function () {
        // Destroy tooltip in case of consecutive presses
        $(btn).tooltip('destroy');
      }, 500);
    };

    // Forgive me for I have sinned
    $("pre").hover(
      function () {
        $(this).prev('.btn-copy').find('.copy-code').css({"opacity": 1, "transition": "opacity .25s ease-in-out"});
      }, function () {
        $(this).prev('.btn-copy').find('.copy-code').css("opacity", "");
      });

})(jQuery);
