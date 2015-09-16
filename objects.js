//1. Using dot and bracket notation modify the existing object values to replace the information with your own

var me = {
	'name': 'Jake Overall',
	'age': 29,
	'hair color': 'brown'
};

me.name = 'Brandon Ashcraft';
me.age = 19;
me["hair color"] = 'yellow';  //must be explained!!!
console.log(me);


//2. Iterate over the object to console.log the propery or key names. 


// this is a for in loop - for looping objects.
// logs keys or properties
for (var key in me){
	console.log(key);
}

// logs values
for (var key in me){
	console.log(me[key]);
