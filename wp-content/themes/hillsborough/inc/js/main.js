var hillsborough = hillsborough || {};

(function($) {
  hillsborough = {

    setup: function() {
      // add placeholder top anchor
      $('body').prepend('<div id="toTop"></div>');
      // smooth scroll
      $('a[href^="#"]').on('click', function(e) {
        if (this.hash !== "#top") {
          e.preventDefault();
          var target = this.hash, $target;

          if ($("[name='" + target.substring(1) + "']").length > 0) {
            $target = $("[name='" + target.substring(1) + "']");
          } else {
            $target = $(target);
          }
          
          $('html, body').stop().animate({
            'scrollTop': $target.offset().top
          }, 900, 'swing', function() {
            window.location.hash = target;
          });
        }
        
      });
      // prevent search box from disappearing on focus
      $('.dropdown-menu input').click(function(e) {
        e.stopPropagation();
      });

      // Toggle open class on main nav dropdown on hover
      if( $('#site-navigation').hasClass('hover') ) {
        $('li.dropdown').hover(
          function() {
            $(this).addClass('open');
          }, function() {
            $(this).removeClass('open');
          }
        );
      }

      // On dropdown open
      $(document).on('shown.bs.dropdown', function(event) {
        var dropdown = $(event.target);
       
        // Set aria-expanded to true
        dropdown.find('.dropdown-menu').attr('aria-expanded', true);
       
      });

      // On dropdown close
      $(document).on('hidden.bs.dropdown', function(event) {
       var dropdown = $(event.target);
       
       // Set aria-expanded to false 
       dropdown.find('.dropdown-menu').attr('aria-expanded', false);
       
      });
    }



  }
})(jQuery);

hillsborough.setup();
