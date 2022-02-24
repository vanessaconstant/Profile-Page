

function editProfile(element) {

    var profileName = document.querySelector(element);
    profileName.innerText = "John Doe";


}

function remove(element, rCount, cCount) {
    var request = document.querySelector(element);
    request.remove();
    var reqCount = document.querySelector(rCount);
    reqCount.innerText--;
    var conCount = document.querySelector(cCount);
    conCount.innerText++;

}