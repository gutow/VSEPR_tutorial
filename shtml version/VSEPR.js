function hidediv(divID){
    let div= document.getElementById(divID);
    let divclass = div.getAttribute('class');
    let update = divclass.replace('visible','hidden');
    div.setAttribute("class",update);
}
function showdiv(divID){
    let div= document.getElementById(divID);
    let divclass = div.getAttribute('class');
    let update = divclass.replace('hidden','visible');
    div.setAttribute("class",update);
}
function toggle_spin(){
    let spin_checkbox = document.getElementById('spin');
    // Assumes the central atom is #1
    if (spin_checkbox.checked) {
        Jmol.script(VSEPR_Jmol, "spin on");
    } else {
        Jmol.script(VSEPR_Jmol, "spin off");
    }
}
function toggle_angles(){
    let angle_checkbox = document.getElementById('angles');
    // Assumes the central atom is #1
    if (angle_checkbox.checked) {
        Jmol.script(VSEPR_Jmol, "measure allconnected (*)(*)(*)");
    } else {
        Jmol.script(VSEPR_Jmol, "measure off");
    }
}
let lone_pairs=""; //Stores which loan pairs for current molecule.

function toggle_lone_pairs(){
    let lone_pair_checkbox = document.getElementById('show_loan_pairs');
    // Assumes the central atom is #1
    if (lone_pair_checkbox.checked) {
        Jmol.script(VSEPR_Jmol, "select atomno=1; lcaocartoon "+lone_pairs);
    } else {
        Jmol.script(VSEPR_Jmol, "select atomno=1; lcaocartoon off");
    }
}
function toggle_spacefill(){
    let spacefill_checkbox = document.getElementById('spacefill');
    if (spacefill_checkbox.checked) {
        Jmol.script(VSEPR_Jmol, "select all; spacefill 100%");
    } else {
        Jmol.script(VSEPR_Jmol, "select all; spacefill 25%");
    }
}

function load_molecule(load_script, loan_pairs) {
    Jmol.script(VSEPR_Jmol, load_script);
    lone_pairs = loan_pairs;
    toggle_spin();
    toggle_angles();
    toggle_lone_pairs();
    toggle_spacefill();
}