/**
 * Created by muhammet.dere on 21.09.2016.
 */
alnusApp.controller('homeController', ['$scope', function($scope){

    $scope.slides = [
        {image: '//placehold.it/800x600', description: 'Image 00'},
        {image: '//placehold.it/800x600', description: 'Image 01'},
        {image: '//placehold.it/800x600', description: 'Image 02'},
        {image: '//placehold.it/800x600', description: 'Image 03'},
        {image: '//placehold.it/800x600', description: 'Image 04'}
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

}]);