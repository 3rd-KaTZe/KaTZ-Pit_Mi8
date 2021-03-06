// --------------------------------------------------------------------
// Fonction d'Animation des instruments Mi-8
// --------------------------------------------------------------------

// Classé par ordre alpha

function instrument_ADI(bille,bank,pitch){
	var a_origine = 0
	var bi_gain = -0.02
	var ba_gain = 0.18
	
	var pitch_strech = 2 * pitch
	var pitch_origin = -135
	var pitch_gain = 270
	
	
	$("#ADI_Bille").css({
		'-moz-transform':'rotate('+(a_origine+bi_gain*bille)+'deg)',
		'-webkit-transform':'rotate('+(a_origine+bi_gain*bille)+'deg)',
		'-ms-transform':'rotate('+(a_origine+bi_gain*bille)+'deg)',
	})
	
	$("#ADI_Bank").css({
		'-moz-transform':'rotate('+(a_origine+ba_gain*bank)+'deg)',
		'-webkit-transform':'rotate('+(a_origine+ba_gain*bank)+'deg)',
		'-ms-transform':'rotate('+(a_origine+ba_gain*bank)+'deg)',
	})
	
	// expansion compression de la zone Top
	// Top Bleu Clair, on fixe l'origine du "scale down" en haut
	$("#ADI_Pitch_T").css({
	'-moz-transform-origin':'top left',
	'-webkit-transform-origin':'top left',
	'-ms-transform-origin':'top left',
	})

	// Scale vertical
	$("#ADI_Pitch_T").css({
	'-moz-transform':'scaleY('+pitch_strech+')',
	'-webkit-transform':'scaleY('+pitch_strech+')',
	'-ms-transform':'scaleY('+pitch_strech+')',
	})
	
	// Translation vers le bas , de la barre d'horizon
	
	$("#ADI_Pitch_C").css({
	'-moz-transform':'translate(0px,'+(pitch_origin + pitch_gain * pitch)+'px)',
	'-webkit-transform':'translate(0px,'+(pitch_origin + pitch_gain * pitch)+'px)',
	'-ms-transform':'translate(0px,'+(pitch_origin + pitch_gain * pitch)+'px)',
	})
}


function instrument_Airspeed(val){
	var a_origine = 0
	var l_gain = 0.34
	
	$("#AIG_Airspeed").css({
		'-moz-transform':'rotate('+(a_origine+l_gain*val)+'deg)',
		'-webkit-transform':'rotate('+(a_origine+l_gain*val)+'deg)',
		'-ms-transform':'rotate('+(a_origine+l_gain*val)+'deg)',
	})

}


function instrument_Altirad(val,index){
	var a_origine = 0
	var l_gain = 0.328
	// Erreur dans DCS, où la même position d'aiguille et Index ne donne pas le même output (31 et 34)
	
	$("#AIG_Altirad").css({
		'-moz-transform':'rotate('+(a_origine+l_gain*val)+'deg)',
		'-webkit-transform':'rotate('+(a_origine+l_gain*val)+'deg)',
		'-ms-transform':'rotate('+(a_origine+l_gain*val)+'deg)',
	})
	
	$("#INDX_Altirad").css({
		'-moz-transform':'rotate('+(a_origine+l_gain*index)+'deg)',
		'-webkit-transform':'rotate('+(a_origine+l_gain*index)+'deg)',
		'-ms-transform':'rotate('+(a_origine+l_gain*index)+'deg)',
	})

}


function instrument_Altitude(val){
	var a_origine = 0
	var l_gain = 0.360
	
	$("#AIG_Altitude").css({
		'-moz-transform':'rotate('+(a_origine+l_gain*val)+'deg)',
		'-webkit-transform':'rotate('+(a_origine+l_gain*val)+'deg)',
		'-ms-transform':'rotate('+(a_origine+l_gain*val)+'deg)',
	})

}


function instrument_Altitude1000(val){
	var a_origine = 0
	var l_gain = 0.360
	
	$("#AIG_Alti1000").css({
		'-moz-transform':'rotate('+(a_origine+l_gain*val)+'deg)',
		'-webkit-transform':'rotate('+(a_origine+l_gain*val)+'deg)',
		'-ms-transform':'rotate('+(a_origine+l_gain*val)+'deg)',
	})

}

