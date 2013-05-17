angular.module("time_component",[]).directive("axTime", function (){
	var linkFn = function (scope, linkElement,attrs,ngModel){
			var _attributes = {}
			
			var ats = attrs.$attr
			var min = parseInt(attrs["min"]) || 0;
			var max = parseInt(attrs["max"]) || 23;
			var step = parseInt(attrs["step"]) || 60;
			
			var ALLOWED_STEPS = [1,2,3,4,5,6,10,12,15,20,30,60]; 

			var foundStep = ALLOWED_STEPS.filter(function(n){
				return n === step;
			});
			
			
			if( foundStep.length > 0){
				foundStep = foundStep[0];
			}else {
				throw new Error("The step values of " + step + " is not allowed. Step value must be a multiple of 60");
			}

			for (var key in ats){
			  _attributes [ats[key]] = attrs[ats[key]];
			}
			_attributes["ng-model"] = attrs["ngModel"];
			var select = "<select " +
						"ng-options='time as time for time in times'" +
						" >" +
						"</select>";
			var el = $(select).attr(_attributes);			
			linkElement.append(el);

			function computeSteps(step){
				var out = [];
				var x = "";
				for(var i=0; i < 60 ; i+= step){
					x = i;
					if(x < 10) {
						x = "0" + i;
					}
					out.push(x.toString());
				}
				return out;
			}

			function computeValues(steps){
				var times = [];
				for (var i=min; i < max + 1 ; i++){
				  	if (i < 10){
				  		steps.forEach(function (x){
				  			times.push("0"+ i + ":" + x)
				  		});
				   		
				   	}else{
				   		//times.push(i + ":00")
				  		steps.forEach(function (x){
				  			times.push(i + ":" + x)
				  		});
				  	}
				}

				return times;
			}

			function appendValues(step){
				var steps = computeSteps(step);
				var times = computeValues(steps);
				times.forEach(function (time){
					el.append("<option>"+ time+"</option>");
				});
			}

			appendValues(foundStep);

			scope.$watch(attrs.ngModel, function (value){
				if(!angular.isDate(value)){
					
				}
				el.val(value);
			})

			el.bind("change", function (){
				var newValue = $(this).val();
				scope.$apply(function () {
					ngModel.$setViewValue(newValue);
		        });
			});
	}

	return  {
		link : linkFn,
		require: '?ngModel',
		//templateUrl: 'js/app/components/partials/time_widget.html',
		restrict : "E",
	}
});
