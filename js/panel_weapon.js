// --------------------------------------------------------------------
// Panel Weapon et UV26 ...
// --------------------------------------------------------------------


function panel_uv26_update(KaTZPit_data){
		
	// Voyants Left Right
	if (dataread_posit(KaTZPit_data["UV26_Flag"],4) ==1) {$("#UV26_Left").fadeIn()} else {$("#UV26_Left").fadeOut()}
	if (dataread_posit(KaTZPit_data["UV26_Flag"],3) ==1) {$("#UV26_Right").fadeIn()} else {$("#UV26_Right").fadeOut()}
	
	
	// Switch Man/auto
	if (dataread_posit(KaTZPit_data["UV26_Flag"],2) ==1) {$("#UV_SW_Num").attr('src','images/Switch-Metal-R3.gif')} 
	else {$("#UV_SW_Num").attr('src','images/Switch-Metal-L3.gif')}
	
	// Switch Left/Both/Right
	if (dataread_posit(KaTZPit_data["UV26_Flag"],1) ==2) {$("#UV_SW_LR").attr('src','images/Switch-Metal-R3.gif')} 
	if (dataread_posit(KaTZPit_data["UV26_Flag"],1) ==1) {$("#UV_SW_LR").attr('src','images/Switch-Metal-U3.gif')} 
	if (dataread_posit(KaTZPit_data["UV26_Flag"],1) ==0) {$("#UV_SW_LR").attr('src','images/Switch-Metal-L3.gif')} 
	
	
	// Affichage Flare restantes
	
	//document.getElementById('UV26_flare').innerHTML = dataread_split_2(KaTZPit_data["UV26_Data"])[0]
	
	// Switch On / Off
	if (dataread_posit(KaTZPit_data["UV26_Flag"],5) ==1) {
		// Affichage du switch en position on
		$("#UV_SW_On").attr('src','images/Switch-Metal-R3.gif')
		// Allumage de l'affichage digital
		document.getElementById("UV26_flare").style.display = "block"
		// Affichage Flare restantes
		document.getElementById('UV26_flare').innerHTML = dataread_split_2(KaTZPit_data["UV26_Data"])[0]
		
	
} 
	else {
		// Affichage du switch en position off
		$("#UV_SW_On").attr('src','images/Switch-Metal-L3.gif')
		// Extinction de l'affichage digital
		document.getElementById("UV26_flare").style.display = "none"
	}
	

}

function panel_weapon_1(KaTZPit_data){

	// Voyants de présence Weaponstation
	if (dataread_posit(KaTZPit_data["Wpn_Lamp"],6) ==1) {$("#WPN-Pre1").fadeIn()} else {$("#WPN-Pre1").fadeOut()}
	if (dataread_posit(KaTZPit_data["Wpn_Lamp"],5) ==1) {$("#WPN-Pre2").fadeIn()} else {$("#WPN-Pre2").fadeOut()}
	if (dataread_posit(KaTZPit_data["Wpn_Lamp"],4) ==1) {$("#WPN-Pre3").fadeIn()} else {$("#WPN-Pre3").fadeOut()}
	if (dataread_posit(KaTZPit_data["Wpn_Lamp"],3) ==1) {$("#WPN-Pre4").fadeIn()} else {$("#WPN-Pre4").fadeOut()}
	if (dataread_posit(KaTZPit_data["Wpn_Lamp"],2) ==1) {$("#WPN-Pre5").fadeIn()} else {$("#WPN-Pre5").fadeOut()}
	if (dataread_posit(KaTZPit_data["Wpn_Lamp"],1) ==1) {$("#WPN-Pre6").fadeIn()} else {$("#WPN-Pre6").fadeOut()}
	
	// Switch Master Arm
	if (dataread_posit(KaTZPit_data["Wpn_Flag"],3) ==1) {$("#Wpn_Master_SW").attr('src','images/switch/Switch-Metal-U4.png')} 
	else {$("#Wpn_Master_SW").attr('src','images/switch/Switch-Metal-D4.png')}
	
	// Switch Man/auto
	if (dataread_posit(KaTZPit_data["Wpn_Flag"],2) ==1) {$("#Wpn_Main_SW").attr('src','images/switch/Switch-Metal-U4.png')} 
	else {$("#Wpn_Main_SW").attr('src','images/switch/Switch-Metal-D4.png')}

	var WpnSelect = dataread_posit(KaTZPit_data["Wpn_Flag"],1) + 5
	if (WpnSelect == 0 ){
	document.getElementById('WPN-Type1').innerHTML = "R"
	document.getElementById('WPN-Type2').innerHTML = "R"
	document.getElementById('WPN-Type3').innerHTML = "R"
	document.getElementById('WPN-Type4').innerHTML = "R"
	document.getElementById('WPN-Type5').innerHTML = "R"
	document.getElementById('WPN-Type6').innerHTML = "R"
	}
	
	if (WpnSelect == 1 ){
	document.getElementById('WPN-Type1').innerHTML = "B"
	document.getElementById('WPN-Type2').innerHTML = "B"
	document.getElementById('WPN-Type3').innerHTML = "B"
	document.getElementById('WPN-Type4').innerHTML = "B"
	document.getElementById('WPN-Type5').innerHTML = "B"
	document.getElementById('WPN-Type6').innerHTML = "B"
	}
	if (WpnSelect == 2 ){
	document.getElementById('WPN-Type1').innerHTML = "B"
	document.getElementById('WPN-Type2').innerHTML = "B"
	document.getElementById('WPN-Type3').innerHTML = "R"
	document.getElementById('WPN-Type4').innerHTML = "R"
	document.getElementById('WPN-Type5').innerHTML = "B"
	document.getElementById('WPN-Type6').innerHTML = "B"
	}
	if (WpnSelect == 3 ){
	document.getElementById('WPN-Type1').innerHTML = "--"
	document.getElementById('WPN-Type2').innerHTML = "HB"
	document.getElementById('WPN-Type3').innerHTML = "R"
	document.getElementById('WPN-Type4').innerHTML = "R"
	document.getElementById('WPN-Type5').innerHTML = "HB"
	document.getElementById('WPN-Type6').innerHTML = "--"
	}
	if (WpnSelect == 4 ){
	document.getElementById('WPN-Type1').innerHTML = "--"
	document.getElementById('WPN-Type2').innerHTML = "HB"
	document.getElementById('WPN-Type3').innerHTML = "B"
	document.getElementById('WPN-Type4').innerHTML = "B"
	document.getElementById('WPN-Type5').innerHTML = "HB"
	document.getElementById('WPN-Type6').innerHTML = "--"
	}
	if (WpnSelect == 5 ){
	document.getElementById('WPN-Type1').innerHTML = "G"
	document.getElementById('WPN-Type2').innerHTML = "G"
	document.getElementById('WPN-Type3').innerHTML = "G"
	document.getElementById('WPN-Type4').innerHTML = "G"
	document.getElementById('WPN-Type5').innerHTML = "G"
	document.getElementById('WPN-Type6').innerHTML = "G"

	}
	
	




}






	
