(function($) {
  $.fn.storymodal = function(options) { // name plugin here
    var
    modal, width, height, fade, that, closemodal;

    that = $(this);
    modal = $(this).attr("href");


    var defaults = {
      mask: '.mask',
      fade: '800',
      close: '.close',
      ajax: 'false',
      // callbacks:
      beforeOpen: function() {},
      // it's hard to do things to a div that is display none;
      afterOpen: function() {},
      //  could use to fetch ajax into modal
      beforeClose: function() {},
      // could use to reset modal after dom changes, remove any event listeners so don't fire twice next time
      afterClose: function() {} // back to desplay none
    };

    options = $.extend(defaults, options);

    closemodal = function() {
      defaults.beforeClose();
      $(modal).fadeOut(fade);
      $(defaults.mask).fadeOut(fade);

    };

    return this.each(function() { // write code inside here
      $(that).click(function() {
        // set up

        modal = $(this).attr("href");
        width = $(modal).width() / 2;
        height = $(modal).height() / 2;
        width = "-" + width + "px";
        height = "-" + height + "px";

        //activate
        // defaults.beforeOpen ();
        $(modal).css('margin-left', width);
        $(modal).css('margin-top', height);
        $(modal).fadeIn(defaults.fade);
        $(defaults.mask).fadeIn(defaults.fade);
        defaults.afterOpen();

        $('.close').click(function() {
          closemodal();
          return false;
        });

        $('.mask').click(function() {

          closemodal();
          return false;
        });

        $(document).keyup(function(e) {

          if (e.keyCode === 27) {
            closemodal();
          } // escape key
        });

        return false;

      });



    });
  };
})(jQuery);