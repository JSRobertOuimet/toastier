angular.module("toastier", ["ngAnimate", "pascalprecht.translate"]);

angular.module("toastier")
  .directive("toast", ["$timeout",
    function($timeout) {
      return {
        restrict: "E",
        scope: {
          message: "@",
          label: "@",
          position: "@",
          duration: "@"
        },
        template: "<div role='alert' class='t6r t6r-fade-in {{label}} {{position}}'>{{message}}</div>",
        replace: true,
        compile: function(tElement, tAttrs) {
          return {
            pre: function(scope, iElement, iAttrs) {
              var fadeInDuration = 500;

              scope.message = iAttrs.message;
              scope.label = iAttrs.label;
              scope.position = iAttrs.position;
              scope.duration = iAttrs.duration;

              angular.element(document.body).append(iElement);
              $(iElement).fadeIn(fadeInDuration);
            },
            post: function(scope, iElement, iAttrs) {
              var fadeOutDuration, toastDuration;

              fadeOutDuration = 200;
              toastDuration = parseInt(scope.duration);

              $timeout(fadeOutAndDestroy, toastDuration);

              function fadeOutAndDestroy() {
                $(iElement).fadeOut(fadeOutDuration, destroy);

                function destroy() {
                  iElement.remove();
                }
              }
            }
          };
        }
      };
    }
  ])
  .factory("$toastier", ["$compile", "$rootScope", "$translate", 
    function($compile, $rootScope, $translate) {
      var $toaster;

      $toaster = {
        show: show
      };

      return $toaster;

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
]);
