// MenuToggle

let toggle = document.querySelector('.toggle');
let navigation = document.querySelector('.navigation');
let main = document.querySelector('.main');

toggle.onclick = function() {
    navigation.classList.toggle('active');
    main.classList.toggle('active')  
}








// add hovered class in selected list item 

let list = document.querySelector('.navigation li');
function activeLink() {
    list.forEach((item) =>
    item.classList.remove('hovered'));
    this.classListList.add('hovered');
}

list.forEach((item) =>
item.addEventListener('mouseover', activeLink));