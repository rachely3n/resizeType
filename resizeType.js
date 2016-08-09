

(function($) {
   $.fn.flowtype = function(options) {

// Establish default settings/variables
// ====================================
// ok for me minimum and maximum refer to viewport size
      var settings = $.extend({
         maximum   : 9999,
         minimum   : 1,
         maxFont   : 9999,
         minFont   : 1,
         fontRatio : 35
      }, options),
// ok the problem with this is i don't know max_width and
// min_width at different resizes
      calcSize = function(w, min_v, max_v) {
         var minF = settings.minFont,
             maxF = settings.maxFont; 
         return minF + (maxF- minF) * (w - min_v) / (max_v - min_v);
      },
// Do the magic math
// =================
      sizeChange = function(el) {
         var $base_w = $(window).width(),
            $el = $(el),
            elw = $el.width()
            ratio = $el / $base_w;
            //based on the width of the element and its font size
            //change width to fit
            //fontRatio is the #of chars per line
            font_base = elw / settings.fontRatio;
            font_size = calcSize(elw, 768, 1200);
            $el.css('font-size', font_size + 'px');
      };

// Make the magic visible
// ======================
      return this.each(function() {
      // Context for resize callback
         var that = this;
      // Make changes upon resize
         $(window).resize(function(){sizeChange(that);});
      // Set changes on load
         // sizeChange(this);
      });
   };
}(jQuery));
