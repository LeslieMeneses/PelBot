angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $http) {
  $http.get("http://echo.jsontest.com/firstname/Kath/lastname/Men/state/Medellin", {params: {"key1": "value", "key2": "value"}})
  .success(function(data){
    $scope.firstname = data.firstname;
    $scope.lastname = data.lastname;
  })
  .error(function(data){
    console.log("somthing went wrong");
  })
})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
