$( document ).ready(function(){
	
	$( "p.term-root, p.term-user").each( function(){
		
		$( this ).addClass( "lin-term" );
		promptText = $( this ).hasClass( "term-root" ) ? "root@linode:~#" : "user@linode:~$";
		lines = $( this ).text().split("\n");
		
		termHTML = '<div class="chrome"><div class="term-circle"></div><div class="term-circle"></div><div class="term-circle"></div></div>';
		termHTML += '<div class="term-screen">';

		for(i=1; i<(lines.length-1); i++){
			termHTML += '<span class="term-line"><span class="prompt">'+promptText+'</span><code>'+lines[i]+'</code></span><br />';
		}

		termHTML = termHTML.slice( 0, -6)+'</div>';

		$( this ).html( termHTML );
	});
});