function instrument_APU(temp,press){
	var t_origine = -115
	var p_origine = -60
	
	var t_gain = 0.23
	var p_gain = 0.12
	
	$("#APU-DEG_A").css({
		'-moz-transform':'rotate('+(t_origine+t_gain*temp)+'deg)',
		'-webkit-transform':'rotate('+(t_origine+t_gain*temp)+'deg)',
		'-ms-transform':'rotate('+(t_origine+t_gain*temp)+'deg)',
	})

	$("#APU-AIR_A").css({
		'-moz-transform':'rotate('+(p_origine+p_gain*press)+'deg)',
		'-webkit-transform':'rotate('+(p_origine+p_gain*press)+'deg)',
		'-ms-transform':'rotate('+(p_origine+p_gain*press)+'deg)',
	})
}


function instrument_Bille(aiguille,bille){
	var a_origine = 0
	var l_gain = 0.025
	var r_gain = -0.028
	
	$("#AIG_Bille").css({
		'-moz-transform':'rotate('+(a_origine+l_gain*aiguille)+'deg)',
		'-webkit-transform':'rotate('+(a_origine+l_gain*aiguille)+'deg)',
		'-ms-transform':'rotate('+(a_origine+l_gain*aiguille)+'deg)',
	})

	$("#Bille_Bille").css({
		'-moz-transform':'rotate('+(a_origine+r_gain*bille)+'deg)',
		'-webkit-transform':'rotate('+(a_origine+r_gain*bille)+'deg)',
		'-ms-transform':'rotate('+(a_origine+r_gain*bille)+'deg)',
	})
}

function instrument_Clock(hr,mn,sec,hrflt,mnflt,mnchrono,secchrono){
	var a_origine = 0
	var h_gain = 30
	var m_gain = 6
	var s_gain = 6
	var chm_gain = 6
	var chs_gain = 6
	
	
	$("#AIG_Clock_hr").css({
		'-moz-transform':'rotate('+(a_origine+h_gain*hr)+'deg)',
		'-webkit-transform':'rotate('+(a_origine+h_gain*hr)+'deg)',
		'-ms-transform':'rotate('+(a_origine+h_gain*hr)+'deg)',
	})

	$("#AIG_Clock_mn").css({
		'-moz-transform':'rotate('+(a_origine+m_gain*mn)+'deg)',
		'-webkit-transform':'rotate('+(a_origine+m_gain*mn)+'deg)',
		'-ms-transform':'rotate('+(a_origine+m_gain*mn)+'deg)',
	})

	$("#AIG_Clock_sec").css({
		'-moz-transform':'rotate('+(a_origine+s_gain*sec)+'deg)',
		'-webkit-transform':'rotate('+(a_origine+s_gain*sec)+'deg)',
		'-ms-transform':'rotate('+(a_origine+s_gain*sec)+'deg)',
	})
	
	$("#AIG_FLT_hr").css({
		'-moz-transform':'rotate('+(a_origine+h_gain*hrflt)+'deg)',
		'-webkit-transform':'rotate('+(a_origine+h_gain*hrflt)+'deg)',
		'-ms-transform':'rotate('+(a_origine+h_gain*hrflt)+'deg)',
	})

	$("#AIG_FLT_mn").css({
		'-moz-transform':'rotate('+(a_origine+m_gain*mnflt)+'deg)',
		'-webkit-transform':'rotate('+(a_origine+m_gain*mnflt)+'deg)',
		'-ms-transform':'rotate('+(a_origine+m_gain*mnflt)+'deg)',
	})
	
	$("#AIG_Chrono_mn").css({
		'-moz-transform':'rotate('+(a_origine+chm_gain*mnchrono)+'deg)',
		'-webkit-transform':'rotate('+(a_origine+chm_gain*mnchrono)+'deg)',
		'-ms-transform':'rotate('+(a_origine+chm_gain*mnchrono)+'deg)',
	})

	$("#AIG_Chrono_sec").css({
		'-moz-transform':'rotate('+(a_origine+chs_gain*secchrono)+'deg)',
		'-webkit-transform':'rotate('+(a_origine+chs_gain*secchrono)+'deg)',
		'-ms-transform':'rotate('+(a_origine+chs_gain*secchrono)+'deg)',
	})

	
}


function instrument_Drift(val){
	var a_origine = 0
	var l_gain = 0.13
	
	$("#AIG_Drift").css({
		'-moz-transform':'rotate('+(a_origine+l_gain*val)+'deg)',
		'-webkit-transform':'rotate('+(a_origine+l_gain*val)+'deg)',
		'-ms-transform':'rotate('+(a_origine+l_gain*val)+'deg)',
	})

}


