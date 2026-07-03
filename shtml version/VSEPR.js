function hidediv(divID){
    var div= document.getElementById(divID);
    divclass = div.getAttribute('class');
    update = divclass.replace('visible','hidden');
    div.setAttribute("class",update);
}
function showdiv(divID){
    var div= document.getElementById(divID);
    divclass = div.getAttribute('class');
    update = divclass.replace('hidden','visible');
    div.setAttribute("class",update);
}
let loan_pairs=""; //Stores which loan pairs for current molecule.

function toggle_lone_pairs(){
    let lone_pair_checkbox = document.getElementById('show_loan_pairs');
    // Assumes the central atom is #1
    if (lone_pair_checkbox.checked) {
        Jmol.script(VSEPR_Jmol, "select atomno=1; lcaocartoon "+loan_pairs);
    } else {
        Jmol.script(VSEPR_Jmol, "select atomno=1; lcaocartoon off");
    }
}