/**
 * Created by muhammet.dere on 22.09.2016.
 */
siteApp.controller('MainController', ['$scope', '$rootScope', function($scope, $rootScope){
    $scope.slides = [
        {image: '//placehold.it/800x360', description: 'Image 00'},
        {image: '//placehold.it/800x360', description: 'Image 01'},
        {image: '//placehold.it/800x360', description: 'Image 02'},
        {image: '//placehold.it/800x360', description: 'Image 03'},
        {image: '//placehold.it/800x360', description: 'Image 04'}
    ];

    $scope.direction = 'left';
    $scope.currentIndex = 0;

    $scope.setCurrentSlideIndex = function (index) {
        $scope.direction = (index > $scope.currentIndex) ? 'left' : 'right';
        $scope.currentIndex = index;
    };

    $scope.isCurrentSlideIndex = function (index) {
        return $scope.currentIndex === index;
    };

    $scope.prevSlide = function () {
        $scope.direction = 'left';
        $scope.currentIndex = ($scope.currentIndex < $scope.slides.length - 1) ? ++$scope.currentIndex : 0;
    };

    $scope.nextSlide = function () {
        $scope.direction = 'right';
        $scope.currentIndex = ($scope.currentIndex > 0) ? --$scope.currentIndex : $scope.slides.length - 1;
    };

    $scope.alerts = [
        /*
         { type: 'danger', msg: 'Oh snap! Change a few things up and try submitting again.' },
         { type: 'success', msg: 'Well done! You successfully read this important alert message.' }
         */
    ];

    $rootScope.addAlert = function(msg, type) {

        type = type || 'danger';
        msg = msg || '';

        $scope.alerts.push({ type: type, msg: msg});

        setTimeout(function(){
            $scope.alerts = [];
        }, 5000);
    };

    $rootScope.closeAlert = function(index) {
        $scope.alerts.splice(index, 1);
    };
}]);