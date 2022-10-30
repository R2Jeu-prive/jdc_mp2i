$(document).ready(function() {
    let cardsPerLigne = 5;
    let cardsGap = 30;

    $("#playground").css("width", (400+cardsGap)*cardsPerLigne + "px");
    let scale = $(window).height()*0.6/600;
    console.log(document.height, scale);
    $("#playground").css("transform", "translate(-50%, -50%) scale(" + scale + ")")

    for (let i = 0; i < cardbase.number; i++) {
        let card = new Card(cardbase.cardlist[i].id);
        $("#playground").append(card.BuildHtml(false));
    }

    $("#playground .card").css("margin", cardsGap/2 + "px")

    //make the playground draggable
    $("#playground-screen").on('mousedown', function(e){
        $("#playground-screen").css("cursor", "grabbing");
        var dr = $("#playground").addClass("drag");
        height = dr.outerHeight();
        width = dr.outerWidth();
        ypos = dr.offset().top + height - e.pageY,
        xpos = dr.offset().left + width - e.pageX;
        $(document.body).on('mousemove', function(e){
            var itop = e.pageY + ypos - height;
            var ileft = e.pageX + xpos - width;
            if(dr.hasClass("drag")){
                dr.offset({top: itop,left: ileft});
            }
        }).on('mouseup', function(e){
                $(document.body).off('mousemove');
                dr.removeClass("drag");
                $("#playground-screen").css("cursor", "grab");
        });
    });
})