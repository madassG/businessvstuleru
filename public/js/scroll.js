document.getElementById("nav_who").onclick = function() {
    document.getElementById("info").scrollIntoView({ behavior: 'smooth' });
}

document.getElementById("nav_work").onclick = function () {
    document.getElementById("work").scrollIntoView({ behavior: 'smooth' });
}

document.getElementById("nav_know").onclick = function () {
    document.getElementById("know").scrollIntoView({ behavior: 'smooth' });
}


window.addEventListener('scroll', function() {
    let flag = 0;
    let i = 0;
    icons = shuffle(Array.from(document.getElementsByClassName("know_icon")));
    if ((window.scrollY > 1300) && (flag == 0)){
        let i = 0;
        setTimeout(function appear() {
            icons[i].classList.add("appearing")
            i++;
            setTimeout(appear, 80);
        }, 80);
        flag = 1;
    }
    
    if (window.scrollY > 500){
        document.getElementById("up").style.opacity = 0.3;
        document.getElementById("up").onclick = function () {
            document.getElementsByClassName("header")[0].scrollIntoView({ behavior: 'smooth' });
        }
    } else{
        document.getElementById("up").style.opacity = 0;
    }
});

function shuffle(arr){
	var j, temp;
	for(var i = arr.length - 1; i > 0; i--){
		j = Math.floor(Math.random()*(i + 1));
		temp = arr[j];
		arr[j] = arr[i];
		arr[i] = temp;
	}
	return arr;
}