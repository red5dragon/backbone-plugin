(function() {
  define(["text!component/field/gender.html", "component/field/model", "component/field/animate.error"], function(template, FieldModel, AnimateError) {
    return Backbone.View.extend({
      model: new FieldModel,
      events: {
        "input select": function(event) {
          this.animateError.hideAnimate(".empty");
          return this.model.set({
            result: event.target.value
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
        $template.val("");
        this.$el.append($template);
        return this.animateError = new AnimateError($template, [".empty"]);
      }
    });
  });

}).call(this);