function instrument_HSI(cap,way,route){
	var a_origine = 0
	var a_gain = 1
	
	$("#AN_Rosace").css({
		'-moz-transform':'rotate('+(a_origine+a_gain*cap)+'deg)',
		'-webkit-transform':'rotate('+(a_origine+a_gain*cap)+'deg)',
		'-ms-transform':'rotate('+(a_origine+a_gain*cap)+'deg)',
	})

	$("#AN_Way").css({
		'-moz-transform':'rotate('+(a_origine+a_gain*way)+'deg)',
		'-webkit-transform':'rotate('+(a_origine+a_gain*way)+'deg)',
		'-ms-transform':'rotate('+(a_origine+a_gain*way)+'deg)',
	})

	$("#AN_Route").css({
		'-moz-transform':'rotate('+(a_origine+a_gain*route)+'deg)',
		'-webkit-transform':'rotate('+(a_origine+a_gain*route)+'deg)',
		'-ms-transform':'rotate('+(a_origine+a_gain*route)+'deg)',
	})
}	

	
function instrument_Pitch(val){
	var a_origine = 255
	var l_gain = 0.21
	
	$("#AIG_Pitch").css({
		'-moz-transform':'rotate('+(a_origine+l_gain*val)+'deg)',
		'-webkit-transform':'rotate('+(a_origine+l_gain*val)+'deg)',
		'-ms-transform':'rotate('+(a_origine+l_gain*val)+'deg)',
	})
}

function instrument_Power(pct_L, pct_R, index){
	var x_gain = -1.5

	// Jauge Gauche  fonction de scale (agrandir la gauge)
	// On fixe l'origine du "scale down" en bas
	$("#R_Power_L").css({
	'-moz-transform-origin':'bottom left',
	'-webkit-transform-origin':'bottom left',
	'-ms-transform-origin':'bottom left',
	})

	// Scale down %age restant = hauteur barre orange
	$("#R_Power_L").css({
	'-moz-transform':'scaleY('+pct_L+')',
	'-webkit-transform':'scaleY('+pct_L+')',
	'-ms-transform':'scaleY('+pct_L+')',
	})

		
	// Jauge Droite  fonction de scale (agrandir la gauge)
	// On fixe l'origine du "scale down" en bas
	$("#R_Power_R").css({
	'-moz-transform-origin':'bottom left',
	'-webkit-transform-origin':'bottom left',
	'-ms-transform-origin':'bottom left',
	})

	// Scale down %age restant = hauteur barre orange
	$("#R_Power_R").css({
	'-moz-transform':'scaleY('+pct_R+')',
	'-webkit-transform':'scaleY('+pct_R+')',
	'-ms-transform':'scaleY('+pct_R+')',
	})
	
	// Translation de l'index  fonction de translation des repères
	// valup : positif = Translation vers le bas , changement du signe DCS
	$("#R_Power_X").css({
	'-moz-transform':'translate(0px,'+(x_gain * index)+'px)',
	'-webkit-transform':'translate(0px,'+(x_gain * index)+'px)',
	'-ms-transform':'translate(0px,'+(x_gain * index)+'px)',
	})
}


function instrument_RPM(val){
	var a_origine = 45
	// La valeur a été convertie dans l'export, on recorrige
	var l_gain = 3.4 / 1.10
	
	$("#AIG_RPM_Rot").css({
		'-moz-transform':'rotate('+(a_origine+l_gain*val)+'deg)',
		'-webkit-transform':'rotate('+(a_origine+l_gain*val)+'deg)',
		'-ms-transform':'rotate('+(a_origine+l_gain*val)+'deg)',
	})
}
	
	
function instrument_RPM2(l,r){
	var a_origine = 45
	// La valeur a été convertie dans l'export, on recorrige
	var l_gain = 3.4 / 1.10
	var r_gain = 3.4 / 1.10
	
	$("#AIG_RPM_Eng_L").css({
		'-moz-transform':'rotate('+(a_origine+l_gain*l)+'deg)',
		'-webkit-transform':'rotate('+(a_origine+l_gain*l)+'deg)',
		'-ms-transform':'rotate('+(a_origine+l_gain*l)+'deg)',
	})

	$("#AIG_RPM_Eng_R").css({
		'-moz-transform':'rotate('+(a_origine+r_gain*r)+'deg)',
		'-webkit-transform':'rotate('+(a_origine+r_gain*r)+'deg)',
		'-ms-transform':'rotate('+(a_origine+r_gain*r)+'deg)',
	})
}


