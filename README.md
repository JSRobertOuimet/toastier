# Toastier

Toastier provides configurable toast notification for your AngularJS application.

## Installation

In ordre to install Toastier, make sure you have Node and npm on your machine:

```
node --version
```

```
npm --version
```

Than, simply install Toastier:

```
npm install toastier
```

## Usage

To use Toastier, simply add it to your dependencies:

```
angular.module("app", [toastier]);
```

Then, use the `$toaster` service in your controller like so:

```
angular.module("mainCtrl", ["$scope", "$toaster", function($scope, $toaster) {
	$scope.action = function() {
		$toaster.show({
			message: "My toast message."
		});
	};
});
```

Toastier also supports Pascal Precht&#8217;s [angular-translate](https://angular-translate.github.io/), so you can define a `messageKey` instead:

```
angular.module("mainCtrl", ["$scope", "$toaster", function($scope, $toaster) {
	$scope.action = function() {
		$toaster.show({
			messageKey: "My_Localized_String"
		});
	};
});
```

Toastier will return an error if you don&#8217;t provide a `message` or `messageKey`. If you provide both, only `messageKey` will be considered.

Furthermore, Toastier provides three configurable properties:
1. label: "info", "success", "warning", "alert"
2. position: "top", "topRight", "right", "bottomRight", "bottom", "bottomLeft", "left", "topLeft"
3. duration: number of milliseconds (default: 2000)

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
* [Maven](https://maven.apache.org/) - Dependency Management
* [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).

## Authors

* **Billie Thompson** - *Initial work* - [PurpleBooth](https://github.com/PurpleBooth)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone who's code was used
* Inspiration
* etc
