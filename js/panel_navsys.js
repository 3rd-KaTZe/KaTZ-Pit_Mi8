function panel_arkud_update(KaTZPit_data){

		// Variable ARKUD contient
		// 1=Selecteur de Mode, 2-3=Switch Sensitivity, 4=Selecteur de Channel, 5=Volume, 6-8 Voyants

		// Switch Sensotivity et UHF/VHF
		if (dataread_posit(KaTZPit_data["ARKUD"],2) ==1) {$("#ARKUD-SW-Sens").attr('src','images/Switch-Metal-U3.gif')} else {$("#ARKUD-SW-Sens").attr('src','images/Switch-Metal-D3.gif')}
		if (dataread_posit(KaTZPit_data["ARKUD"],3) ==1) {$("#ARKUD-SW-VHF").attr('src','images/Switch-Metal-U3.gif')} else {$("#ARKUD-SW-VHF").attr('src','images/Switch-Metal-D3.gif')}
		
		// Alarme Low Alti (deuxième digit des 
		if (dataread_posit(KaTZPit_data["ARKUD"],6) ==1) {$("#ARKUD-V1").fadeIn()} else {$("#ARKUD-V1").fadeOut()}
		if (dataread_posit(KaTZPit_data["ARKUD"],7) ==1) {$("#ARKUD-V2").fadeIn()} else {$("#ARKUD-V2").fadeOut()}
		if (dataread_posit(KaTZPit_data["ARKUD"],8) ==1) {$("#ARKUD-V3").fadeIn()} else {$("#ARKUD-V3").fadeOut()}
		
		// Switch Off/Narrow/Wide/Pulse Translation
		Translate_ArkUDOff(dataread_posit(KaTZPit_data["ARKUD"],1))
		
		// Channel Selection Rotation
		Arkchan = dataread_posit(KaTZPit_data["ARKUD"],4) + 5 // les valeurs ont été envoyé avec un décalage de 5
		if (Arkchan > 2 ){Arkchan = Arkchan + 1} // decallage pour passer la position milieu
		Rotate_Chanselect(Arkchan)
		
		// Volume Rotation
		Rotate_Volume(dataread_posit(KaTZPit_data["ARKUD"],5)+ 5 ) // les valeurs ont été envoyé avec un décalage de 5

}



