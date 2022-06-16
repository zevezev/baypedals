export function imgSrcFromArrayBuffer( buffer:ArrayBuffer ) {
    var binary = '';
    var bytes = new Uint8Array( buffer );
    var len = bytes.byteLength;
    for (var i = 0; i < len; i++) {
       binary += String.fromCharCode( bytes[ i ] );
    }
    const b64 =  window.btoa( binary );
    return `data:image/jpg;base64, ${b64}`
  }