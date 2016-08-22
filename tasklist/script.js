// Code goes here

// Code goes here

angular.module('myApp', []);

angular.module('myApp').directive('taskList', function () {
    return {
      restrict: 'A',
      scope: {
        task: '='
      },
      replace: true,
      templateUrl: 'task.html',
      link: function (scope, elem, attrs) {
        scope.hi = function () {
          alert('Why hello there, I\'m ' + scope.task.taskName + '.');
        };
        elem.find('img').on('click', function () {
          window.open(scope.task.image);
        });
      }
    };
});


angular.module('myApp').controller('myCtrl', function ($scope) {
  $scope.mytasks = [
    {
      taskName: 'Task 1',
      taskDetails: 'Do task one',
      status:true,
      image: 'https://latimesherocomplex.files.wordpress.com/2030/04/hughjackman4.jpg'
    },
    {
      taskName: 'task two',
      taskDetails: 'do task two',
      status:false,
      image: 'https://latimesherocomplex.files.wordpress.com/2030/04/hughjackman4.jpg'
    },
    {
      taskName: 'task three',
      taskDetails: 'do task three',
      status:true,
      image: 'https://pmcdeadline2.files.wordpress.com/2013/01/patrickheadshot.rt__130116211928.jpg'
    }
  ];
});
