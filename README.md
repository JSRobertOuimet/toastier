# Toastier

Toastier provides configurable toast notification for your AngularJS application.

## Installation

In order to install Toastier, make sure you have installed Node and npm on your machine.

```
npm install toastier
```

## Usage

To use Toastier, simply add it as a dependency to your application:

```
angular.module("app", [toastier]);
```

Then, inject the `$toaster` service to any controller that requires a toast notification. The `show` method accept a `config` object in which you can define your toast message:

```javascript
angular.module("mainCtrl", ["$scope", "$toaster", function($scope, $toaster) {
  $scope.action = function() {
    // action to be performed...
    $toaster.show({
      message: "My toast message."
    });
  };
}]);
```

Toastier supports Pascal Precht&#8217;s <a href="https://angular-translate.github.io/" target="_blank">angular-translate</a>, so you can define a `messageKey` instead:

```javascript
angular.module("mainCtrl", ["$scope", "$toaster", function($scope, $toaster) {
  $scope.action = function() {
    $toaster.show({
      messageKey: "My_Localized_String"
    });
  };
}]);
```

Toastier will return an error if you don&#8217;t define a toast `message` or `messageKey`. If you define both, only `messageKey` will be considered.

Furthermore, Toastier provides three configurable properties:

1. `label`: "info", "success", "warning", "alert"
2. `position`: "top", "topRight", "right", "bottomRight", "bottom", "bottomLeft", "left", "topLeft"
3. `duration`: number of milliseconds (default: 2000)

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