function panel_ark9_update(KaTZPit_data){

		// Affichage des Frequences Main Stby
		var ARK9_frequence = dataread_split_2(KaTZPit_data["ARK9_F"])
		
		document.getElementById('ARK9-Main').innerHTML = (ARK9_frequence[0]/1000).toFixed(3)
		document.getElementById('ARK9-Stby').innerHTML = (ARK9_frequence[1]/1000).toFixed(3)


		// Switch Main/Stby et TLF/TLG
		if (dataread_posit(KaTZPit_data["ARK9_SW"],1) ==1) {$("#ARK9-SW-MAIN").attr('src','images/Switch-Metal-R3.gif')} else {$("#ARK9-SW-MAIN").attr('src','images/Switch-Metal-L3.gif')}
		if (dataread_posit(KaTZPit_data["ARK9_SW"],2) ==1) {$("#ARK9-SW-TLF").attr('src','images/Switch-Metal-U3.gif')} else {$("#ARK9-SW-TLF").attr('src','images/Switch-Metal-D3.gif')}
		

		// Switch Off/Comp/ANT/Loop Translation
		Translate_ArkOff(dataread_posit(KaTZPit_data["ARK9_SW"],3))

		// Tune Main Rotation
		Rotate_TuneMain(dataread_posit(KaTZPit_data["ARK9_SW"],4))
		
		// Tune Stby Rotation
		Rotate_TuneStby(dataread_posit(KaTZPit_data["ARK9_SW"],5))
		
		// Gain et Signal Rotation
		ARK9_signal = dataread_split_2(KaTZPit_data["ARK9_Data"])
		Rotate_ArkGain(ARK9_signal[1])
		Rotate_ArkSignal(ARK9_signal[0])
		
}



		// Translation bouton selection Ark_UD
	function Translate_ArkUDOff(val){
		var u_origine = 0
		var u_gain = 75
	
		// valat : positif = Translation vers la droite
		$("#ARKUD-SW-OFF").css({
		'-moz-transform':'translate('+(u_origine + u_gain * val)+'px,0px)',
		'-webkit-transform':'translate('+(u_origine + u_gain * val)+'px,0px)',
		'-ms-transform':'translate('+(u_origine + u_gain * val)+'px,0px)',
		})
	}
	
		// Translation bouton selection Ark_9
	function Translate_ArkOff(valat){
		var a_origine = 0
		var a_gain = 45

	
		// valat : positif = Translation vers la droite
		$("#ARK9-SW-OFF").css({
		'-moz-transform':'translate('+(a_origine + a_gain * valat)+'px,0px)',
		'-webkit-transform':'translate('+(a_origine + a_gain * valat)+'px,0px)',
		'-ms-transform':'translate('+(a_origine + a_gain * valat)+'px,0px)',
		})
	}
	
	function Rotate_Chanselect(chan){
		var c_origine = -80
		var c_gain = 26.6
	
		$("#ARKUD-Chan").css({
			'-moz-transform':'rotate('+(c_origine+c_gain*chan)+'deg)',
			'-webkit-transform':'rotate('+(c_origine+c_gain*chan)+'deg)',
			'-ms-transform':'rotate('+(c_origine+c_gain*chan)+'deg)',
		})
	
	}
	
	function Rotate_Volume(vol){
		var v_origine = -70
		var v_gain = 12
	
		$("#ARKUD-Vol").css({
			'-moz-transform':'rotate('+(v_origine+v_gain*vol)+'deg)',
			'-webkit-transform':'rotate('+(v_origine+v_gain*vol)+'deg)',
			'-ms-transform':'rotate('+(v_origine+v_gain*vol)+'deg)',
		})
	
	}


	function Rotate_TuneMain(val){
		var a_origine = 0
		var l_gain = 45
	
		$("#ARK9-Tune-MAIN").css({
			'-moz-transform':'rotate('+(a_origine+l_gain*val)+'deg)',
			'-webkit-transform':'rotate('+(a_origine+l_gain*val)+'deg)',
			'-ms-transform':'rotate('+(a_origine+l_gain*val)+'deg)',
		})

	}


	function Rotate_TuneStby(val){
		var a_origine = 0
		var l_gain = 45


	
		$("#ARK9-Tune-STBY").css({
			'-moz-transform':'rotate('+(a_origine+l_gain*val)+'deg)',
			'-webkit-transform':'rotate('+(a_origine+l_gain*val)+'deg)',
			'-ms-transform':'rotate('+(a_origine+l_gain*val)+'deg)',
		})
	}


	function Rotate_ArkGain(val){
		var a_origine = 22.5
		var l_gain = -0.35


	
		$("#ARK9-Gain").css({
			'-moz-transform':'rotate('+(a_origine+l_gain*val)+'deg)',
			'-webkit-transform':'rotate('+(a_origine+l_gain*val)+'deg)',
			'-ms-transform':'rotate('+(a_origine+l_gain*val)+'deg)',
		})
	}


	function Rotate_ArkSignal(val){
		var a_origine = -45
		var l_gain = 0.09


	
		$("#ARK9-Signal").css({
			'-moz-transform':'rotate('+(a_origine+l_gain*val)+'deg)',
			'-webkit-transform':'rotate('+(a_origine+l_gain*val)+'deg)',
			'-ms-transform':'rotate('+(a_origine+l_gain*val)+'deg)',
		})
	}
	



	function Increment_ARK_Freq(canal,pas,signe){
	
		// Passage des fréquence en mode édition (chiffres rouges)
		// On remplace l'affichage #ARK9-Main par #ARK9-temp-Main
		document.getElementById("ARK9-temp-Main").style.display = "block"
		document.getElementById("ARK9-temp-Stby").style.display = "block"
		
		document.getElementById('ARK9-temp-Main').innerHTML = (KaTZPit_data["ARK9_T_Main"]/1000).toFixed(3)
		document.getElementById('ARK9-temp-Stby').innerHTML = (KaTZPit_data["ARK9_T_Stby"]/1000).toFixed(3)

		// Incrémentation des fréquences en fonciton du canal, pas et signe
		
		// Main Frequence = canal 1
		if (canal == 0) {
			KaTZPit_data["ARK9_T_Main"] = KaTZPit_data["ARK9_T_Main"] + signe * pas
			if (KaTZPit_data["ARK9_T_Main"] > 1290) {KaTZPit_data["ARK9_T_Main"] = 1290}
			if (KaTZPit_data["ARK9_T_Main"] < 150) {KaTZPit_data["ARK9_T_Main"] = 150}
		}
		
		// Stby Frequence = canal 0
		if (canal == 1) {
			KaTZPit_data["ARK9_T_Stby"] = KaTZPit_data["ARK9_T_Stby"] + signe * pas
			if (KaTZPit_data["ARK9_T_Stby"] > 1290) {KaTZPit_data["ARK9_T_Stby"] = 1290}
			if (KaTZPit_data["ARK9_T_Stby"] < 150) {KaTZPit_data["ARK9_T_Stby"] = 150}
		}

		// mise à jour de l'affichage
		document.getElementById('ARK9-temp-Main').innerHTML = (KaTZPit_data["ARK9_T_Main"]/1000).toFixed(3)
		document.getElementById('ARK9-temp-Stby').innerHTML = (KaTZPit_data["ARK9_T_Stby"]/1000).toFixed(3)
}
	
