activate = 0

function myFunctionMenu() {

    //on
    if(activate == 0) {
        document.getElementById('nav_deactivate').setAttribute('id', 'nav_activate');
        document.getElementById('bar1_deactivate').setAttribute('id', 'bar1_activate');
        document.getElementById('bar2_deactivate').setAttribute('id', 'bar2_activate');
        document.getElementById('bar3_deactivate').setAttribute('id', 'bar3_activate');
        document.getElementById('nav_content').style.visibility = "visible";
        activate = 1;
    } else {
        document.getElementById('nav_activate').setAttribute('id', 'nav_deactivate');
        document.getElementById('bar1_activate').setAttribute('id', 'bar1_deactivate');
        document.getElementById('bar2_activate').setAttribute('id', 'bar2_deactivate');
        document.getElementById('bar3_activate').setAttribute('id', 'bar3_deactivate');
        document.getElementById('nav_content').style.visibility = "hidden";
        activate = 0;
    }

}