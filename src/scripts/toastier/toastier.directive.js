(function() {
  "use strict";

  angular
    .module("toastier")
    .directive("toast", toast);

  function toast($timeout) {
    var directive = {
      scope: {
        message: "@",
        label: "@",
        position: "@",
        duration: "@"
      },
      template: "<div role='alert' class='t6r t6r-fade-in {{label}} {{position}}'>{{message}}</div>",
      replace: true,
      restrict: "E",
      compile: compile
    };
    return directive;

    function compile(tElement, tAttrs) {
      return {
        pre: function(scope, iElement, iAttrs) {

          scope.message = iAttrs.message;
          scope.label = iAttrs.label;
          scope.position = iAttrs.position;
          scope.duration = iAttrs.duration;

          angular.element(document.body).append(iElement);
        },
        post: function(scope, iElement, iAttrs) {
          var toastDuration;

          toastDuration = parseInt(scope.duration);
          $timeout(fadeOutAndDestroy, toastDuration);

          function fadeOutAndDestroy() {
            var fadeOutDuration;
            
            fadeOutDuration = 1000;
            $(iElement).fadeOut(fadeOutDuration, destroy);

            function destroy() {
              iElement.remove();
            }
          }
        }
      };
    }
  }
})();
