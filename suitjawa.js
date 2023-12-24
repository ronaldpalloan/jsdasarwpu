var main = true;
while (main) {

	// Pilihan player
	var p = prompt('Pilih: gajah, orang, semut');

	// Pilihan Computer
	// Nangkep bilangan random
	var comp = Math.random();

	if (comp <= 0.33) {
		comp = 'gajah';
	} else if (comp > 0.33 && comp <= 0.67) {
		comp = 'orang';
	} else {
		comp = 'semut';
	}

	// Menentukan rules 
	var hasil = '';

	if (p == comp) {
		hasil = 'SERI';
	} else if (p == 'gajah') {
		if (comp == 'orang') {
			hasil = 'MENANG';
		} else {
			hasil = 'KALAH';
		}
	} else if (p == 'orang') {
		hasil = (comp == 'gajah') ? 'KALAH' : 'MENANG';
	} else if (p == 'semut') {
		hasil = (comp == 'gajah') ? 'MENANG' : 'KALAH';
	} else {
		hasil = 'salah masukkin pilihan';
	}

	// Tampilkan hasil
	alert('Kamu milih ' + p + ' dan komputer milih ' + comp + '\nMaka kamu ' + hasil);
	main = confirm('main lagi?');
}
alert('Terima kasih telah bermain');