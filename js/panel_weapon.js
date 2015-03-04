// --------------------------------------------------------------------
// Panel Weapon et UV26 ...
// --------------------------------------------------------------------


function panel_uv26_update(KaTZPit_data){
		
	// Voyants Left Right
	if (dataread_posit(KaTZPit_data["UV26_Flag"],4) ==1) {$("#UV26_Left").fadeIn()} else {$("#UV26_Left").fadeOut()}
	if (dataread_posit(KaTZPit_data["UV26_Flag"],3) ==1) {$("#UV26_Right").fadeIn()} else {$("#UV26_Right").fadeOut()}
	
	
	// Switch Quant/Num
	if (dataread_posit(KaTZPit_data["UV26_Flag"],2) ==1) {$("#UV_SW_Num").attr('src','images/Switch-Metal-R3.gif')} 
	else {$("#UV_SW_Num").attr('src','images/Switch-Metal-L3.gif')}
	
	// Switch Left/Both/Right
	if (dataread_posit(KaTZPit_data["UV26_Flag"],1) ==2) {$("#UV_SW_LR").attr('src','images/Switch-Metal-R3.gif')} 
	if (dataread_posit(KaTZPit_data["UV26_Flag"],1) ==1) {$("#UV_SW_LR").attr('src','images/Switch-Metal-U3.gif')} 
	if (dataread_posit(KaTZPit_data["UV26_Flag"],1) ==0) {$("#UV_SW_LR").attr('src','images/Switch-Metal-L3.gif')} 
	
	// Switch On / Off
	if (dataread_posit(KaTZPit_data["UV26_Flag"],5) ==1) {
		
		$("#UV_SW_On").attr('src','images/Switch-Metal-R3.gif')
		// Allumage de l'affichage digital
		document.getElementById("UV26_flare").style.display = "block"
		// Affichage Flare restantes
		document.getElementById('UV26_flare').innerHTML = dataread_split_2(KaTZPit_data["UV26_Data"])[0]
		
	
} 
	else {
		// Affichage du switch en position off (pas encore implémenté sur KA)
		$("#UV_SW_On").attr('src','images/Switch-Metal-L3.gif')
		// Extinction de l'affichage digital
		document.getElementById("UV26_flare").style.display = "none"
	}
	
	
	// Affichage Flare restantes
	//document.getElementById('UV26_flare').innerHTML = dataread_split_2(KaTZPit_data["UV26_Data"])[0]
	

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
	if (dataread_posit(KaTZPit_data["Wpn_1"],3) ==1) {$("#Wpn_Master_SW").attr('src','images/switch/Switch-Metal-U4.png')} 
	else {$("#Wpn_Master_SW").attr('src','images/switch/Switch-Metal-D4.png')}
	
	// Switch Man/auto
	if (dataread_posit(KaTZPit_data["Wpn_1"],2) ==1) {$("#Wpn_Main_SW").attr('src','images/switch/Switch-Metal-U4.png')} 
	else {$("#Wpn_Main_SW").attr('src','images/switch/Switch-Metal-D4.png')}

	var WpnSelect = dataread_posit(KaTZPit_data["Wpn_1"],1) + 5
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

function panel_weapon_2(KaTZPit_data){

	
	// Switch UPL/RS
	if (dataread_posit(KaTZPit_data["Wpn_2"],4) ==1) {$("#Wpn_UPK_SW").attr('src','images/switch/Switch-Metal-U4.png')} 
	else if (dataread_posit(KaTZPit_data["Wpn_Ka_2"],4) ==0) {$("#Wpn_UPK_SW").attr('src','images/switch/Switch-Metal-C4V.png')} 
	else {$("#Wpn_UPK_SW").attr('src','images/switch/Switch-Metal-D4.png')}
	
	// Switch 4/8/16
	if (dataread_posit(KaTZPit_data["Wpn_2"],3) ==1) {$("#Wpn_XPod_SW").attr('src','images/switch/Switch-Metal-U4.png')} 
	else if (dataread_posit(KaTZPit_data["Wpn_2"],3) ==0) {$("#Wpn_XPod_SW").attr('src','images/switch/Switch-Metal-C4V.png')} 
	else {$("#Wpn_XPod_SW").attr('src','images/switch/Switch-Metal-D4.png')}
	
	// Switch Auto 12+56
	if (dataread_posit(KaTZPit_data["Wpn_2"],2) ==1) {$("#Wpn_FPod_SW").attr('src','images/switch/Switch-Metal-U4.png')} 
	else if (dataread_posit(KaTZPit_data["Wpn_2"],2) ==0) {$("#Wpn_FPod_SW").attr('src','images/switch/Switch-Metal-C4V.png')} 
	else {$("#Wpn_FPod_SW").attr('src','images/switch/Switch-Metal-D4.png')}
	
	// Switch Grenade , 7.62 12.7
	if (dataread_posit(KaTZPit_data["Wpn_3"],5) ==1) {$("#Wpn_Gre1_SW").attr('src','images/switch/Switch-Metal-U4.png')} 
	else if (dataread_posit(KaTZPit_data["Wpn_3"],5) ==3) {$("#Wpn_Gre1_SW").attr('src','images/switch/Switch-Metal-C4V.png')} 
	else {$("#Wpn_Gre1_SW").attr('src','images/switch/Switch-Metal-D4.png')}
	
	// Switch 800/mix
	if (dataread_posit(KaTZPit_data["Wpn_3"],6) ==1) {$("#Wpn_Gre2_SW").attr('src','images/switch/Switch-Metal-U4.png')} 
	else {$("#Wpn_Gre2_SW").attr('src','images/switch/Switch-Metal-D4.png')}
	
	// Switch Salvo
	if (dataread_posit(KaTZPit_data["Wpn_3"],4) ==1) {$("#Wpn_Salvo_SW").attr('src','images/switch/Switch-Metal-U4.png')} 
	else {$("#Wpn_Salvo_SW").attr('src','images/switch/Switch-Metal-D4.png')}
	
	// Selecteur Salve
	var salvo = (dataread_posit(KaTZPit_data["Wpn_3"],2)+5) * 10 + dataread_posit(KaTZPit_data["Wpn_3"],1)+5
	select_Salvo(salvo)
	
	// Switch Charge 12.7
	if (dataread_posit(KaTZPit_data["Wpn_3"],3) ==1) {$("#Wpn_Charge_SW").attr('src','images/switch/Switch-Metal-L4.png')} 
	else if (dataread_posit(KaTZPit_data["Wpn_3"],3) ==2) {$("#Wpn_Charge_SW").attr('src','images/switch/Switch-Metal-C4H.png')} 
	else {$("#Wpn_Charge_SW").attr('src','images/switch/Switch-Metal-R4.png')}
	
	
	
	// Voyants CCT
	if (dataread_posit(KaTZPit_data["Wpn_2"],1) ==1) {$("#WPN_CCT_R").fadeIn()} else {$("#WPN_CCT_R").fadeOut()}
	if (dataread_posit(KaTZPit_data["Wpn_3"],7) ==1) {$("#WPN_CCT_G").fadeIn()} else {$("#WPN_CCT_G").fadeOut()}
	
	// Voyants Station
	if (dataread_posit(KaTZPit_data["Wpn_2"],7) ==1) {$("#WPN-GUV1").fadeIn()} else {$("#WPN-GUV1").fadeOut()}
	if (dataread_posit(KaTZPit_data["Wpn_2"],6) ==1) {$("#WPN-GUV2").fadeIn()} else {$("#WPN-GUV2").fadeOut()}
	if (dataread_posit(KaTZPit_data["Wpn_2"],5) ==1) {$("#WPN-GUV3").fadeIn()} else {$("#WPN-GUV3").fadeOut()}
	
	var Wpn1 = (dataread_posit(KaTZPit_data["Wpn_Ammo"],2)+5) *100 + (dataread_posit(KaTZPit_data["Wpn_Ammo"],1)+5) *10
	var Wpn2 = (dataread_posit(KaTZPit_data["Wpn_Ammo"],4)+5)*100 + (dataread_posit(KaTZPit_data["Wpn_Ammo"],3)+5)*10
	var Wpn3 = (dataread_posit(KaTZPit_data["Wpn_Ammo"],6)+5)*100 + (dataread_posit(KaTZPit_data["Wpn_Ammo"],5)+5)*10
	
	
	document.getElementById('WPN-GUVQ1').innerHTML = Wpn1
	document.getElementById('WPN-GUVQ2').innerHTML = Wpn2
	document.getElementById('WPN-GUVQ3').innerHTML = Wpn3
	


	
}

function select_Salvo(pos){
	var c_origine = 0
	var c_gain = 9
	
	$("#wpn_Selec_Salvo").css({
		'-moz-transform':'rotate('+(c_origine+c_gain*pos)+'deg)',
		'-webkit-transform':'rotate('+(c_origine+c_gain*pos)+'deg)',
		'-ms-transform':'rotate('+(c_origine+c_gain*pos)+'deg)',
	})

}