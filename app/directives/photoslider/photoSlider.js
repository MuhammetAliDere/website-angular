/**
 * Created by muhammet.dere on 21.09.2016.
 */
siteApp.directive('photoSlider', [function(){

    return {
        restrict: 'E',
        replace: false,
        scope: {},
        link: function(scope, elem, attr){
            scope.slides = [
                {
                    image: 'assets/slider/forex_desktop.jpg',
                    mobilImage: 'assets/slider/forex_mobile.jpg',
                    mainTitle: 'Consectetur Adipisicing',
                    contentHeader: 'Lorem Ipsum',
                    content: 'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse',
                    description: '',
                    buttonText: 'laboris nisi ut aliquip',
                    detailButtonLink: '#'
                },
                {
                    image: 'assets/slider/hisse_desktop.jpg',
                    mobilImage: 'assets/slider/hisse_mobile.jpg',
                    mainTitle: 'Commodo Consequat',
                    contentHeader: 'Lorem Ipsum',
                    content: 'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse',
                    description: '',
                    buttonText: 'laboris nisi ut aliquip',
                    detailButtonLink: '#'
                },
                {
                    image: 'assets/slider/petrol_desktop.jpg',
                    mobilImage: 'assets/slider/petrol_mobile.jpg',
                    mainTitle: 'Commodo Consequat',
                    contentHeader: 'Lorem Ipsum',
                    content: 'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse',
                    description: '',
                    buttonText: 'laboris nisi ut aliquip',
                    detailButtonLink: '#'
                },

                {
                    image: 'assets/slider/worldtrading_desktop.jpg',
                    mobilImage: 'assets/slider/worldtrading_mobile.jpg',
                    mainTitle: 'Commodo Consequat',
                    contentHeader: 'Lorem Ipsum',
                    content: 'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse',
                    description: '',
                    buttonText: 'laboris nisi ut aliquip',
                    detailButtonLink: '#'
                }

            ];

            scope.direction = 'left';
            scope.currentIndex = 0;
            scope.autoSlide = true;
            scope.timer;

            scope.setCurrentSlideIndex = function (index) {
                scope.direction = (index > scope.currentIndex) ? 'left' : 'right';
                scope.currentIndex = index;
                clearInterval(scope.timer);
                scope.timer = setInterval(scope.prevSlide, 8000);
            };

            scope.isCurrentSlideIndex = function (index) {
                return scope.currentIndex === index;
            };

            scope.prevSlide = function () {
                scope.direction = 'left';
                scope.currentIndex = (scope.currentIndex < scope.slides.length - 1) ? ++scope.currentIndex : 0;
                clearInterval(scope.timer);
                scope.timer = setInterval(scope.prevSlide, 8000);
            };

            scope.nextSlide = function () {
                scope.direction = 'right';
                scope.currentIndex = (scope.currentIndex > 0) ? --scope.currentIndex : scope.slides.length - 1;
                clearInterval(scope.timer);
                scope.timer = setInterval(scope.prevSlide, 8000);
            };

            scope.timer = setInterval(scope.prevSlide, 8000);

        },
        templateUrl: 'app/directives/photoslider/photoslider.html'
    };

}]);