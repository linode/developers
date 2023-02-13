(() => {
  var lsk = 'x-banner-2023-23-13',
      bc = 'has-banner',
      $bd = document.querySelector( 'body' ),
      $bn = document.getElementById( lsk ),
      $x = $bn.querySelector( '.c-message__x' ),
      lsv = localStorage.getItem( lsk ),
      rm = function(){
        $bd.classList.remove( bc );
        $bn.remove();
      };
  if ( lsv ) { rm(); return; }
  $bd.classList.add( bc );
  $x.addEventListener('click',function(){
    localStorage.setItem( lsk, true );
    rm();
  });
})();