function Send_ARK_Freq(){

		// Envoi de la fréquence temporaire à DCS
		
		var main1 = Math.floor(KaTZPit_data["ARK9_T_Main"] / 100)
		var main0 = (KaTZPit_data["ARK9_T_Main"] % 100 ) / 10
		
		var stby1 = Math.floor(KaTZPit_data["ARK9_T_Stby"] / 100)
		var stby0 = (KaTZPit_data["ARK9_T_Stby"] % 100) / 10
		
		console.log("main = ",main1, " ",main0) 
		console.log("stby = ",stby1, " ",stby0)
		
		
		var cmdm1 = 44000900 + Math.abs(main0)
		var cmdm2 = 74000800 + Math.abs((main1 - 1 )/ 0.2 )
		var cmds1 = 44000600 + Math.abs(stby0)
		var cmds2 = 74000500 + Math.abs((stby1 - 1 )/ 0.2 )
		
		console.log("Commande = ",cmdm1, " ", cmdm2," ",cmds1, " ", cmds2 )
		CmdDCSRaw(cmdm1)
		CmdDCSRaw(cmdm2)
		CmdDCSRaw(cmds1)
		CmdDCSRaw(cmds2)
		
		// On remplace desactive l'affichage #ARK9-temp-Main
		document.getElementById("ARK9-temp-Main").style.display = "none"
		document.getElementById("ARK9-temp-Stby").style.display = "none"
}	

function panel_doppler_update(KaTZPit_data) {

		var Doppler_dat1 = dataread_split_2(KaTZPit_data["Doppler_d1"])
		var Doppler_dat2 = dataread_split_2(KaTZPit_data["Doppler_d2"])

		document.getElementById('Dop_Drift').innerHTML = (Doppler_dat1[0]/10).toFixed(1)
		document.getElementById('Dop_Flight').innerHTML = (Doppler_dat1[1]/10).toFixed(1)
		document.getElementById('Dop_Map').innerHTML = (Doppler_dat2[1]/10).toString()+"&deg"+(Doppler_dat2[0]).toString()
		
		if (dataread_posit(KaTZPit_data["Doppler_f"],2) ==0) {document.getElementById('Dop_DFlag').innerHTML = "Left"}
		else {document.getElementById('Dop_DFlag').innerHTML = "Right"}
		
		if (dataread_posit(KaTZPit_data["Doppler_f"],3) ==0) {document.getElementById('Dop_FFlag').innerHTML = "Forward"}
		else {document.getElementById('Dop_FFlag').innerHTML = "Back"}
		
		if (dataread_posit(KaTZPit_data["Doppler_f"],1) ==0) {$("#Doppler-Enable").fadeIn()} else {$("#Doppler-Enable").fadeOut()}

}	



