// --------------------------------------------------------------------
// Connection Panel et Toggle Panel Mi-8
// --------------------------------------------------------------------

function menu_connection(KaTZPit_data){
		
	// Affichage de l'Ip et du Port
	document.getElementById('IP_Host').innerHTML = serverws.ip
	document.getElementById('IP_Port').innerHTML = serverws.port
	
}

function menu_connection_led(flag){

	if (flag == 0) {$("#Led_Connect").attr("src","images/emergency/z_Led-Rouge.png")}
	if (flag == 1) {$("#Led_Connect").attr("src","images/emergency/z_Led-Orange.gif")}
	if (flag == 2) {$("#Led_Connect").attr("src","images/emergency/z_Led-Vert.png")}
	
}

function DCS_Focus_check(KaTZPit_data){
	if (KaTZPit_data["DCS_Focus"] ==2) {$("#Led_DCS").fadeIn()} else {$("#Led_DCS").fadeOut()}
}


// Fonction d'affichage des sous Panels, appelée depuis la barre de Launcher
function menu_Toggle(panel){
	
	// Toggle de la valeur du panel à changer 0>1 et 1>0
	Panel_On[panel] = (Panel_On[panel]+1) % 2
	console.log(panel," = ",Panel_On[panel])
	
	// Affichage des différents panneaux en fonction de leur valeur dans la liste "Panel_On"	
	if (Panel_On["APU"] == 0) {document.getElementById("Panel_APU").style.display = "none"}
	else {document.getElementById("Panel_APU").style.display = "block"}

	if (Panel_On["Start"] == 0) {document.getElementById("Panel_Start").style.display = "none"}
	else {document.getElementById("Panel_Start").style.display = "block"}
	
	if (Panel_On["Oil"] == 0) {document.getElementById("Panel_Oil").style.display = "none"}
	else {document.getElementById("Panel_Oil").style.display = "block"}

	if (Panel_On["Rotor"] == 0) {document.getElementById("Panel_Rotor").style.display = "none"}
	else {document.getElementById("Panel_Rotor").style.display = "block"}
	
	if (Panel_On["Fuel"] == 0) {document.getElementById("Panel_Fuel").style.display = "none"}
	else {document.getElementById("Panel_Fuel").style.display = "block"}

	if (Panel_On["Radio_360"] == 0) {document.getElementById("Panel_Radio").style.display = "none"}
	else {document.getElementById("Panel_Radio").style.display = "block"}

	if (Panel_On["Breakers"] == 0) {document.getElementById("Panel_Circuit_Breaker").style.display = "none"}
	else {document.getElementById("Panel_Circuit_Breaker").style.display = "block"}
	
	if (Panel_On["Electric_DC"] == 0) {document.getElementById("Panel_Electric_DC").style.display = "none"}
	else {document.getElementById("Panel_Electric_DC").style.display = "block"}
	
	if (Panel_On["Electric_AC"] == 0) {document.getElementById("Panel_Electric_AC").style.display = "none"}
	else {document.getElementById("Panel_Electric_AC").style.display = "block"}
	
	if (Panel_On["ARK_9"] == 0) {document.getElementById("Panel_ARK_9").style.display = "none"}
	else {
		document.getElementById("Panel_ARK_9").style.display = "block"
		menu_ARK9_init()}
	
	if (Panel_On["ARK_UD"] == 0) {document.getElementById("Panel_ARK_UD").style.display = "none"}
	else {document.getElementById("Panel_ARK_UD").style.display = "block"}
	
	if (Panel_On["Doppler"] == 0) {document.getElementById("Panel_Doppler").style.display = "none"}
	else {document.getElementById("Panel_Doppler").style.display = "block"}

	if (Panel_On["UV26"] == 0) {document.getElementById("Panel_UV26").style.display = "none"}
	else {document.getElementById("Panel_UV26").style.display = "block"}
	
	if (Panel_On["Light"] == 0) {document.getElementById("Panel_Light").style.display = "none"}
	else {document.getElementById("Panel_Light").style.display = "block"}
	
	if (Panel_On["Target"] == 0) {document.getElementById("Panel_Target").style.display = "none"}
	else {document.getElementById("Panel_Target").style.display = "block"}
	
	if (Panel_On["Stick"] == 0) {
	document.getElementById("Panel_Stick").style.display = "none" ;
	document.getElementById("Cadran_Drift").style.display = "block" ;	
	}
	else {
	document.getElementById("Panel_Stick").style.display = "block" ; 
	document.getElementById("Cadran_Drift").style.display = "none" ;
	
	}
	
	if (Panel_On["Combat"] == 0) {
	document.getElementById("Panel_Weapon_1").style.display = "none" ;
	document.getElementById("Panel_Weapon_2").style.display = "none" ;
	document.getElementById("Panel_UV26").style.display = "none";
		if (Panel_On["Electric_AC"] == 1){document.getElementById("Panel_Electric_AC").style.display = "block"};
		if (Panel_On["Electric_DC"] == 1){document.getElementById("Panel_Electric_DC").style.display = "block"};
		if (Panel_On["APU"] == 1) {document.getElementById("Panel_APU").style.display = "block"};
		if (Panel_On["Start"] == 1) {document.getElementById("Panel_Start").style.display = "block"};
		
	document.getElementById("Cadran_Clock").style.display = "block"
	
	}
	
	else {
	document.getElementById("Panel_Weapon_1").style.display = "block" ; 
	document.getElementById("Panel_Weapon_2").style.display = "block" ; 
	document.getElementById("Panel_UV26").style.display = "block";
	document.getElementById("Panel_Electric_AC").style.display = "none";
	document.getElementById("Panel_Electric_DC").style.display = "none";
	document.getElementById("Panel_APU").style.display = "none";
	document.getElementById("Panel_Start").style.display = "none";
	document.getElementById("Cadran_Clock").style.display = "none"
	menu_reload_weapon_data()
		
	}

	if (Panel_On["Doc"] == 0) {document.getElementById("Panel_Doc").style.display = "none"}
	else {document.getElementById("Panel_Doc").style.display = "block"}
		
}

