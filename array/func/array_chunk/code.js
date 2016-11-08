
function array_chunk(input,size){
//-------------------------------------------------------
//函式: array_chunk()
//用途: 將陣列元素,依指定的各數,予以分組
//-------------------------------------------------------
	for(var x, i = 0, c = -1, l = input.length, n = []; i < l; i++){
		(x = i % size) ? n[c][x] = input[i] : n[++c] = [input[i]];
	}
	return n;
}
