var penumpang = [];
var tambahPenumpang = function(namaPenumpang, penumpang) {
	// Jika angkot kosong
	if (penumpang.length === 0) {
		// tambah penumpang di awal array
		penumpang.push(namaPenumpang);
		// kembalikan isi array & keluar dari function
		return penumpang;
	} else {
		// telusuri seluruh kursi dari awal
		for (var i = 0; i < penumpang.length; i++) {
			// jika ada kursi kosong
			if (penumpang[i] === undefined) {
				// tambah penumpang di kursi tsb
				penumpang[i] = namaPenumpang;
				// kembalikan isi array & keluar dari function
				return penumpang;
			} else if (penumpang[i].includes(namaPenumpang)) {
				console.log('Mohon maaf nama telah terdaftar');
				return penumpang;
			} else if (i == penumpang.length - 1) {
				penumpang.push(namaPenumpang);
				return penumpang;
			}
		}
	}
}

// tambahPenumpang('Ronald', penumpang);
// tambahPenumpang('Palloan', penumpang);
// console.log(penumpang);