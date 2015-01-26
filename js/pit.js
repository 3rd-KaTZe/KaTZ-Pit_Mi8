// serverws.ip = "IP MACHINE DCS"; // défaut localhost
// serverws.port = "PORT";	// défaut 9000
// serverws.auto_connect = true;
// serverws.delay = 5000;

var mydata;
var obj;
var mytimer;
var my2timer;
var paneldata = new Array();
var Panel_On = {};
var KaTZPit_data = {};
var Plane_data = {};
var FL_data = {};
var RWY_data = {};
var Weapon_data={};
var Order_List = new Array();
var Cmd_Capot = {};
var CmdDelay;




window.onload = function(){

	// Chargement et indication de l'IP et Port
	// Sur le panel Emergency
	menu_connection(KaTZPit_data)

	// Initialisation des Panels affichés
	Panel_On = panel_On_init();
	menu_Toggle("Init")
	
}


function pit_main(){

	// Iteration Principale, fréquence fixée dans mytimer
		
	// INSTRUMENT PANEL ------------------------------------------------
	
	// Mise à jour des cadrans des instruments de vol
	panel_instrument_flight(KaTZPit_data)
	
	// Mise à jour des cadrans des instruments moteur (RPM, Huile)
	panel_instrument_engine(KaTZPit_data)
	
	panel_instrument_rotor(KaTZPit_data)
	
	panel_radio_update(KaTZPit_data)
	
	// SYSTEM PANEL ------------------------------------------------------
	
	// Lancement des subroutines en fonction des panneaux affichés dans le KaKZ_Pit
	if (Panel_On["APU"]==1){panel_apu_update(KaTZPit_data)}
	if (Panel_On["Oil"]==1){panel_oil_update(KaTZPit_data)}
	if (Panel_On["Start"]==1){panel_start_update(KaTZPit_data)}
	if (Panel_On["Electric_DC"]==1 || Panel_On["Electric_AC"]==1){panel_electric_update(KaTZPit_data)}
	// if (Panel_On["Rotor"]==1){panel_rotor_update(KaTZPit_data)}
	if (Panel_On["Doppler"]==1){panel_doppler_update(KaTZPit_data)}
	if (Panel_On["ARK_9"]==1){panel_ark9_update(KaTZPit_data)}
	if (Panel_On["ARK_UD"]==1){panel_arkud_update(KaTZPit_data)}
	if (Panel_On["Fuel"]==1){panel_fuel_update(KaTZPit_data)}	
	
	
	CmdSend()
}

	
	


// Fonction appelée par appui sur le bouton KaTZ-Pit START
function Pit_Start(plane){
	// Demarrage du Panel par appui sur le bouton Start
	console.log("Demarrage Panel")

	// Initialisation des données KaTZ-Pit
	KaTZPit_data = paneldata_init();
	// Initialisation des données de position de pistes
	RWY_data = RWY_init();
		
	// Initialisation de la Radio
	panel_radio_init(KaTZPit_data);
	
	// Initialisation des capots de switch
	Cmd_Capot = Cmd_Capot_init()

	// Affichage Initial
	pit_main();
	//paneldata_update(KaTZPit_data)

	// Lancement de la procédure de connection
	serverws_connect();

}








