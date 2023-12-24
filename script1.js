var b = '';

for (var i = 0; i < 9; i++) {
	if (i < 5) {
		for (var j = 0; j <= i; j++) {
			b += '*';
		}
	} else {
		for (var k = 8; k >= i; k--) {
			b += '*';
		}
	}
	b += '\n';
} 
console.log(b);