function menu_ARK9_init(){
		// On desactive l'affichage des fréquences temporaires #ARK9-temp-Main
		document.getElementById("ARK9-temp-Main").style.display = "none"
		document.getElementById("ARK9-temp-Stby").style.display = "none"
		// On précharge les fréquences temporaires avec les fréquences actuelles
		var ARK9_freq = dataread_split_2(KaTZPit_data["ARK9_F"])
		KaTZPit_data["ARK9_T_Main"] = 	ARK9_freq [0]
		KaTZPit_data["ARK9_T_Stby"]	= 	ARK9_freq [1]

}

function menu_reload_weapon_data(){

	CmdSiocSpe(1014,0) ; 
	CmdSiocSpe(1016,0) ;
	CmdSiocSpe(1018,0) ;
	CmdSiocSpe(1021,0) ;
	CmdSiocSpe(1022,0) ;
	CmdSiocSpe(1023,0) ;
	
}

function menu_Affiche(num){

	document.getElementById("Panel_Doc").style.display = "block"
	if (num == 1){$("#Doc_Affiche").attr("src","doc/Check_1.png")}
	if (num == 2){$("#Doc_Affiche").attr("src","doc/Check_2.png")}
	if (num == 3){$("#Doc_Affiche").attr("src","doc/Check_3.png")}
	if (num == 4){$("#Doc_Affiche").attr("src","doc/Check_4.png")}
	if (num == 5){$("#Doc_Affiche").attr("src","doc/Check_5.png")}
	
	if (num == 6){$("#Doc_Affiche").attr("src","doc/MisBrief_1.png")}
	if (num == 7){$("#Doc_Affiche").attr("src","doc/MisBrief_2.png")}
	
	if (num == 8){$("#Doc_Affiche").attr("src","doc/MisPhoto_1.png")}
	if (num == 9){$("#Doc_Affiche").attr("src","doc/MisPhoto_2.png")}
	
	if (num == 11){$("#Doc_Affiche").attr("src","doc/Nav_1.png")}
	if (num == 12){$("#Doc_Affiche").attr("src","doc/Nav_2.png")}
	if (num == 13){$("#Doc_Affiche").attr("src","doc/Nav_3.png")}
	if (num == 14){$("#Doc_Affiche").attr("src","doc/Nav_4.png")}
	if (num == 15){$("#Doc_Affiche").attr("src","doc/Nav_5.png")}
	
	if (num == 99) {document.getElementById("Panel_Doc").style.display = "none"}
	
}