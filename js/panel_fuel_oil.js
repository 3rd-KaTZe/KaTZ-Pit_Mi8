// --------------------------------------------------------------------
// Panel Demarrage
// --------------------------------------------------------------------



function panel_fuel_update(KaTZPit_data){

		// Sur le Mi-8 la quantité de Fuel Lu et la position du selecteur sont sotckés dans "Fuel_1"
		var Fuel_Data = dataread_split_2(KaTZPit_data["Fuel_1"])
				
		// Rotation du selecteur et de l'aiguille de jauge
		Jauge_Fuel(Fuel_Data[1]*200,Fuel_Data[0] )
		

}
	
	

function panel_oil_update(KaTZPit_data){	

	//  OIL PANEL
	// Affichage température couleur rouge si < 35°C , Vert = OK
		var Eng_O_d = dataread_split_2(KaTZPit_data["Eng_Oil_deg"])
		document.getElementById('O-Deg-G').innerHTML = Eng_O_d[1]
		if (Eng_O_d[1] < 30){document.getElementById('O-Deg-G').style.color = 'red'}
		else {document.getElementById('O-Deg-G').style.color = 'green'}

		document.getElementById('O-Deg-D').innerHTML = Eng_O_d[0]
		if (Eng_O_d[0] < 30){document.getElementById('O-Deg-D').style.color = 'red'}
		else {document.getElementById('O-Deg-D').style.color = 'green'}
	
		var GB_O_d = dataread_split_2(KaTZPit_data["GB_Oil_deg"])
		document.getElementById('O-Deg-GB').innerHTML = GB_O_d[0]
		if (GB_O_d[0] < -15){document.getElementById('O-Deg-GB').style.color = 'red'}
		else {document.getElementById('O-Deg-GB').style.color = 'green'}

	// Affichage pressions couleur rouge si < 2.0 kg/cm² , Vert = OK
		var Eng_O_p = dataread_split_2(KaTZPit_data["Eng_Oil_pre"])
		document.getElementById('O-Pre-G').innerHTML = ((Eng_O_p[1])/10).toFixed(1)
		if (Eng_O_p[1] < 20){document.getElementById('O-Pre-G').style.color = 'red'}
		else {document.getElementById('O-Pre-G').style.color = 'green'}
		
		document.getElementById('O-Pre-D').innerHTML = ((Eng_O_p[0])/10).toFixed(1)
		if (Eng_O_p[0] < 20){document.getElementById('O-Pre-D').style.color = 'red'}
		else {document.getElementById('O-Pre-D').style.color = 'green'}
		
		var GB_O_p = dataread_split_2(KaTZPit_data["GB_Oil_pre"])
		document.getElementById('O-Pre-GB').innerHTML =((GB_O_p[0])/10).toFixed(1)
		if (GB_O_p[0] < 5){document.getElementById('O-Pre-GB').style.color = 'red'}
		else {document.getElementById('O-Pre-GB').style.color = 'green'}
		
		var Temp_Eng = dataread_split_2(KaTZPit_data["Eng_temp"])
		document.getElementById('O-Deg-EG').innerHTML = Temp_Eng[1]
		document.getElementById('O-Deg-ED').innerHTML = Temp_Eng[0]
		
		
}

function Jauge_Fuel(Selection,Qty){

	var s_origine = -100
	var s_gain = 0.2
	
	var f_origine = -90
	var f_gain = 0.18
		
	// Rotation du selecteur de reservoir
	$("#FUEL-Select").css({
		'-moz-transform':'rotate('+(s_origine+s_gain*Selection)+'deg)',
		'-webkit-transform':'rotate('+(f_origine+s_gain*Selection)+'deg)',
		'-ms-transform':'rotate('+(s_origine+s_gain*Selection)+'deg)',
	})
	
	// Rotation de la jauge de Fuel
	$("#FUEL_Aig").css({
		'-moz-transform':'rotate('+(f_origine+f_gain*Qty)+'deg)',
		'-webkit-transform':'rotate('+(f_origine+f_gain*Qty)+'deg)',
		'-ms-transform':'rotate('+(f_origine+f_gain*Qty)+'deg)',
	})

}

