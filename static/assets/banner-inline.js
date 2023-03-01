(function(){
  var lsk = 'x-banner-2023-23-13',
      bc = 'has-banner',
      $ht = document.querySelector( 'html' ),
      $bn = document.getElementById( lsk ),
      $x = $bn.querySelector( '.c-message__x' ),
      lsv = localStorage.getItem( lsk ),
      rm = function(){
        $ht.classList.remove( bc );
        $bn.remove();
      };
  if ( lsv ) { rm(); return; }
  $ht.classList.add( bc );
  $x.addEventListener('click',function(){
    localStorage.setItem( lsk, true );
    rm();
  });
})();
