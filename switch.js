var item = prompt('Masukkan nama makanan/minuman! \ncontoh (nasi, daging, susu, burger, softdrink)');

switch (item) {
	case 'nasi' :
	case 'daging' :
	case 'susu' :
		alert('sehat');
		break;
	case 'burger' :
	case 'softdrink' :
		alert('tidak sehat');
		break;
	default :
		alert('gak mudeng');
		break;
}
