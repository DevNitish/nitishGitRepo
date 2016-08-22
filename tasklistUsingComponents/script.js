//refered from https://jsfiddle.net/toddmotto/xqauz9aa/?utm_source=website&utm_medium=embed&utm_campaign=xqauz9aa 
var app=angular.module('Todo', ['ngMaterial','ngMessages',"xeditable"])
  .controller('mainCtrl', function ($scope) {
    $scope.nitish="nitish";
    $scope.mytasks = [
            {
                    "text" : "one",
                    "checked" : false,
                    "creationDate" : "2016-06-25T08:59:18.211Z",
                    "dueDate" : "2016-06-25T08:59:18.211Z",
                    "creatorName" : "neo Kumar",
                    "createdBy" : "574bbfb04d973bf068e6234e",
                    "_id" : "576e47e8b12ded753a5e8e27",
                    "assignedMember" : [
                            "574bbfb04d973bf068e6234e",
                            "574ec71ce2f9b92715246456",
                            "574ec850e2f9b9271524645b"
                    ]
            },
            {
                    "text" : "two",
                    "checked" : true,
                    "creationDate" : "2016-06-25T08:59:21.659Z",
                    "dueDate" : "2016-06-25T08:59:21.659Z",
                    "creatorName" : "neo Kumar",
                    "createdBy" : "574bbfb04d973bf068e6234e",
                    "_id" : "576e47ebb12ded753a5e8e29",
                    "assignedMember" : [
                            "574ec71ce2f9b92715246456",
                            "574ec850e2f9b9271524645b"
                    ]
            },
            {
                    "text" : "three",
                    "checked" : false,
                    "creationDate" : "2016-06-25T08:59:24.845Z",
                    "dueDate" : "2016-06-25T08:59:24.845Z",
                    "creatorName" : "neo Kumar",
                    "createdBy" : "574bbfb04d973bf068e6234e",
                    "_id" : "576e47eeb12ded753a5e8e2b",
                    "assignedMember" : [
                            "574bbfb04d973bf068e6234e"
                    ]
            }

    ];
  })

        .component('mycard', {
        bindings: {
          task: '<'
        },
        controller: mycardCtrl,
        templateUrl:'doAllTask.html'

    });

//end of angular

 app.run(function(editableOptions,editableThemes) {  editableOptions.theme = 'bs3';  
    
      editableThemes['bs3'].submitTpl='<button class="btn btn-danger"  type="submit" ng-click="updateTodoItem(listItem,todo)">Save</button><button class="btn btn-danger btn-circle" ng-click="addMemberToChecklist(listItem)">...</button>'; 
    // bootstrap3 theme. Can be also 'bs2', 'default'
    });

function mycardCtrl ($scope) {

   $scope.myDate = new Date(this.task.dueDate);
  $scope.minDate = new Date(
      $scope.myDate.getFullYear(),
      $scope.myDate.getMonth() - 2,
      $scope.myDate.getDate());
  $scope.maxDate = new Date(
      $scope.myDate.getFullYear(),
      $scope.myDate.getMonth() + 2,
      $scope.myDate.getDate());

          function increment() {
            this.count++;
          }
          function decrement() {
            this.count--;
          }
          this.increment = increment;
          this.decrement = decrement;
        }
//end of task










