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
(function() {
  "use strict";

  angular.module("app", ["toastier"]);
})();
```

Then, inject `toastierService` to any controller that requires a toast notification. The `show` method accept a `config` object in which you can define your toast `message`, `label`, `position` and `duration`.

### toastierService.show(config)

`config` is a mandatory object that accepts four parameters:

```javascript
(function () {
  "use strict";

  angular
    .module("app")
    .controller("toastierDemoController", toastierDemoController);

  function toastierDemoController(toastierService) {
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
```

`message` / `messageKey` [mandatory]  
Type: String

`message` is the message to display.

```javascript
(function () {
  "use strict";

  angular
    .module("app")
    .controller("toastierDemoController", toastierDemoController);

  function toastierDemoController(toastierService) {
    var vm = this;

    vm.action = action;

    function action() {
      toastierService.show({
        message: "This is an info message."
      });
    }
  }
})();
```

Toastier also supports Pascal Precht&#8217;s <a href="https://angular-translate.github.io/" target="_blank">angular-translate</a>. To use it, load angular-translate to your HTML document, and in your controller, define a `messageKey` instead:

```javascript
(function () {
  "use strict";

  angular
    .module("app")
    .controller("toastierDemoController", toastierDemoController);

  function toastierDemoController(toastierService) {
    var vm = this;

    vm.action = action;

    function action() {
      toastierService.show({
        messageKey: "Your_Localized_String"
      });
    }
  }
})();
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

Each one maps to a CSS class that sets a background color for the toast. You can customize them by overriding the pre-defined SASS/LESS variables: `t6r-info`, `t6r-success`, `t6r-warning` and `t6r-alert`.

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

These values take into account the SASS/LESS variable `t6r-offset`, which sets a "buffer" from the edge of the window. Feel free to override it.

`duration` [optional]  
Type: Number  
Default: `2000` (milliseconds)

`duration` defines how long the toast notification will appear on screen before fading out and disappear.

## License

This project is licensed under the MIT License. See the [LICENSE.md](LICENSE.md) file for details.

## Acknowlegment

Thanks to [cappadeini](https://github.com/cappadeini) for his help!
