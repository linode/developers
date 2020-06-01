(function () {
  'use strict';

  // elements we'll be listening on or manipulating
  var $html, $header, $main_menu, $switches, $sub_menus; // element bindings

  var bindElements = function bindElements() {
    $header = document.querySelector('.c-site-header');
    $main_menu = document.querySelector('.c-main-menu');
    //$switches = $main_menu.querySelectorAll('.o-menu__switch');
    $sub_menus = document.querySelectorAll('.c-sub-menu');
  }; // event bindings


  var bindEvents = function bindEvents() {
    // sub menu switch click handlers
    $main_menu.addEventListener('click', function (event) {
      var $clicked_link = event.target.closest('a'); // Not a switch

      if (null === $clicked_link || '#' !== $clicked_link.getAttribute('href').charAt(0)) return;
      var $target_sub_menu = document.querySelector($clicked_link.getAttribute('href')); // If clicked menu is already active
      // Just deactivate it

      if ($target_sub_menu.classList.contains('active')) {
        closeAllSubMenus();
        $clicked_link.classList.remove('active');
        $target_sub_menu.classList.remove('active');
        setHtmlScrollState(true); // Else clicked menu was not active
        // Deactivate others, activate target
      } else {
        closeAllSubMenus();
        $clicked_link.classList.add('active');
        $target_sub_menu.classList.add('active');
        setHtmlScrollState(false);
      }

      event.preventDefault();
      return false;
    }); // submenu row click handler

    $header.addEventListener('click', function (event) {
      if (event.target.classList.contains('c-sub-menu')) {
        closeAllSubMenus();
        setHtmlScrollState(true);
        return false;
      }
    }); // Keyboard Events

    document.addEventListener('keyup', function (event) {
      switch (event.keyCode) {
        case 27:
          closeAllSubMenus();
          setHtmlScrollState(true);
          break;
      }
    });
  };

  var closeAllSubMenus = function closeAllSubMenus() {
    /*$switches.forEach(function ($sub_menu) {
      $sub_menu.classList.remove('active');
    });*/
    $sub_menus.forEach(function ($sub_menu) {
      $sub_menu.classList.remove('active');
    });
  };

  var setHtmlScrollState = function setHtmlScrollState(state) {
    // disable scroll if any submenu is active
    $html.style.overflow = state ? '' : 'hidden';
  }; // return early if page builder is in use


  var $html = document.querySelector('html');

  if (!$html.classList.contains('fl-builder-edit')) {
    bindElements();
    bindEvents();
  }

}());
