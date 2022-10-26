class Card{
    constructor(cardId){
        this.id = cardId;
        let card = getCardData(this.id)
        this.title = card.title;
        this.color = card.color;
        this.desc = card.desc;
    }

    BuildHtml(){
        let element = $('<div class="card ' + this.color + '" id="' + this.id + '"></div>');
        $(element).append('<p class="card-title">' + this.title + '</p>');
        $(element).append('<div class="card-picture-frame"></div>');
        $(element.find(".card-picture-frame")).append('<img src="img/cards/' + this.id + '.jpg" class="card-picture">');
        $(element.find(".card-picture-frame")).append('<div class="card-picture-shadow"></div>');
        $(element).append('<div class="card-picture-holder"></div>');
        $(element).append('<i class="card-desc">" ' + this.desc + ' "</i>');
        return element
    }
}