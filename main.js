

x=+prompt("Введите первое число:"); 
y=+prompt("Введите второе число:"); 
z=+prompt("Введите третье число:");
	
	if ((x>y) && (x<z) || (x<y) && (x>z)) {
        var d = x;
        alert(d);
    }


		else if ((y>x) && (y<z) || (y<x) && (y>z)) {
            var d = y;
            alert(d);
        }
		

			else if ( (z>y) && (z<x) || (z<y) && (z>x) ) {
                var d = z;
                alert(d);
            }
			