function skillsMember() {
  return {
    restrict: "E",
    templateUrl: "templates/skills-member.html",
    scope: {
      member: "=",
    },
    controller: function ($scope) {
      $scope.member = $scope.member;
    },
  };
}
