var arrayTasks = {

	concat: function (arr1, arr2) {
		return arr1.concat(arr2);
	},

	insertAt: function (arr, itemToAdd, index) {
		arr.splice(index, 0, itemToAdd);
		return arr;
	},

	square: function (arr) {
		    ret= [];

		    for (var i = 0, len = arr.length; i < len; i++) {
		        ret.push(arr[i] * arr[i]);
		    }

		    return ret;     
		
	},

	sum: function (arr) {
		return arr.reduce(function (a, b) {
		    return a + b;
		});

		
	},

	findDuplicates: function (arr) {
		  var i, value;
		  var all = {};
		  var duplicates = [];

		  for(var i=0; i<arr.length; i++ ) {
		    value = arr[i];
		    if( all[value] ) {
		      duplicates.push( value );
		      all[value] = false;
		    } else if( typeof all[value] == "undefined" ) {
		      all[value] = true;
		    }
		  }

		  return duplicates;
		// [1, 2, 3, 4, 4, 5, 5, 5]
	},

	removeAndClone: function (arr, valueToRemove) {
		for(var i = arr.length - 1; i >= 0; i--) {
		    if(arr[i] === valueToRemove) {
		       arr.splice(i, 1);
		    }
		}
		return arr;
		
	},

	findIndexesOf: function (arr, itemToFind) {
		var lowest = Math.min.apply(Math, arr);     
		var count = 0;                               
		var indexes = [];             

		for(var i=0; i<arr.length;i++) 
		{
		    if(arr[i] == lowest) 
		    {
		       indexes.push(i); 
		       count++;         
		    }
		}          
		return indexes;       
		
	},

	sumOfAllEvenNumbersSquared: function (arr) {
		return this.sum(this.square(arr.filter(function(item){
			return item % 2 === 0;
		})))
		
	}

}

module.exports = arrayTasks
