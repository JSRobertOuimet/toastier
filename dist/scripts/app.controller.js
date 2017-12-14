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
