angular.module("app")
	.controller("mainCtrl", ["$scope", "$toastier", function($scope, $toastier) {
		$scope.action = function() {
			$toastier.show({
				message: "This is an info message.",
				label: "info",
				position: "top",
				duration: 2000
			});
		};
	}]);
