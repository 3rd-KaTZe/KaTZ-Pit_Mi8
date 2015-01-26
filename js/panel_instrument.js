// --------------------------------------------------------------------
// Panel Analogique du Mi-8
// --------------------------------------------------------------------

// fonctions de gestion des instruments dans "instrument.js"

function panel_instrument_flight(KaTZPit_data){
	
	
		// Animation des instruments de vol ===========================================================
				
		instrument_Airspeed(KaTZPit_data["IAS"])
		instrument_Vario(KaTZPit_data["Vario"])
		
		// Altirad ------------------------------------------------------------------------------------
		// xxAB , où A = Flag Low Alti , B = Flag On
		Altirad_flag = dataread_split_2(KaTZPit_data["AltiRad_FI"])
		
		// Positionnement de l'Index low altitude
		instrument_Altirad(KaTZPit_data["QFE"],Altirad_flag[0])
		
		// Alarme Low Alti 
		if (Altirad_flag[1] > 10) {$("#LOW_Altirad").fadeIn()} else {$("#LOW_Altirad").fadeOut()}
		
		// Bouton On/Off
		if (Altirad_flag[1] > 0) {$("#On_Altirad").attr('src','images/Switch-Metal-U3.gif')} 
		else {$("#On_Altirad").attr('src','images/Switch-Metal-D3.gif')}
				
		
		// Altimetre Baro , 2 aiguilles  -------------------------------------------------------------
		instrument_Altitude(KaTZPit_data["QNH"])
		instrument_Altitude1000(KaTZPit_data["QNH"]/10)
				
			
		// Cadran Bille et Side Split  ---------------------------------------------------------------
		var SpeedSplit = dataread_split_2(KaTZPit_data["EUP"])
			instrument_Bille(SpeedSplit[1], SpeedSplit[0])
		
		// Rotation HSI   --------------------------------------------------------------------------
		var i_Cap = 360 - KaTZPit_data["Cap"]/10
		var i_Way = (KaTZPit_data["Way"]/10)
		var i_Route = (KaTZPit_data["Route"]/10)
	
		instrument_HSI(i_Cap, i_Way, i_Route)	
			
		// ADI  -------------------------------------------------------------------------------------
		var ADI_Pitch = KaTZPit_data["Pitch"]
		
		// Calcul de variation de l'horizon artificiel range 0% à 100%
		var ADI_Pitch_A = Math.min(Math.max((ADI_Pitch + 200) / 400,0),1)
		
		document.getElementById('ADI_Pitch_V1').innerHTML = (ADI_Pitch/1000*90).toFixed(0)
		document.getElementById('ADI_Pitch_V2').innerHTML = (ADI_Pitch/1000*90).toFixed(0)
						
		instrument_ADI(SpeedSplit[0],KaTZPit_data["Bank"],ADI_Pitch_A)
				
			
		// Stationnaire, Cadran Sling  ----------------------------------------------------------------------------
		var Sling2 = dataread_split_2(KaTZPit_data["Sling_2D"])
		var Sling3 = dataread_split_2(KaTZPit_data["Sling_3D"])
		
		var lr_gain = 0.9
		var fb_gain = 0.9
		
		Sling_L = - Math.min(Sling2[0]/1000,0) * lr_gain // %age de déplacement Left
		Sling_R = Math.max(Sling2[0]/1000,0) * lr_gain // %age de déplacement Right
		Sling_F = Math.max(Sling2[1]/1000,0) * fb_gain// %age de déplacement Forward
		Sling_B = - Math.min(Sling2[1]/1000,0) * fb_gain // %age de déplacement Back
		Sling_V = Sling3[0] // Rotation Variometre
				
		// Jauge de sling 4 directions + Vario
		instrument_Sling(Sling_L, Sling_R, Sling_F, Sling_B, Sling_V)
		if (Sling3[1] > 0) {$("#Sling_Off").fadeIn()} else {$("#Sling_Off").fadeOut()}
		
									
		// diss 15, Cadran Drift ----------------------------------------------------------------------------------------
		var Drift_Data = dataread_split_2(KaTZPit_data["D15_drift"])
		
			// Rotation Angle Drift
				instrument_Drift(Drift_Data[1])
					
			// Voyant Memory
				if (dataread_posit(KaTZPit_data["D15_drift_V"],1 ) ==0){document.getElementById('Mem_Drift').innerHTML = "M"} 
				else {document.getElementById('Mem_Drift').innerHTML = ""}

			// Shutter ou Vitesse de Drift			
				if (dataread_posit(KaTZPit_data["D15_drift_V"],2 ) ==1){document.getElementById('Speed_Drift').innerHTML = 'xxx'} 
				else {document.getElementById('Speed_Drift').innerHTML = Drift_Data[0].toFixed(0)} 
		
}

function panel_instrument_engine(KaTZPit_data){
		// Pitch et RPM Rotor  -----------------------------------------------------------------------
		instrument_Pitch(KaTZPit_data["Pitch_Rot"])
		instrument_RPM(KaTZPit_data["RPM_Rot"]/10)
		
		// RPM Moteurs  -----------------------------------------------------------------------------
		var RPM_Eng = dataread_split_2(KaTZPit_data["Eng_rpm"])
		instrument_RPM2(RPM_Eng[1]/10,RPM_Eng[0]/10)



}

function panel_instrument_rotor(KaTZPit_data){		
	// TEMPORAIRE ROTOR PANEL
		// IAS en "km/h"
		// Echelle non linéaire conveti par la fonction IAS_L() de function_convert_scale.js
		document.getElementById('IAS_0').innerHTML = IAS_L(KaTZPit_data["IAS"]).toFixed(0)
		
		document.getElementById('Vario_0').innerHTML = Vario_L(KaTZPit_data["Vario"]).toFixed(1)
		
		// Pitch en degré
		// Echelle non linéaire conveti par la fonction RotorPitch() de function_convert_scale.js
		document.getElementById('RPM_Rot').innerHTML = KaTZPit_data["RPM_Rot"]
		document.getElementById('Pitch_Rot').innerHTML = RotorPitch(KaTZPit_data["Pitch_Rot"]).toFixed(1)	

		// Valeur en test
		document.getElementById('Test_val').innerHTML = KaTZPit_data["Start_Sel"]	
		
		if (IAS_L(KaTZPit_data["IAS"]) > 250) {$("#RV-Speed").fadeIn()} else {$("#RV-Speed").fadeOut()}
		if (IAS_L(KaTZPit_data["IAS"]) < 50 && Vario_L(KaTZPit_data["Vario"]) < -5) {$("#RV-Vortex").fadeIn()} else {$("#RV-Vortex").fadeOut()}
		
		// Jauge de puissance Moteur gestion gauche droite et index
		var i_Pow_Lpct = Math.max((KaTZPit_data["Power_L"] - 50) / 50 , 0)
		var i_Pow_Rpct = Math.max((KaTZPit_data["Power_R"] - 50) / 50 , 0)
		var i_pow_X = (KaTZPit_data["Power_X"])		
		
		instrument_Power(i_Pow_Lpct, i_Pow_Rpct, i_pow_X )
		//console.log(i_pow_X)
		
}	


	
