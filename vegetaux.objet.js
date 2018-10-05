console.log('hello');

var vegetaux = new Object();
vegetaux.vie = 1;
vegetaux.age = 0;

function generer_vegetaux()
{
    var e = document.getElementsByClassName('case');
    var cpt = 0;
   

    for(var i=0; i< 10; i++)
    {
        console.log(e[cpt].style.backgroundColor);
        
        if(e[cpt].style.backgroundColor === 'rgb(255, 255, 255)')
	    {
		    e[cpt].style.backgroundColor = '#39790D';
	    }
	    else
	    {
            console.log("ca ne marche pas");
        }
        
        cpt ++;
    }
}

generer_vegetaux();
