// --------------------------------------------------------------------
// Panel Electric
// --------------------------------------------------------------------

function panel_electric_update(KaTZPit_data){

	// Les données Switch et Voyants sont stockées dans deux containers à 8 chiffres
	// E_DC_Voyants et E_DC_SW
	// On lit la valeur de chaque switch, avec la fonction "dataread_posit"
	
	// DC Section
	// Swith Batterie, APUGen , On/Off
		
		if (dataread_posit(KaTZPit_data["E_DC_SW"],1) ==1) {$("#BAT-SW-1").attr('src','images/switch/Switch-Metal-U4.png')} else {$("#BAT-SW-1").attr('src','images/switch/Switch-Metal-D4.png')}
		if (dataread_posit(KaTZPit_data["E_DC_SW"],2) ==1) {$("#BAT-SW-2").attr('src','images/switch/Switch-Metal-U4.png')} else {$("#BAT-SW-2").attr('src','images/switch/Switch-Metal-D4.png')}	
		
		if (dataread_posit(KaTZPit_data["E_DC_SW"],3) ==1) {$("#APUGEN-SW").attr('src','images/switch/Switch-Metal-U4.png')} else {$("#APUGEN-SW").attr('src','images/switch/Switch-Metal-D4.png')}	
	
	// Swith Rectifier 1 2 3 , On/Off
		if (dataread_posit(KaTZPit_data["E_DC_SW"],4) ==1) {$("#REC-SW-1").attr('src','images/switch/Switch-Metal-U4.png')} else {$("#REC-SW-1").attr('src','images/switch/Switch-Metal-D4.png')}
		if (dataread_posit(KaTZPit_data["E_DC_SW"],5) ==1) {$("#REC-SW-2").attr('src','images/switch/Switch-Metal-U4.png')} else {$("#REC-SW-2").attr('src','images/switch/Switch-Metal-D4.png')}	
		if (dataread_posit(KaTZPit_data["E_DC_SW"],6) ==1) {$("#REC-SW-3").attr('src','images/switch/Switch-Metal-U4.png')} else {$("#REC-SW-3").attr('src','images/switch/Switch-Metal-D4.png')}	
	
	// Swith ExtPwr, APUGen , On/Off	
		if (dataread_posit(KaTZPit_data["E_DC_SW"],7) ==1) {$("#EXT-DC-SW").attr('src','images/switch/Switch-Metal-U4.png')} else {$("#EXT-DC-SW").attr('src','images/switch/Switch-Metal-D4.png')}
		if (dataread_posit(KaTZPit_data["E_DC_SW"],8) ==1) {$("#APUREC-SW").attr('src','images/switch/Switch-Metal-U4.png')} else {$("#APUREC-SW").attr('src','images/switch/Switch-Metal-D4.png')}			

	
	// Gestion des Voyants 
	// Voyants des Rectifiers 1 2 3
	
		if (dataread_posit(KaTZPit_data["E_DC_V"],1) ==1) {$("#E-V-REC1").fadeIn()} else {$("#E-V-REC1").fadeOut()}
		if (dataread_posit(KaTZPit_data["E_DC_V"],2) ==1) {$("#E-V-REC2").fadeIn()} else {$("#E-V-REC2").fadeOut()}
		if (dataread_posit(KaTZPit_data["E_DC_V"],3) ==1) {$("#E-V-REC3").fadeIn()} else {$("#E-V-REC3").fadeOut()}
	
	// Voyant Ext-Power et Equip Test
		if (dataread_posit(KaTZPit_data["E_DC_V"],4) ==1) {$("#E-V-ExtDC").fadeIn()} else {$("#E-V-ExtDC").fadeOut()}
		if (dataread_posit(KaTZPit_data["E_DC_V"],5) ==1) {$("#E-V-Test").fadeIn()} else {$("#E-V-Test").fadeOut()}	
	

	// AC Section ----------------------------------------------------------------------------------------------
	
	// Swith Gen 1 2 , On/Off
		if (dataread_posit(KaTZPit_data["E_AC_SW"],1) ==1) {$("#GEN-SW-1").attr('src','images/switch/Switch-Metal-U4.png')} else {$("#GEN-SW-1").attr('src','images/switch/Switch-Metal-D4.png')}
		if (dataread_posit(KaTZPit_data["E_AC_SW"],2) ==1) {$("#GEN-SW-2").attr('src','images/switch/Switch-Metal-U4.png')} else {$("#GEN-SW-2").attr('src','images/switch/Switch-Metal-D4.png')}	
		
	// Swith ExtPwr, On/Off	
		if (dataread_posit(KaTZPit_data["E_AC_SW"],3) ==1) {$("#EXT-AC-SW").attr('src','images/switch/Switch-Metal-U4.png')} else {$("#EXT-AC-SW").attr('src','images/switch/Switch-Metal-D4.png')}

	// Selecteur DC/AC 115V et 36V , Man/OFF/Auto
		if (dataread_posit(KaTZPit_data["E_AC_SW"],4) ==1) {$("#AC115V-SW").attr('src','images/switch/Switch-Metal-U4.png')}	
		if (dataread_posit(KaTZPit_data["E_AC_SW"],4) ==0) {$("#AC115V-SW").attr('src','images/switch/Switch-Metal-C4V.png')}	
		if (dataread_posit(KaTZPit_data["E_AC_SW"],4) ==-1) {$("#AC115V-SW").attr('src','images/switch/Switch-Metal-D4.png')}

		if (dataread_posit(KaTZPit_data["E_AC_SW"],5) ==1) {$("#AC36V-SW").attr('src','images/switch/Switch-Metal-U4.png')}	
		if (dataread_posit(KaTZPit_data["E_AC_SW"],5) ==0) {$("#AC36V-SW").attr('src','images/switch/Switch-Metal-C4V.png')}	
		if (dataread_posit(KaTZPit_data["E_AC_SW"],5) ==-1) {$("#AC36V-SW").attr('src','images/switch/Switch-Metal-D4.png')}	
	
	// Gestion des Voyants
	// Voyants des Gen 1 2
		if (dataread_posit(KaTZPit_data["E_AC_V"],1) ==1) {$("#E-V-Gen1").fadeIn()} else {$("#E-V-Gen1").fadeOut()}
		if (dataread_posit(KaTZPit_data["E_AC_V"],2) ==1) {$("#E-V-Gen2").fadeIn()} else {$("#E-V-Gen2").fadeOut()}
		
	// Voyant AC-Ext-Power et Inverter
		if (dataread_posit(KaTZPit_data["E_AC_V"],3) ==1) {$("#E-V-ExtAC").fadeIn()} else {$("#E-V-ExtAC").fadeOut()}	
		if (dataread_posit(KaTZPit_data["E_AC_V"],4) ==1) {$("#E-V-Inverter").fadeIn()} else {$("#E-V-Inverter").fadeOut()}	

}

