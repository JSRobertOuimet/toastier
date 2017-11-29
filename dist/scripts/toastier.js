angular.module("toastier", []);

angular.module("toastier")

	.directive("toast", ["$timeout", function($timeout) {
		return {
			restrict: "E",
			scope: {
				message: "@",
				label: "@",
				position: "@",
				duration: "@"
			},
			template: "<div class=\"t6r t6r-fadeIn {{label}} {{position}}\">{{message}}</div>",
			replace: true,

			compile: function(tElement, tAttrs) {

				return {

					pre: function(scope, iElement, iAttrs) {
						scope.message = iAttrs.message;
						scope.label = iAttrs.label;
						scope.position = iAttrs.position;
						scope.duration = iAttrs.duration;

						angular.element(document.body).append(iElement);
					},

					post: function(scope, iElement, iAttrs) {
						var fadeOutDuration;

						// Fade out and destroy toast
						toastDuration = parseInt(scope.duration);
						fadeOutDuration = 500;

						$timeout(fadeOut, toastDuration).then(function() {
							return $timeout(destroy, fadeOutDuration);
						});

						function fadeOut() {
							iElement.addClass("t6r-fadeOut");
						}

						function destroy() {
							iElement.remove();
						}
					}

				};

			}
		};
	}])

	.factory("$toastier", ["$compile", "$rootScope", function($compile, $rootScope) {
		var  markup, $toaster;

		$toaster = {
			show: show
		};

		return $toaster;

		function show(config) {
			var defaultConfig, markup, $toaster;

			// Configure toast
			defaultConfig = {
				label: "info",
				position: "bottom",
				duration: 2000
			};

			if(!config || config.message === undefined || config.message === "") {
				throw new Error("$toastError: Message must be defined.");
			};

			if(config === undefined) {
				config = defaultConfig;
			} else {
				for(var prop in defaultConfig) {
					config[prop] = config[prop] || defaultConfig[prop];
				};
			};

			markup = "<toast message='{0}' label='{1}' position='{2}' duration='{3}'></toast>"
			markup = markup
				.replace("{0}", config.message)
				.replace("{1}", "t6r-" + config.label)
				.replace("{2}", "t6r-" + config.position)
				.replace("{3}", config.duration);

			// Create and append toast to body
			$scope = $rootScope.$new();
			$toaster = $compile(markup)($scope);
			angular.element(document.body).append($toaster);
		}
	}]);
