angular.module("myApp", [])
    .controller("HelloController", function($scope) {
        $scope.title = "World, AngularJS";
        
        $scope.myData = {};
        //for Interpolation Directive or ng-bind Directive
        $scope.myData.text = "Text";
        $scope.myData.textf = function() { return "A text from a function"; };
        //ng-show + ng-hide Directives
        $scope.myData.setElementVisibility = true;
        //ng-switch Directive
        $scope.myData.switch = 3;
        /*The main difference between ng-if and ng-show + ng-hide is that ng-if removes the HTML element completely from the DOM, 
         * whereas the ng-show + ng-hide just applies the CSS property display: none; to the elements.*/
        //ng-include Directive
        $scope.myData.setIfIncludeFile = true;
        //ng-repeat Directive
        $scope.myData.items = [ {text : "one"}, {text : "two"}, {text : "three"} ];
        $scope.myData.getItems = function() { return this.items; };
        $scope.myData.myObject = { var1 : "val1", var2 : "val3", var3 : "val3"};
        //Filtering
        $scope.itemFilter = function(item) {
            if(item.text == "two") 
            	return false;
            else
              return true;
        },
        //Formatting Filters
        $scope.myData.theDate = function(){ d = new Date(); return d.getDate();},
        $scope.myData.theNumber = 256,
        $scope.myData.theText = "abcdefg",        
        //Array Filters
        $scope.filterArray = $scope.itemFilter,        
        $scope.sortField = "text",
        $scope.reverse   = true
        
        
        
    })
    .filter('myFilter', function() {
    	return function(stringValue) {
    		return stringValue.substring(0,3);
        };
    })
    .filter('myFilter2', function() {

        return function(stringValue, startIndex, endIndex) {
            return stringValue.substring(parseInt(startIndex), parseInt(endIndex));
        };
    });