function instrument_Sling(Sling_L, Sling_R, Sling_F, Sling_B, Sling_V){
	var a_origine = -12
	var v_gain = 0.042
	
	$("#Sling_Vario").css({
	'-moz-transform':'rotate('+(a_origine+v_gain*Sling_V)+'deg)',
	'-webkit-transform':'rotate('+(a_origine+v_gain*Sling_V)+'deg)',
	'-ms-transform':'rotate('+(a_origine+v_gain*Sling_V)+'deg)',
	})

	// Jauge Gauche
	// On fixe l'origine du "scale down" à droite
	$("#Sling_G").css({
	'-moz-transform-origin':'bottom right',
	'-webkit-transform-origin':'bottom right',
	'-ms-transform-origin':'bottom right',
	})

	// Scale horizontal %age restant = longueur de barre blanche
	$("#Sling_G").css({
	'-moz-transform':'scaleX('+Sling_L+')',
	'-webkit-transform':'scaleX('+Sling_L+')',
	'-ms-transform':'scaleX('+Sling_L+')',
	})
	
	// Jauge Droite
	// On fixe l'origine du "scale down" à gauche
	$("#Sling_D").css({
	'-moz-transform-origin':'bottom left',
	'-webkit-transform-origin':'bottom left',
	'-ms-transform-origin':'bottom left',
	})

	// Scale horizontal %age restant = hauteur barre orange
	$("#Sling_D").css({
	'-moz-transform':'scaleX('+Sling_R+')',
	'-webkit-transform':'scaleX('+Sling_R+')',
	'-ms-transform':'scaleX('+Sling_R+')',
	})
	
	// Jauge Avant
	// On fixe l'origine du "scale down" en bas
	$("#Sling_AV").css({
	'-moz-transform-origin':'bottom left',
	'-webkit-transform-origin':'bottom left',
	'-ms-transform-origin':'bottom left',
	})

	// Scale horizontal %age restant = hauteur barre orange
	$("#Sling_AV").css({
	'-moz-transform':'scaleY('+Sling_F+')',
	'-webkit-transform':'scaleY('+Sling_F+')',
	'-ms-transform':'scaleY('+Sling_F+')',
	})
	
	// Jauge Arrière
	// On fixe l'origine du "scale down" en haut
	$("#Sling_AR").css({
	'-moz-transform-origin':'top left',
	'-webkit-transform-origin':'top left',
	'-ms-transform-origin':'top left',
	})

	// Scale horizontal %age restant = hauteur barre orange
	$("#Sling_AR").css({
	'-moz-transform':'scaleY('+Sling_B+')',
	'-webkit-transform':'scaleY('+Sling_B+')',
	'-ms-transform':'scaleY('+Sling_B+')',
	})
}	

function instrument_EngTemp(left,right){
	var t_origine = -135
	var t_gain = 0.225

	var m_origine = 180
	var m_gain = 3.6
	var leftm = left % 100
	var rightm = right % 100
	
	$("#Eng_ExTemp_L").css({
		'-moz-transform':'rotate('+(t_origine+t_gain*left)+'deg)',
		'-webkit-transform':'rotate('+(t_origine+t_gain*left)+'deg)',
		'-ms-transform':'rotate('+(t_origine+t_gain*left)+'deg)',
	})
	
	$("#Eng_ExTemp_R").css({
		'-moz-transform':'rotate('+(t_origine+t_gain*right)+'deg)',
		'-webkit-transform':'rotate('+(t_origine+t_gain*right)+'deg)',
		'-ms-transform':'rotate('+(t_origine+t_gain*right)+'deg)',
	})

	$("#AM_TEM_mL").css({
		'-moz-transform':'rotate('+(m_origine+m_gain*leftm)+'deg)',
		'-webkit-transform':'rotate('+(m_origine+m_gain*leftm)+'deg)',
		'-ms-transform':'rotate('+(m_origine+m_gain*leftm)+'deg)',
	})
	
	$("#AM_TEM_mR").css({
		'-moz-transform':'rotate('+(m_origine+m_gain*rightm)+'deg)',
		'-webkit-transform':'rotate('+(m_origine+m_gain*rightm)+'deg)',
		'-ms-transform':'rotate('+(m_origine+m_gain*rightm)+'deg)',
	})
}

function instrument_Vario(val){
	var a_origine = -90
	// Valeur brute 1000 >> -30m/s >> 180°
	var l_gain = 0.18
	
	$("#AIG_Vario").css({
		'-moz-transform':'rotate('+(a_origine+l_gain*val)+'deg)',
		'-webkit-transform':'rotate('+(a_origine+l_gain*val)+'deg)',
		'-ms-transform':'rotate('+(a_origine+l_gain*val)+'deg)',
	})
}





	
