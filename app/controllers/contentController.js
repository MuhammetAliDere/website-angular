/**
 * Created by muhammet.dere on 26.09.2016.
 */
siteApp.controller('contentController', ['$scope', '$location', '$routeParams', '$http', function($scope, $location, $routeParams, $http){
    //console.log("contentController", $routeParams.contentUrl);


    $scope.url = $routeParams.contentUrl ? $routeParams.contentUrl : $location.path().substring(1);

    // url deki '/' lar '.' ile yer değiştiriliyor.
    console.log("url", $scope.url);


    $http.get('/helper/getDummyContent.php?url=' + $scope.url)
        .then(function(response){
            console.log("response", response);
            $scope.content = response.data;
        });
}]);
