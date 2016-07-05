var startTime;
var checkTime;

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
    
    $('#startTime').click( function() {
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
    });
    
    
    let pages = [['Home', 'one'],
                 ['Task1', 'two'],
                 ['jQuery', 'three'],
                 ['Video', 'four'],
                 ['Canvas', 'five']];
    let ul = document.createElement('ul');
    for (let i = 0; i < pages.length; i++) {
        let li = document.createElement('li');
        li.class = 'ui-li-anchor';
        let a = document.createElement('a');
        a.href = '#' + pages[i][1];
        a.innerHTML = pages[i][0];
        li.appendChild(a);
        ul.appendChild(li);
    }
    
    $('.menu_main').each(function(i) {
        console.log($(this));
    	$(this)[0].innerHTML = ul.outerHTML;
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
    
    
    let cnv = $('#cnv')[0];
    let ctx = cnv.getContext('2d');
    
    ctx.fillStyle='white';
    ctx.fillRect(0, 0, cnv.width, cnv.height);
    
    ctx.fillStyle='black';
    ctx.font = "italic 20px Arial";
    ctx.fillText("Tizen",20,20);

    ctx.fillStyle='blue';
    ctx.font = "italic 20px Arial";
    ctx.fillText("Javascript",20,40);
    ctx.fillText("canvas",35,75);

    ctx.fillStyle='red';
    ctx.font = "italic 25px Arial";
    ctx.fillText("HTML5",15,70);
    
    let start = 100,
    	a = 8;
    
    ctx.strokeRect(.5, start + .5, 200.5, 200.5);;
    let m = Math.floor(a / 2);
    let w = cnv.width / a;
    ctx.fillStyle = 'black';
    for (let i = 0; i < a; i++) {
    	for (let j = 0; j < a; j++) {
    		if ((i + j) % 2) continue;
    		ctx.fillRect(i * w, start + j * w, w, w);
    	}
    }
} () );