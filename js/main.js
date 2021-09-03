// function for typing effect

const typing = function(textElement,words,wait=3000){

    this.textElement = textElement;
    this.words = words;
    this.txt = '';
    this.index = 0;
    this.wait = parseInt(wait,10);
    this.type();
    this.isDeleting = false
}