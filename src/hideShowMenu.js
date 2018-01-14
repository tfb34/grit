/*DOM function
 *Summary: toggles menu , only for mobile responsive
*/
export default function hideShowMenu() {
	console.log("hideShowMenu called");
    var menu = document.getElementById("menu");
    if (menu.style.display === "none") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
}