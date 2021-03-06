'use strict';

/**
* Generate the World map
*/
function renderWorldMap () {
	document.body.innerHTML += WORLD_MAP;
}

/**
* Display the clicked country
*/
function displayCountry(){
	var span = document.createElement('span');
	document.querySelector('body').appendChild(span);
}

/**
* Change color of hovered country and clicked country
* Add the attribute "fill" on path when click or hover
*/
function colorMap() {
	var allPath = document.querySelectorAll("path");
	allPath.forEach(function(path){
		path.onmouseenter = function(){
			if(path.getAttribute('fill') !== 'red'){
				path.setAttribute('fill', 'blue');
			}
		};
		path.onmouseleave = function(){
			if(path.getAttribute('fill') !== 'red'){
				path.setAttribute('fill', '');
			}
		};
		path.onclick = function(){
			if(path.getAttribute('fill') !== 'red'){
				var paths = document.querySelectorAll('path');
				for(var i=0; i<paths.length; i++){
					paths[i].setAttribute('fill', '');
				}
				path.setAttribute('fill', 'red');
				document.querySelector('span').innerHTML = path.getAttribute('id').toUpperCase();
			}
		};
	});
};

/**
* Test
*/
renderWorldMap();
displayCountry()
colorMap();