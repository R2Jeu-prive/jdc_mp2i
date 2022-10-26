const cardbase = JSON.parse(
    `{"number": 12, 
        "cardlist": [ 
            { 
                "title": "La Très Sainte Craie", 
                "id": "craie",
                "color": "grey", 
                "desc": "On raconte que les solutions de tous les exos de maths se cachent en cet artéfact millénaire" \
            }, 
            {
                "title": "Corentin Ouisse",
                "id": "corentin",
                "color": "magenta",
                "desc": "J'ai été un chat dans une vie antérieure. J'ai donc le devoir moral d'être insupportable"
            },
            {
                "title": "Pierre Gueguen",
                "id": "pierre",
                "color": "blue",
                "desc": "Vous savez moi je ne crois pas qu'il y ai de bonne ou de mauvaise situation, sauf le premier DS"
            },
            { 
                "title": "Alpha", 
                "id": "alpha",
                "color": "grey", 
                "desc": "On raconte que les solutions de tous les exos de maths se cachent en cet artéfact millénaire" \
            }, 
            {
                "title": "Beta",
                "id": "beta",
                "color": "magenta",
                "desc": "J'ai été un chat dans une vie antérieure. J'ai donc le devoir moral d'être insupportable"
            },
            {
                "title": "Delta",
                "id": "delta",
                "color": "blue",
                "desc": "Vous savez moi je ne crois pas qu'il y ai de bonne ou de mauvaise situation, sauf le premier DS"
            },
            { 
                "title": "Qsd", 
                "id": "qsd",
                "color": "grey", 
                "desc": "On raconte que les solutions de tous les exos de maths se cachent en cet artéfact millénaire" \
            }, 
            {
                "title": "Qs",
                "id": "qs",
                "color": "magenta",
                "desc": "J'ai été un chat dans une vie antérieure. J'ai donc le devoir moral d'être insupportable"
            },
            {
                "title": "Ddd",
                "id": "ddd",
                "color": "blue",
                "desc": "Vous savez moi je ne crois pas qu'il y ai de bonne ou de mauvaise situation, sauf le premier DS"
            },
            { 
                "title": "Oui", 
                "id": "oui",
                "color": "grey", 
                "desc": "On raconte que les solutions de tous les exos de maths se cachent en cet artéfact millénaire" \
            }, 
            {
                "title": "Non",
                "id": "non",
                "color": "magenta",
                "desc": "J'ai été un chat dans une vie antérieure. J'ai donc le devoir moral d'être insupportable"
            },
            {
                "title": "Surement",
                "id": "surement",
                "color": "blue",
                "desc": "Vous savez moi je ne crois pas qu'il y ai de bonne ou de mauvaise situation, sauf le premier DS"
            }
        ]
    }`
);

function getCardData(cardId){
    let card = cardbase.cardlist.find(card => card.id == cardId);
    if(card != undefined){
        return card;
    }else{
        throw "Carte " + cardId + " inconnue !";
    }
}
