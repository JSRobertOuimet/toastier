# Toastier

Toastier provides configurable toast notifications for your AngularJS application.

## Installation

In order to install Toastier, make sure you have installed Node and npm on your machine.

```
npm install toastier
```

## Usage

To use Toastier, simply add it as a dependency to your application:

```
angular.module("app", ["toastier"]);
```

Then, inject the `$t6rier` service to any controller that requires a toast notification. The `show` method accept a `config` object in which you can define your toast `message`, `label`, `position` and `duration`.

### $t6rier.show(config)

`config` is a mandatory object that accepts four parameters:

```javascript
angular.module("mainCtrl", ["$scope", "$t6rier", function($scope, $t6rier) {
  $scope.action = function() {
    // action to be performed...
    $t6rier.show({
      message: "My toast message.",
      label: "warning",
      position: "bottom-right",
      duration: 3000
    });
  };
}]);
```

`message` / `messageKey` [mandatory]  
Type: String

`message` is the message to display.

```javascript
angular.module("mainCtrl", ["$scope", "$t6rier", function($scope, $t6rier) {
  $scope.action = function() {
    // action to be performed...
    $t6rier.show({
      message: "My toast message."
    });
  };
}]);
```

Toastier also supports Pascal Precht&#8217;s <a href="https://angular-translate.github.io/" target="_blank">angular-translate</a>, so you can define a `messageKey` instead:

```javascript
angular.module("mainCtrl", ["$scope", "$t6rier", function($scope, $t6rier) {
  $scope.action = function() {
    $t6rier.show({
      messageKey: "My_Localized_String"
    });
  };
}]);
```

If you define both `message` and `messageKey`, only `messageKey` will be considered.

`label` [optional]  
Type: String  
Default: `"info"`

Toastier accepts four `label` values:
- `"info"`
- `"success"`
- `"warning"`
- `"alert"`

Each one maps to a CSS class that sets a background color for the toast. You can customize them by overriding the pre-defined SASS variables: `$t6r-info`, `$t6r-success`, `$t6r-warning` and `$t6r-alert`.

`position` [optional]  
Type: String  
Default: `"bottom"`

Toastier accepts eight `position` values:
- `"top"`
- `"top-right"`
- `"right"`
- `"bottom-right"`
- `"bottom"`
- `"bottom-left"`
- `"left"`
- `"top-left"`

These values take into account the SASS variable `$t6r-offset`, which sets a "buffer" from the edge of the window. Feel free to override it.

`duration` [optional]  
Type: Number  
Default: `2000` (milliseconds)

`duration` defines how long the toast notification will appear on screen before fading out and disappear.

## License

This project is licensed under the MIT License. See the [LICENSE.md](LICENSE.md) file for details.

## Acknowlegment

Thanks to [cappadeini](https://github.com/cappadeini) for his help!
