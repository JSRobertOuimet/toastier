(function() {
  "use strict";

  angular.module("app", ["toastier"]);
})();

(function () {
  "use strict";

  angular
    .module("app")
    .controller("appController", appController);

  function appController(toastierService) {
    var vm = this;

    vm.action = action;

    function action() {
      toastierService.show({
        message: "This is an info message.",
        label: "info",
        position: "bottom-right",
        duration: 2000
      });
    }
  }
})();

(function() {
  "use strict";

  angular
    .module("app")
    .factory("toastierService", toastierService);

  function toastierService($compile, $rootScope, $translate) {
    var toastierService;

    toastierService = {
      show: show
    };

    return toastierService;

    function show(config) {
      var errorState, $toasterMarkup;

      errorState = (!config || 
        (config.messageKey === undefined && config.message === undefined) || 
        (config.messageKey === "" && config.message === ""));

      if(errorState) {
        throw new Error("$toastError: Message must be defined.");
      };

      $toasterMarkup = generateMarkup(config);
      angular.element(document.body).append($toasterMarkup);


      function generateMarkup(config){
        var markupTemplate, toastierConfig, $newScope;

        markupTemplate = "<toast message='{message}' label='{label}' position='{position}' duration='{duration}'></toast>";

        toastierConfig = populateConfiguration(config);

        markupTemplate = markupTemplate
          .replace("{message}", toastierConfig.message)
          .replace("{label}", "t6r-" + toastierConfig.label)
          .replace("{position}", "t6r-" + toastierConfig.position)
          .replace("{duration}", toastierConfig.duration);

        // Create and append toast to body
        $newScope = $rootScope.$new();

        return $compile(markupTemplate)($newScope);


        function populateConfiguration(inputConfig){
          var defaultConfig, outputConfig = {};

          // Configure toast
          defaultConfig = {
            label: "info",
            position: "bottom",
            duration: 2000
          };

          Object.keys(config).forEach(function(key) {
            outputConfig[key] = inputConfig[key] || defaultConfig[key];
          });

          outputConfig.message = inputConfig.messageKey ? $translate.instant(inputConfig.messageKey) : inputConfig.message;

          return outputConfig;
        }
      }
    }
  }
})();

(function() {
  "use strict";

  angular
    .module("toastier", ["pascalprecht.translate"])
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
