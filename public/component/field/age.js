(function() {
  define(["text!component/field/age.html", "component/field/model", "component/field/animate.error"], function(template, FieldModel, AnimateError) {
    return Backbone.View.extend({
      model: new FieldModel,
      events: {
        "input input": function(event) {
          var value;
          value = event.target.value;
          if (!value.length || /^\d{1,3}$/.test(value) && parseInt(value) <= 150) {
            this.animateError.hideAnimate(".empty");
            this.animateError.hideAnimate(".incorrect");
          } else if (value.length) {
            this.animateError.showAnimate(".incorrect");
          }
          return this.model.set({
            result: value
          });
        }
      },
      getValue: function() {
        var result;
        result = this.model.get("result");
        if (result) {
          return result;
        } else {
          return this.animateError.showAnimate(".empty") && void 0;
        }
      },
      initialize: function() {
        var $template;
        $template = $(template);
        this.$el.append($template);
        return this.animateError = new AnimateError($template, [".empty", ".incorrect"]);
      }
    });
  });

}).call(this);
