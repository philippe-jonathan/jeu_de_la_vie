var tableau = [];
var tab = $('#tab');


tab.append('<table></table>'); //créer le tableau




for(y=0; y<15; y++){ // créer les autre ligne (tr)
    var row = tab.append('<tr>'+ tableau[y] + '</tr>')


    for(x=0; x<15; x++){ // créer toute les autres cellules vides qui accueilleront les resultats (td ou th)
        var cellvide = row.append('<td style="background-color: #FFFFFF" class="case" ></td>')

    }

}

// on parcourt les lignes et on initilise a zero
for (var y=0; y<15; y++)
{
    tab[x] =0;
}
