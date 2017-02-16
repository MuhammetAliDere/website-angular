/**
 * Created by muhammet.dere on 22.09.2016.
 */
siteApp.directive('navbar', ['$window', function($window){

    return{
        restrict: 'E',
        replace: true,
        link :function(scope){

            if(!scope.disableSticking){
                scope.disableSticking = true;
            }
            if(!scope.showSmallLogo){
                scope.showSmallLogo = false;
            }

            $('ul.nav li.dropdown').hover(function() {

                if(document.body.offsetWidth > 991){
                    $(this).find('.dropdown-menu.multi-level').stop(true, true).delay(100).fadeIn(250);
                }}, function() {
                if(document.body.offsetWidth > 991) {
                    $(this).find('.dropdown-menu.multi-level').stop(true, true).delay(100).fadeOut(250);
                }
            });

            angular.element($window).bind("scroll", function() {
                if (this.pageYOffset >= 130) {
                    scope.disableSticking = false;
                    scope.showSmallLogo = true;
                    // console.log('scope.disableSticking', scope.disableSticking);
                    // console.log('content');
                } else {
                    scope.disableSticking = true;
                    scope.showSmallLogo = false;
                    // console.log('scope.disableSticking', scope.disableSticking);
                    // console.log('header.');
                }
                scope.$apply();
            });

            scope.menuClose = function(){
                $('.navbar-toggle').click();
            };
        },
        templateUrl: 'app/directives/navbar/navbar.html.twig'
    };


}]);
