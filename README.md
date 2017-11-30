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

Then, inject the `$toastier` service to any controller that requires a toast notification. The `show` method accept a `config` object in which you can define your toast message.

### $toastier.show(config)

`config` is a mandatory object that accepts four parameters:

`message` / `messageKey` [mandatory]  
Type: String

```javascript
angular.module("mainCtrl", ["$scope", "$toastier", function($scope, $toastier) {
  $scope.action = function() {
    // action to be performed...
    $toastier.show({
      message: "My toast message."
    });
  };
}]);
```

Toastier also supports Pascal Precht&#8217;s <a href="https://angular-translate.github.io/" target="_blank">angular-translate</a>, so you can define a `messageKey` instead:

```javascript
angular.module("mainCtrl", ["$scope", "$toastier", function($scope, $toastier) {
  $scope.action = function() {
    $toastier.show({
      messageKey: "My_Localized_String"
    });
  };
}]);
```

Toastier will return an error if you don&#8217;t define a toast `message` or `messageKey`. If you define both, only `messageKey` will be considered.

`label` [optional]  
Type: String  
Default: "info"

Toastier accepts four `label` values:
- `"info"`
- `"success"`
- `"warning"`
- `"alert"`

Each one maps to a CSS class that sets a background color for the toast. You can customize them by overriding the pre-defined SASS variables: `$info`, `$success`, `$warning` and `$alert`.

`position` [optional]  
Type: String  
Default: "bottom"

Toastier accepts eight `position` values:
- `"top"`
- `"topRight"`
- `"right"`
- `"bottomRight"`
- `"bottom"`
- `"bottomLeft"`
- `"left"`
- `"topLeft"`

These values take into account the SASS variable `$toastOffset`, which defines a "buffer" from the edge of the window. Feel free to override it.

`duration` [optional]  
Type: Number  
Default: 2000



## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
