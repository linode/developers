$( document ).ready(function(){
	
	$( "p.term-root, p.term-user").each( function(){
		
		$( this ).addClass( "lin-term" );
		promptText = $( this ).hasClass( "term-root" ) ? "root@linode:~#" : "bob@linode:~$";
		
		lines = $( this ).text().split("\n");
		$( this ).html("");
		
		termHTML = '<div class="chrome"><div class="term-circle"></div><div class="term-circle"></div><div class="term-circle"></div></div>';
		termHTML += '<div class="term-screen">';

		for(i=1; i<(lines.length-1); i++){
			termHTML += '<span class="term-line"><span class="prompt">'+promptText+'</span><code>'+lines[i]+'</code></span>';

			if( i<(lines.length-2)){
				termHTML += "<br />";
			}
		}

		termHTML += '</div>';

		$( this ).append( termHTML );
	});
});
