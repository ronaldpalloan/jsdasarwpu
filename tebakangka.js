alert('Tebak angka 1-10 \nkamu punya 3 kesempatan');
// Bangkitkan angka random
var main = true;
while (main) {

	var angkaRandom = Math.floor((Math.random() * 10) + 1);
	console.log(angkaRandom);

	// Masukkan angka
	for (var i = 2; i >= 0; i--) {
		var tebakAngka = prompt('Pilih angka random 1-10!');
		hasil = '';
		// rules
		if (tebakAngka == angkaRandom) {
			hasil = 'tebakan Anda BENAR!';
			i = -1;
		} else if (tebakAngka > angkaRandom) {
			hasil = 'tebakan Anda terlalu tinggi';
		} else if (tebakAngka < angkaRandom) {
			hasil = 'tebakan Anda terlalu rendah';
		} else {
			hasil = 'salah masukkin angka';
		} 

		// tampilkan ke layar
		if (i > 0) {
			alert(hasil + '\ntersisa ' + i + ' kesempatan lagi');
		} else if ( i == 0) {
			alert(hasil + '\nkesempatan Anda telah habis');
		} else {
			alert(hasil);
		}
	} main = confirm('coba lagi?');
}
alert('good bye');