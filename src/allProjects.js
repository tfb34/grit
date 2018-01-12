/*
 * Summary: Creates a single 'projects' object to organize
 *         and keep track of 'Project' instances
 * 
*/


/*
module.exports = (function () {
    var foo = 'la' + 'la';  // some computed value
    return {
        foo : foo
    }
}());
*/

module.exports = (
	function(){
		let list = [];
		function add(x){
			list.push(x);
		}
		return{
			list,
			add
		}

	}()
);
