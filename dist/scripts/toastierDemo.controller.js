(function () {
  "use strict";

  angular
    .module("toastierDemo")
    .controller("toastierDemoController", toastierDemoController);

  function toastierDemoController(toastierService) {
    var vm = this;

    vm.action = action;

    function action() {
      toastierService.show({
        message: "This is an info message.",
        label: "info",
        position: "top-right",
        duration: 3000
      });
    }
  }
})();
