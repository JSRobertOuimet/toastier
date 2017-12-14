(function () {
  "use strict";

  angular
    .module("demo")
    .controller("demoController", mainController);

  function mainController(toastierService) {
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
