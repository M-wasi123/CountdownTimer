let user = document.getElementById('userdate')
function subm() {
    var userDate = user.nodeValue;
    let targetDate = new Date(userDate).getTime();
console.log(targetDate);
}


