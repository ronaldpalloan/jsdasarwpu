var penumpang = [];
var tambahPenumpang = function(namaPenumpang, penumpang) {
	if (penumpang.length === 0) {
		penumpang.push(namaPenumpang);
		return penumpang;
	} else {
		for (var i = 0; i < penumpang.length; i++) {
			if (penumpang[i] === undefined) {
				if (penumpang.includes(namaPenumpang)) {
					console.log('nama telah terdaftar');
				} else {
					penumpang[i] = namaPenumpang;
				}
				return penumpang;
			} else if (i === penumpang.length -1) {
				if (penumpang.includes(namaPenumpang)) {
					console.log('nama telah terdaftar');
				} else {
					penumpang.push(namaPenumpang);
				}
				return penumpang;
			} 
		}
	}
}

function hapusPenumpang(namaPenumpang, penumpang) {
	if (penumpang.length === 0) {
		console.log('Angkot kosong, gak ada penumpang');
		return penumpang;
	} else {
		for (var i = 0; i < penumpang.length; i++) {
			if (penumpang[i] === namaPenumpang) {
				penumpang[i] = undefined;
				return penumpang;
			} else if (i === penumpang.length - 1) {
				console.log('Tidak ada penumpang yang bernama ' + namaPenumpang);
				return penumpang;
			}
		}
	}
}