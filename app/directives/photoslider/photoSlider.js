/**
 * Created by muhammet.dere on 21.09.2016.
 */
alnusApp.directive('photoSlider', [function(){

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
                    detailButtonLink: 'https://www.alnusforex.com'
                },
                {
                    image: 'assets/slider/hisse_desktop.jpg',
                    mobilImage: 'assets/slider/hisse_mobile.jpg',
                    mainTitle: 'Alnus Yatırım',
                    contentHeader: 'Pay Senetleri ',
                    content: 'Alnus Yatırım uzman kadrosu ile Pay Senedi işlemlerinizde artık bir adım öndesiniz. Teknolojik alt yapı ve hızlı işlem platformu ile yatırımı Uzmanı ile yapın!',
                    description: '',
                    buttonText: 'Ücretsiz Yatırım Hesabı Başvurusu',
                    detailButtonLink: '/pay-piyasasi'
                },
                {
                    image: 'assets/slider/petrol_desktop.jpg',
                    mobilImage: 'assets/slider/petrol_mobile.jpg',
                    mainTitle: 'Alnus Yatırım',
                    contentHeader: 'CFD İşlemleri',
                    content: 'Alnus Yatırım ile CFD işlemleri parmağınızın ucunda. İnternet olan her yerden alım satım işlemi yapabilir uzman analiz kadrosundan anlık analizleri alabilirsiniz.',
                    description: '',
                    buttonText: 'Ücretsiz Yatırım Hesabı Başvurusu',
                    detailButtonLink: '/cfd'
                },

                {
                    image: 'assets/slider/worldtrading_desktop.jpg',
                    mobilImage: 'assets/slider/worldtrading_mobile.jpg',
                    mainTitle: 'Alnus Yatırım',
                    contentHeader: 'Dünya Endeksleri',
                    content: 'Dünya Endekslerine tek platformdan ulaşmak 5 gün 24 saat işlem yapmak istermisiniz? Alnus Yatırım’ın işlem platformu ile güvenli ve hızlı yatırım yapın!',
                    description: '',
                    buttonText: 'Ücretsiz Yatırım Hesabı Başvurusu',
                    detailButtonLink: '/yurtdisi-pay'
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