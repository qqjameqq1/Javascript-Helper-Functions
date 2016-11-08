
function array_product ( input ) {
//-------------------------------------------------------
//函式: array_product()
//用途: 陣列連乘積
//-------------------------------------------------------
    // http://kevin.vanzonneveld.net
    // +   original by: Waldo Malqui Silva
    // *     example 1: array_product([ 2, 4, 6, 8 ]);
    // *     returns 1: 384

    var Index = 0, product = 1;
    if ( input instanceof Array ) {
        while ( Index < input.length ) {
            product *= ( !isNaN( input [ Index ] ) ? input [ Index ] : 0 );
            Index++;
        }
    } else {
        product = null;
    }

    return product;
}
