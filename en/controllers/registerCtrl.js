
'use strict';
var controllerModule = angular.module('ffm.ctrls.register', []);

function validate_email(email) {
  var reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  var address = email;
  if (reg.test(address) == false) {
    return false;
  }
}

controllerModule.controller('RegisterCtrl', function ($scope, $firebaseAuth, $mdDialog, $http, $firebaseStorage) {

  // Init user object
  $scope.user = {}



  $scope.save = function () {
    $scope.loading = true;

    // Firebase save
    $firebaseAuth().$createUserWithEmailAndPassword($scope.user.email, $scope.user.password)
      .then(function (firebaseUser) {
        $scope.user.firebaseId = firebaseUser.uid;

        // https://favforme-api.herokuapp.com will be replaced by gulp
        var url = 'https://favforme-api.herokuapp.com/api/open/npo';
        $scope.user.en = true; // for sending email in english
        
        $http.post(url, $scope.user).then(function () {
          $scope.loading = false;
          $scope.showAlert('Done!', 'We are going to analise your profile and will contact soon.', () => {
            window.location = '/';
          });
        }, function (err) {
          $scope.loading = false;
          $scope.showAlert('Oops!', 'Could not save profile. Please try again.');
        });

      }).catch(function (err) {
        $scope.loading = false;
        var errorMap = authErrorMap[err.code];
        $scope.showAlert('Oops!', errorMap ? errorMap : 'Could not save profile. Please try again.');
      });
  }

  $scope.showAlert = function (title, text, functionOk) {
    $mdDialog.show(
      $mdDialog.alert()
        .clickOutsideToClose(true)
        .title(title)
        .textContent(text)
        .ariaLabel('Alert')
        .ok('OK')
    ).then(functionOk);
  };


  $scope.upload = function (file, invalidFiles) {
    $scope.loadingImage = true;
    var uploadTask = firebase.storage().ref().child('NPOs/' + guid()).put(file);

    uploadTask.on('state_changed', function (snapshot) {
      // Progress...
    }, function (error) {
      $scope.loadingImage = false;
      $scope.$apply();
      $scope.showAlert('Oops!', 'No he podido guardar la foto. Favor intentar de nuevo. Codigo: ' + error.code);
    }, function () {
      $scope.loadingImage = false;
      $scope.user.profilePictureUrl = uploadTask.snapshot.downloadURL;
      $scope.$apply();
    });
  }

});

var authErrorMap = {
  'auth/email-already-in-use': 'Este e-mail ya se encuentra en uso, por favor intenta con uno diferente',
  'auth/invalid-email': 'El e-mail ingresado no es válido, por favor verifica el formato o intenta con uno diferente',
  'auth/operation-not-allowed': 'El e-mail ingresado se encuentra inhabilitado, contactátate con el administrador',
  'auth/weak-password': 'El password ingresado es demasiado débil, por favor ingresa al menos 6 caracteres compuesto por letras y números',
  'auth/credential-already-in-use': 'El e-mail ingresado ya se encuentra registrado, comprueba si no te has registrado previamente con Google o Facebook con este misma cuenta',
  'auth/account-exists-with-different-credential': 'El e-mail ingresado ya se encuentra registrado, comprueba si no te has registrado previamente con Google o Facebook con este misma cuenta',
  'auth/timeout': 'El tiempo de espera se ha agotado, por favor intenta nuevamente.',
  'auth/user-not-found': 'El e-mail ingresado no existe.',
  'auth/invalid-credential': 'Las credenciales ingresadas no son válidas o han expirado',
  'auth/user-disabled': 'La cuenta ingresada ha sido inhabilitada',
  'auth/wrong-password': 'El e-mail o contraseña es incorrecto',
};

function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}