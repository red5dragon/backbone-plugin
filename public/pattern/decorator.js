// Generated by IcedCoffeeScript 1.8.0-d
(function() {
  var AnimateView, AnimateViewDecorator, viewOne, viewTwo,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  AnimateView = (function() {
    function AnimateView(element, delay, speed) {
      this.element = element;
      this.delay = delay;
      this.speed = speed;
    }

    AnimateView.prototype.show = function() {
      return TweenMax.to(this.element, this.speed, {
        transform: "translateY(0%)"
      }, this.delay);
    };

    AnimateView.prototype.hide = function() {
      return TweenMax.to(this.element, this.speed, {
        transform: "translateY(-100%)"
      }, this.delay);
    };

    return AnimateView;

  })();

  AnimateViewDecorator = (function(_super) {
    __extends(AnimateViewDecorator, _super);

    function AnimateViewDecorator(element, delay, speed, animateView) {
      this.element = element;
      this.delay = delay;
      this.speed = speed;
      this.delay += animateView.delay + animateView.speed;
    }

    return AnimateViewDecorator;

  })(AnimateView);

  viewOne = new AnimateView($(".view-one"), 0.3, 1.6);

  console.log(viewOne);

  viewTwo = new AnimateViewDecorator($(".view-two"), 0.3, 1, viewOne);

  console.log(viewTwo);

}).call(this);
