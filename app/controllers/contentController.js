/**
 * Created by muhammet.dere on 26.09.2016.
 */
siteApp.controller('contentController', ['$scope', '$location', '$routeParams', '$http', function($scope, $location, $routeParams, $http){
    $scope.url = $routeParams.contentUrl ? $routeParams.contentUrl : $location.path().substring(1);

    $http.get('/helper/getDummyContent.php?url=' + $scope.url)
        .then(function(response){
            console.log("response", response);
            $scope.content = response.data;
        });
}]);
