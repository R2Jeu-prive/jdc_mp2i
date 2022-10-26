$(document).ready(function() {
    let cardIds = GetAllIdsRandomly();

    $("#footprint").on("click", function(){
        let card = new Card(cardIds.shift());
        if(cardIds.length == 0){
            cardIds = GetAllIdsRandomly();
        }
        $("#card-holder").append(card.BuildHtml());
    });
});

function GetAllIdsRandomly(){
    let ids = [];
    //fetch
    for (let i = 0; i < cardbase.number; i++) {
        ids.push(cardbase.cardlist[i].id);
    }
    //shuffle
    for (let i = 0; i < cardbase.number; i++){
        //TODO
    }
}