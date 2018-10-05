//cration de l'objet vegetarien male.
var vegetarien_M = new Object();
vegetarien_M.vie = 1;
vegetarien_M.estomac = 0;
vegetarien_M.sexe = "male";

//creation de l'objet vegetarien femelle.
var vegetarien_F = new Object();
vegetarien_F.vie = 1;
vegetarien_F.estomac = 0;
vegetarien_F.sexe = "femelle";

//le tableau (pres a etre melanger) des index de toutes les cases.
var tab_vege_shuffle = 
[
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
    31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
    51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
    61, 62, 63, 64, 65, 66, 67, 68, 69, 70,
    71, 72, 73, 74, 75, 76, 77, 78, 79, 80,
    81, 82, 83, 84, 95, 86, 87, 88, 89, 90,
    91, 92, 93, 94, 95, 96, 97, 98, 99, 100,
    101, 102, 103, 104, 105, 106, 107, 108, 109, 110,
    111, 112, 113, 114, 115, 116, 117, 118, 119, 120,
    121, 122, 123, 124, 125, 126, 127, 128, 129, 130,
    131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 
    141, 142, 143, 144, 145, 146, 147, 148, 149, 150,
    151, 152, 153, 154, 155, 156, 157, 158, 159, 160,
    161, 162, 163, 164, 165, 166, 167, 168, 169, 170,
    171, 172, 173, 174, 175, 176, 177, 178, 179, 180,
    181, 182, 183, 184, 185, 186, 187, 188, 189, 190,
    191, 192, 193, 194, 195, 196, 197, 198, 199, 200,
    201, 202, 203, 204, 205, 206, 207, 208, 209, 210,
    211, 212, 213, 214, 215, 216, 217, 218, 219, 220,
    221, 222, 223, 224, 225
];

//la fonction qui permet de melanger mon tableau (tab_vege_shuffle).
function shuffle(tab_vege_shuffle) 
{
    var j, x, i;
    for (i = tab_vege_shuffle.length - 1; i > 0; i--) 
    {
        j = Math.floor(Math.random() * (i + 1));
        x = tab_vege_shuffle[i];
        tab_vege_shuffle[i] = tab_vege_shuffle[j];
        tab_vege_shuffle[j] = x;
    }
    return tab_vege_shuffle;
}

//melange du tableau (tab_vege_shuffle).
shuffle(tab_vege_shuffle);

// ----------------------------------------------------------------- //

//fonction qui sert a créer le vegetarien male.
function generer_vegetarien_M()
{
    //recuperation avec la 'class' de toutes les case du tableau generer dynamiquement dans 'app.js'. 
    var e = document.getElementsByClassName('case');;

    //un compteur initialiser a zéro.
    var cpt_v_M = 0;

    //on parcour une seule fois le tableau.
    for(var i=0; i<= 0; i++)
    {        
        //si la case est blanche.
        if(e[tab_vege_shuffle[cpt_v_M]].style.backgroundColor === 'rgb(255, 255, 255)')
	    {
            //tu la colorie dans cette couleur (#064830).
            e[tab_vege_shuffle[cpt_v_M]].style.backgroundColor = '#064830';
        }
        //sinon si la case est de la meme couleur qu'un vegetal (#39790D).
        else if(e[tab_vege_shuffle[cpt_v_M]].style.backgroundColor === '#39790D')
	    {
            //tu la deplace et tu la colorie dans cette couleur (#064830).
            e[tab_vege_shuffle[cpt_v_M ++]].style.backgroundColor = '#064830';
        }
        
        //on ajoute 1 au compteur.
        cpt_v_M ++;
    }
}

//on appel la fonction.
generer_vegetarien_M();

function generer_vegetarien_F()
{
    var e = document.getElementsByClassName('case');;

    var cpt_v_F = 0;

    for(var i=0; i<= 0; i++)
    {        
    
        if(e[tab_vege_shuffle[cpt_v_F]].style.backgroundColor === 'rgb(255, 255, 255)')
	    {
            e[tab_vege_shuffle[cpt_v_F]].style.backgroundColor = '#139E6C';
        }
        else if(e[tab_vege_shuffle[cpt_v_F]].style.backgroundColor === '#39790D')
	    {
            e[tab_vege_shuffle[cpt_v_F ++]].style.backgroundColor = '#139E6C';
        }
        else if(e[tab_vege_shuffle[cpt_v_F]].style.backgroundColor === '#064830')
	    {
            e[tab_vege_shuffle[cpt_v_F ++]].style.backgroundColor = '#139E6C';
        }
        
        cpt_v_F ++;
    }
}

generer_vegetarien_F();
