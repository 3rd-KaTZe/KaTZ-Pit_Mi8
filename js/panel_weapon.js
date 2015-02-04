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






	
