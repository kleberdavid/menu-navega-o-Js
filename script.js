
function openToggle() {
    
    let menuarea = document.getElementById('menu-area');

    if(menuarea.classList.contains('menu-opened') == true){
        menuarea.classList.remove('menu-opened');
    }else{
        menuarea.classList.add('menu-opened');
    }
    
}