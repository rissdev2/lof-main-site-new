(function ($) {
  $(function () {
    //  open and close nav
    $("#navbar-toggle").click(function () {
      $("nav ul").slideToggle();
    });

    // Hamburger toggle
    $("#navbar-toggle").on("click", function () {
      this.classList.toggle("active");
    });

    // If a link has a dropdown, add sub menu toggle.
    $("nav ul li a:not(:only-child)").click(function (e) {
      $(this).siblings(".navbar-dropdown").slideToggle("slow");

      // Close dropdown when select another dropdown
      $(".navbar-dropdown").not($(this).siblings()).hide("slow");
      e.stopPropagation();
    });

    // Click outside the dropdown will remove the dropdown class
    $("html").click(function () {
      $(".navbar-dropdown").hide();
    });
  });
})(jQuery);







$(function () {
  function isScrolledIntoView($elem) {
      var docViewTop = $(window).scrollTop();
      var docViewBottom = docViewTop + $(window).height();
      var elemTop = $elem.offset().top;
      var elemBottom = elemTop + $elem.height();
      return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
  }

  function count($this) {
      var current = parseInt($this.html(), 10);
      if (isScrolledIntoView($this) && !$this.data("isCounting") && current < $this.data('count')) {
          $this.html(++current);
          $this.data("isCounting", true);
          setTimeout(function () {
              $this.data("isCounting", false);
              count($this);
          }, 50);
      }
  }

  $(".counter-count").each(function () {
      $(this).data('count', parseInt($(this).html(), 10));
      $(this).html('0');
      $(this).data("isCounting", false);
  });

  function startCount() {
      $(".counter-count").each(function () {
          count($(this));
      });
  };

  $(window).scroll(function () {
      startCount();
  });

  startCount();
});