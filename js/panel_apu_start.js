function panel_apu_update(KaTZPit_data){

// Températures	Pression

		APU_data = dataread_split_2(KaTZPit_data["APU_Data"])
		// Conversion de la valeur échelle APU_Data <> valeur réelle pour affichage
		document.getElementById('APU-DEG').innerHTML = APU_T(APU_data[0]).toFixed(0)
		if (APU_T(APU_data[0]) < 750){document.getElementById('APU-DEG').style.color = 'green'}
		else {document.getElementById('APU-DEG').style.color = 'red'}
		
		// Conversion échelle de 0.04 à 0.95, pour un range de pression de zero à 3.0
		document.getElementById('APU-AIR').innerHTML = ((APU_data[1]-40)/910*3.0).toFixed(1)
		
	// Voyants de l'APU
	// On va lire la valeur de chaque voyant dans la chaine "APU_Voyants"
	// avec la fonction dataread_posit(chaine,position), fonction se trouvant dans function_calcul.js
	
		// Ignition		
		if (dataread_posit(KaTZPit_data["APU_Voyants"],1) ==1) {$("#APU-V-Ignition").fadeIn()} else {$("#APU-V-Ignition").fadeOut()}
		// Oil OK
		if (dataread_posit(KaTZPit_data["APU_Voyants"],2) ==1) {$("#APU-V-Oil").fadeIn()} else {$("#APU-V-Oil").fadeOut()}
		// RPM OK
		if (dataread_posit(KaTZPit_data["APU_Voyants"],3) ==1) {$("#APU-V-RPM-OK").fadeIn()} else {$("#APU-V-RPM-OK").fadeOut()}
		// RPM High Alarm
		if (dataread_posit(KaTZPit_data["APU_Voyants"],4) ==1) {$("#APU-V-RPM-Hi").fadeIn()} else {$("#APU-V-RPM-Hi").fadeOut()}
		
	// Selecteur de type de demarrage
		// Start / Crank / False		
		if (KaTZPit_data["APU_Typ"] ==1) {$("#APU-SW-1").attr('src','images/Switch-haut.gif')}	
		if (KaTZPit_data["APU_Typ"] ==0) {$("#APU-SW-1").attr('src','images/Switch-V-mid.gif')}	
		if (KaTZPit_data["APU_Typ"] ==-1) {$("#APU-SW-1").attr('src','images/Switch-bas.gif')}	
		
			
		
}

