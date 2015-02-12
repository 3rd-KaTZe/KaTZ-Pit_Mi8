// --------------------------------------------------------------------
// Connection Panel et Toggle Panel Mi-8
// --------------------------------------------------------------------

function menu_connection(KaTZPit_data){
		
	// Affichage de l'Ip et du Port
	document.getElementById('IP_Host').innerHTML = serverws.ip
	document.getElementById('IP_Port').innerHTML = serverws.port
	
}

function menu_connection_led(flag){

	if (flag == 0) {$("#Led_Connect").attr("src","images/emergency/z_Led-Rouge.gif")}
	if (flag == 1) {$("#Led_Connect").attr("src","images/emergency/z_Led-Orange.gif")}
	if (flag == 2) {$("#Led_Connect").attr("src","images/emergency/z_Led-Verte.gif")}
	
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

	
