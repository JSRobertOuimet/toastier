(function() {
  "use strict";

  angular
    .module("toastier")
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