function panel_electric_light(KaTZPit_data){

		// Selecteur Dome L
		if (dataread_posit(KaTZPit_data["E_NavLight"],6) ==1) {$("#E_Dome_L").attr('src','images/switch/Switch-Metal-U4.png')}	
		if (dataread_posit(KaTZPit_data["E_NavLight"],6) ==0) {$("#E_Dome_L").attr('src','images/switch/Switch-Metal-C4V.png')}	
		if (dataread_posit(KaTZPit_data["E_NavLight"],6) ==-1) {$("#E_Dome_L").attr('src','images/switch/Switch-Metal-D4.png')}
		
		// Selecteur Dome R
		if (dataread_posit(KaTZPit_data["E_NavLight"],5) ==1) {$("#E_Dome_R").attr('src','images/switch/Switch-Metal-U4.png')}	
		if (dataread_posit(KaTZPit_data["E_NavLight"],5) ==0) {$("#E_Dome_R").attr('src','images/switch/Switch-Metal-C4V.png')}	
		if (dataread_posit(KaTZPit_data["E_NavLight"],5) ==-1) {$("#E_Dome_R").attr('src','images/switch/Switch-Metal-D4.png')}
		
		// Selecteur Nav Light
		if (dataread_posit(KaTZPit_data["E_NavLight"],4) ==1) {$("#E_Nav_L").attr('src','images/switch/Switch-Metal-U4.png')}	
		if (dataread_posit(KaTZPit_data["E_NavLight"],4) ==0) {$("#E_Nav_L").attr('src','images/switch/Switch-Metal-C4V.png')}	
		if (dataread_posit(KaTZPit_data["E_NavLight"],4) ==-1) {$("#E_Nav_L").attr('src','images/switch/Switch-Metal-D4.png')}
		
		// Selecteur Form Light
		if (dataread_posit(KaTZPit_data["E_NavLight"],3) ==1) {$("#E_Form_L").attr('src','images/switch/Switch-Metal-U4.png')}	
		if (dataread_posit(KaTZPit_data["E_NavLight"],3) ==0) {$("#E_Form_L").attr('src','images/switch/Switch-Metal-C4V.png')}	
		if (dataread_posit(KaTZPit_data["E_NavLight"],3) ==-1) {$("#E_Form_L").attr('src','images/switch/Switch-Metal-D4.png')}
		
		// Selecteur Blade Tip , Strobe
		if (dataread_posit(KaTZPit_data["E_NavLight"],1) ==1) {$("#E_Beacon_L").attr('src','images/switch/Switch-Metal-U4.png')} else {$("#E_Beacon_L").attr('src','images/switch/Switch-Metal-D4.png')}
		if (dataread_posit(KaTZPit_data["E_NavLight"],2) ==1) {$("#E_Blade_L").attr('src','images/switch/Switch-Metal-U4.png')} else {$("#E_Blade_L").attr('src','images/switch/Switch-Metal-D4.png')}	
		
		// Voyant Feux de Recherche
		if (dataread_posit(KaTZPit_data["E_NavLight"],8) ==1) {$("#Search_Left").fadeIn()} else {$("#Search_Left").fadeOut()}	
		if (dataread_posit(KaTZPit_data["E_NavLight"],7) ==1) {$("#Search_Right").fadeIn()} else {$("#Search_Right").fadeOut()}	






}
