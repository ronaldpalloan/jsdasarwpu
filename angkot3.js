var jmlAngkot = 10;
var angkotBeroperasi = 6;
var noAngkot = 1;

// if (for (noAngkot = 1; noAngkot <= angkotBeroperasi; noAngkot++) {
// 	console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik.')
// 	} else {
// 		console.log('Angkot No. ' noAngkot + ' sedang tidak beroperasi.');
// 	}

for (noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {
	if (noAngkot <= angkotBeroperasi) {
		console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik.');
	} else {
		console.log('Angkot No. ' + noAngkot + ' sedang tidak beroperasi.');
	}
}

	