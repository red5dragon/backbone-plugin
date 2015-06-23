(function() {
  define([], function() {
    var AnimateError;
    return AnimateError = (function() {
      function AnimateError($template, selectors, startParams) {
        var i, len, selector;
        this.paramsCache = {};
        for (i = 0, len = selectors.length; i < len; i++) {
          selector = selectors[i];
          this.paramsCache[selector] = {};
          this.paramsCache[selector].$element = $template.find(selector);
          this.paramsCache[selector].$parent = this.paramsCache[selector].$element.parent();
          this.paramsCache[selector].params = {
            complate: 0,
            height: 0,
            opacity: 0,
            translateY: -30,
            translateZ: -33,
            rotateX: 90
          };
        }
      }

      AnimateError.prototype.showAnimate = function(selector) {
        var $element, $parent, contain, params;
        if (this.paramsCache.current === selector) {
          return;
        }
        contain = this.paramsCache.current ? true : void 0;
        if (this.paramsCache.current) {
          this.hideAnimate(this.paramsCache.current, true);
        }
        this.paramsCache.current = selector;
        params = this.paramsCache[selector].params;
        $element = this.paramsCache[selector].$element;
        $parent = this.paramsCache[selector].$parent;
        return TweenLite.to(params, 0.3, {
          onStart: function() {
            return $parent.css({
              perspective: "900px",
              transformStyle: "preserve-3d"
            });
          },
          complate: 100,
          height: 33,
          translateY: 0,
          translateZ: 0,
          opacity: 1,
          rotateX: 0,
          ease: Power0.easeInOut,
          onUpdate: function() {
            if (!contain) {
              $parent.css({
                height: params.height + "px"
              });
            }
            return $element.css({
              opacity: params.opacity,
              transform: "translateY(" + params.translateY + "%) translateZ(" + params.translateZ + "px) rotateX(" + params.rotateX + "deg)",
              transformOrigin: "0% " + params.complate + "%"
            });
          },
          onComplete: function() {
            $parent.css({
              perspective: "",
              transformStyle: ""
            });
            return $element.css({
              transform: "",
              transformOrigin: ""
            });
          }
        });
      };

      AnimateError.prototype.hideAnimate = function(selector, current) {
        var $element, $parent, params;
        if (this.paramsCache.current !== selector) {
          return;
        }
        this.paramsCache.current = null;
        params = this.paramsCache[selector].params;
        $element = this.paramsCache[selector].$element;
        $parent = this.paramsCache[selector].$parent;
        params.height = $parent.height();
        return TweenLite.to(params, 0.3, {
          onStart: function() {
            return $parent.css({
              perspective: "900px",
              transformStyle: "preserve-3d"
            });
          },
          complate: 0,
          height: 0,
          translateY: -30,
          translateZ: -33,
          opacity: 0,
          rotateX: 90,
          ease: Power0.easeInOut,
          onUpdate: function() {
            if (!current) {
              $parent.css({
                height: params.height + "px"
              });
            }
            return $element.css({
              opacity: params.opacity,
              transform: "translateY(" + params.translateY + "%) translateZ(" + params.translateZ + "px) rotateX(" + params.rotateX + "deg)",
              transformOrigin: "0% " + params.complate + "%"
            });
          },
          onComplete: function() {
            $parent.css({
              perspective: "",
              transformStyle: ""
            });
            return $element.css({
              opacity: "",
              transform: "",
              transformOrigin: ""
            });
          }
        });
      };

      return AnimateError;

    })();
  });

}).call(this);