function panel_start_update(KaTZPit_data){
	
		
	// Position des Vannes (Fonctionnement des voyants de vannes Droite et Gauche inversé)
		if (dataread_posit(KaTZPit_data["Fuel_V"],2) ==1) {
			$("#F-Vanne-G").attr('src','images/fuel/FV-Vanne_V_O.gif')
			$("#F-Vanne-G").data('internal-id','10200100')}
		else {
			$("#F-Vanne-G").attr('src','images/fuel/FV-Vanne_V_F.gif')
			$("#F-Vanne-G").data('internal-id','10200101')}
			
		if (dataread_posit(KaTZPit_data["Fuel_V"],1) ==1) {
			$("#F-Vanne-D").attr('src','images/fuel/FV-Vanne_V_O.gif')
			$("#F-Vanne-D").data('internal-id','10200200')}
		else {
			$("#F-Vanne-D").attr('src','images/fuel/FV-Vanne_V_F.gif')
			$("#F-Vanne-D").data('internal-id','10200201')}
			
					
		if (dataread_posit(KaTZPit_data["Fuel_V"],3) ==1) {
			$("#F-Vanne-X").attr('src','images/fuel/FV-Vanne_H_O.gif')
			$("#F-Vanne-X").data('internal-id','10200400')}
		else {
			$("#F-Vanne-X").attr('src','images/fuel/FV-Vanne_H_F.gif')
			$("#F-Vanne-X").data('internal-id','10200401')}

	// Voyant des Cut Off et du frein de Rotor
		if (dataread_posit(KaTZPit_data["COff"],2) ==1) {
			$("#FV-CutOff-G").attr('src','images/fuel/FV_Cutoff_Off.gif')
			$("#FV-CutOff-G").data('internal-id','10300900')}
		else {
			$("#FV-CutOff-G").attr('src','images/fuel/FV_Cutoff_On.gif')
			$("#FV-CutOff-G").data('internal-id','10300901')}
			
		if (dataread_posit(KaTZPit_data["COff"],1) ==1) {
			$("#FV-CutOff-D").attr('src','images/fuel/FV_Cutoff_Off.gif')
			$("#FV-CutOff-D").data('internal-id','10301000')}
		else {
			$("#FV-CutOff-D").attr('src','images/fuel/FV_Cutoff_On.gif')
			$("#FV-CutOff-D").data('internal-id','10301001')}
		
		if (dataread_posit(KaTZPit_data["COff"],3) ==1) {
			$("#FV-RotBrk").attr('src','images/fuel/FV_RotorBtk_On.gif')
			$("#FV-RotBrk").data('internal-id','10301100')}
		else {
			$("#FV-RotBrk").attr('src','images/fuel/FV_RotorBtk_Off.gif')
			$("#FV-RotBrk").data('internal-id','10301101')}


	// Fonctionnement des Pompes de Carburant
		if (dataread_posit(KaTZPit_data["Fuel_P"],2) == 1) {
			$("#F-Pump-AV").attr('src','images/fuel/FV_Pump_M.gif')
			$("#F-Pump-AV").data('internal-id','10200300')}
		else {
			$("#F-Pump-AV").attr('src','images/fuel/FV_Pump_A.gif')
			$("#F-Pump-AV").data('internal-id','10200301')}
		
		if (dataread_posit(KaTZPit_data["Fuel_P"],1) == 1) {
			$("#F-Pump-AR").attr('src','images/fuel/FV_Pump_M.gif')
			$("#F-Pump-AR").data('internal-id','10200500')}
		else {
			$("#F-Pump-AR").attr('src','images/fuel/FV_Pump_A.gif')
			$("#F-Pump-AR").data('internal-id','10200501')}
			
		if (dataread_posit(KaTZPit_data["Fuel_P"],3) ==1) {
			$("#F-Pump-C").attr('src','images/fuel/FV_Pump_M.gif')
			$("#F-Pump-C").data('internal-id','10200600')}
		else {
			$("#F-Pump-C").attr('src','images/fuel/FV_Pump_A.gif')
			$("#F-Pump-C").data('internal-id','10200601')}	
				
		
		
	// RPM Moteur et Rotor
		EngRpm = dataread_split_2(KaTZPit_data["Eng_rpm"])
		document.getElementById('F-RPM-G').innerHTML = (EngRpm[1]/10).toFixed(0)
		document.getElementById('F-RPM-D').innerHTML = (EngRpm[0]/10).toFixed(0)
		document.getElementById('F-RPM-RO').innerHTML = (KaTZPit_data["RPM_Rot"]/10).toFixed(0)
		
	// Selecteur de moteur
		// Left / Right		
		if (KaTZPit_data["Start_Sel"] ==-1) {$("#F-SW-1").attr('src','images/Switch-ga.gif')}	
		if (KaTZPit_data["Start_Sel"] ==0) {$("#F-SW-1").attr('src','images/Switch-H-mid.gif')}	
		if (KaTZPit_data["Start_Sel"] ==1) {$("#F-SW-1").attr('src','images/Switch-dr.gif')}		
		
	// Selecteur de type de démarrage
		// Start / Crank / False		
		if (KaTZPit_data["Start_Typ"] ==1) {$("#F-SW-2").attr('src','images/Switch-haut.gif')}	
		if (KaTZPit_data["Start_Typ"] ==0) {$("#F-SW-2").attr('src','images/Switch-V-mid.gif')}	
		if (KaTZPit_data["Start_Typ"] ==-1) {$("#F-SW-2").attr('src','images/Switch-bas.gif')}		
		
	// Voyants de démarrage
		// Ignition		
		if (dataread_posit(KaTZPit_data["Start_V"],1 ==1)) {$("#Start-V-1").fadeIn()} else {$("#Start-V-1").fadeOut()}
		if (dataread_posit(KaTZPit_data["Start_V"],2 ==1)) {$("#Start-V-2").fadeIn()} else {$("#Start-V-2").fadeOut()}

}
