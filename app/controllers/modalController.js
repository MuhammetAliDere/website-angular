/**
 * Created by muhammet.dere on 29.09.2016.
 */
siteApp.controller('ModalDemoCtrl', ['$scope', '$uibModal', function ($scope, $uibModal) {

    var $ctrl = this;
    $ctrl.items = ['item1', 'item2', 'item3'];

    $ctrl.animationsEnabled = true;

    $ctrl.open = function (size) {
        var modalInstance = $uibModal.open({
            animation: $ctrl.animationsEnabled,
            ariaLabelledBy: 'modal-title',
            ariaDescribedBy: 'modal-body',
            templateUrl: 'assets/pages/modalContent.html?v='+Math.random(),
            controller: 'ModalInstanceCtrl',
            controllerAs: '$ctrl',
            size: size,
            resolve: {
                items: function () {
                    return $ctrl.items;
                }
            }
        });

        modalInstance.result.then(function (selectedItem) {
            $ctrl.selected = selectedItem;
        }, function () {
            //$log.info('Modal dismissed at: ' + new Date());
        });
    };

    $ctrl.openComponentModal = function () {
        var modalInstance = $uibModal.open({
            animation: $ctrl.animationsEnabled,
            component: 'modalComponent',
            resolve: {
                items: function () {
                    return $ctrl.items;
                }
            }
        });

        modalInstance.result.then(function (selectedItem) {
            $ctrl.selected = selectedItem;
        }, function () {
            //$log.info('modal-component dismissed at: ' + new Date());
        });
    };

    $ctrl.toggleAnimation = function () {
        $ctrl.animationsEnabled = !$ctrl.animationsEnabled;
    };



    $ctrl.selected = {
        item: $ctrl.items[0]
    };

    $ctrl.ok = function () {
        $uibModalInstance.close($ctrl.selected.item);
    };

    $ctrl.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
}]);

// Please note that $uibModalInstance represents a modal window (instance) dependency.
// It is not the same as the $uibModal service used above.

siteApp.controller('ModalInstanceCtrl', ['$uibModalInstance', 'items', '$scope', '$http', function ($uibModalInstance, items, $scope, $http) {
    $scope.formData = {};


    // $scope.demoTest = function(){
    //     $scope.demoResult = true;
    //     $scope.demoSuccess = true;
    //     $scope.demoResultContent = "Kaydınız Başarıyla oluşturuldu.";
    // };

    $scope.processForm = function() {

        var utms = "";
        post_data = "isim=" + $scope.formData.firstname + " " + $scope.formData.lastname + "&email=" + $scope.formData.email + "&telefon=" + $scope.formData.phone + "&ipadresi=1&mesaj=" + $scope.formData.message + "&utms=" + utms;

        $http({
            method  : 'POST',
            url     : Routing.generate('create_demo'),
            data    : post_data,  // pass in data as strings
            headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
        })
            .success(function(data) {
                console.log("data:", data);

                if (data) {
                    $scope.result = 1;
                    $scope.demoSuccess = true;
                    $scope.demoResult = true;
                    $scope.demoResultContent = "Kaydınız Başarıyla oluşturuldu.";
                    //$scope.demoResultContent = "Kayıt Başarıyla oluşturuldu.";
                    //$scope.addAlert('Kayıt Başarıyla oluşturuldu.', 'success');
                    // // if not successful, bind errors to error variables
                    // $scope.errorName = data.errors.name;
                    // $scope.errorSuperhero = data.errors.superheroAlias;
                } else {
                    $scope.demoSuccess = false;
                    $scope.demoResult = true;
                    $scope.demoResultContent = "Kayıt Oluşturulamadı. Lütfen tekrar deneyiniz.";
                    //$scope.addAlert('Kayıt Oluşturulamadı');
                    //$scope.addAlert('Kayıt Oluşturulamadı');
                    // // if successful, bind success message to message
                    // $scope.message = data.message;
                }
            });
    };

    var $ctrl = this;
    $ctrl.items = items;
    $ctrl.selected = {
        item: $ctrl.items[0]
    };

    $ctrl.ok = function () {
        $uibModalInstance.close($ctrl.selected.item);
    };

    $ctrl.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
}]);
