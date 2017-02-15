/**
 * Created by muhammet.dere on 22.09.2016.
 */


alnusApp.directive('parite', ['$http', function($http){

    return{
        restrict: 'E',
        scope: {},
        replace: true,
        link: function(scope){

            scope.tab = 'parite';



            scope.getData = function(){
                // $http.get(Routing.generate('get_parites', { type: scope.tab}))
                //     .then(function(result){
                //         scope.pariteler = result.data;
                //     });
            };

            scope.addtype = function (type) {
                scope.tab = type;
                scope.getData();
            };

            scope.getData();

            setInterval(function(){
                scope.getData();
            },5000);

        },
        templateUrl: 'app/directives/parite/parite.html'
    }
}]);
