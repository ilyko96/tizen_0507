var startTime;
var checkTime;

function startTime() {
	function pad(i) {
		if (i < 10) {
			i="0" + i;
		}
		return i;
	}
	var today = new Date();
	var h = today.getHours();

	var m = today.getMinutes();
	var s = today.getSeconds();
	m = pad(m);
	s = pad(s);
	document.getElementById('divbutton1').innerHTML="Current time: " + h + ":" + m + ":" + s;
	var t = setTimeout(startTime, 250);
}


( function () {
    window.addEventListener( 'tizenhwkey', function( ev ) {
        if( ev.keyName === "back" ) {
            var activePopup = document.querySelector( '.ui-popup-active' ),
                page = document.getElementsByClassName( 'ui-page-active' )[0],
                pageid = page ? page.id : "";

            if( pageid === "one" && !activePopup ) {
                try {
                    tizen.application.getCurrentApplication().exit();
                } catch (ignore) {
                }
            } else {
                window.history.back();
            }
        }
    } );
    
    let pages = [['Home', 'one'],['Task1', 'two'],['jQuery', 'three'],['Video', 'four']];
    let ul = document.createElement('ul');
    for (let i = 0; i < pages.length; i++) {
        let li = document.createElement('li');
        li.class = 'ui-li-anchor';
        let a = document.createElement('a');
        a.href = '#' + pages[i][1];
        a.innerHTML = pages[i][0];
        li.appendChild(a);
        ul.appendChild(li);
        console.log(ul);
    }
    $('.menu_main').each(function() {
    	$(this).innerHTML(ul);
    });
    
    $('#btn_img').click(function() {
        let vis = $('#image').css('visibility');
    	$('#image').css('visibility', vis == 'hidden' ? 'visible' : 'hidden');
    });
    
    $('#str1').css('color', 'red').css('font', '15px Georgia');
    $('#str2').css('color', 'blue').css('font', '14px Arial');
    $('#str3').css('color', 'gray').css('font', '13px Colibri');
    $('#str4').css('color', 'green').css('font', '12px Times New Roman');
    $('#str5').css('color', 'yellow').css('font', '11px Comic Sans MS');
} () );