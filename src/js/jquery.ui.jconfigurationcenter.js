
(function($) {
    $.widget("ui.jConfigurationCenter", {
        options: {

        },

        _create: function() {
            var $body = $('body');
            this._sliding = false;
            $(this.element).addClass("jconfigurationcenter-container");
            this.__createMarkup();
        },

        _init: function() {
            if (window.console) {
                console.log('CALL _init');
            }
        },

        __createMarkup: function() {
            var self = this,
                $body = $('body'),
                $modal = $('<div/>');
            $modal
                .addClass('jconfigurationcenter-modal')
                .hide()
                .click(function() {
                    self.hide();
                })
                .appendTo($body);
        },

        show: function() {
            var self = this,
                $me = $(this.element),
                slideHeight = $me.outerWidth(true),
                slideAnimateIn = {};

            if ($me.is(':visible') || self._sliding) {
                return;
            }
            self._sliding = true;

            $('.jconfigurationcenter-modal').show();
            $me.css({top:'-' + slideHeight + 'px', bottom:'auto'});
            slideAnimateIn["top"] = "+=" + slideHeight;
            $me.fadeIn({duration: 250, queue: false})
                .animate(slideAnimateIn, 250, function() {
                    self._sliding = false;
                });

        },

        hide: function() {
            var self = this,
                $me = $(this.element),
                slideHeight = $me.outerWidth(true),
                slideAnimateIn = {};

            if ($me.is(':hidden') || self._sliding) {
                return;
            }
            self._sliding = true;

            slideAnimateIn["top"] = "-=" + slideHeight;

            $('.jconfigurationcenter-modal').hide();
            $me.fadeOut({duration: 500, queue: false})
                .animate(slideAnimateIn, 250, function () {
                    $me.hide();
                    self._sliding = false;
                });
        },

        toggle: function() {
            if ($(this.element).is(':hidden')) {
                this.show();
            } else {
                this.hide();
            }
        }
    });
})(jQuery);
