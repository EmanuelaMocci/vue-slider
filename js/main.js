var app = new Vue({
    el: '#root',
    data: {
        titolo: "Visita le nostre cale",
        image: [ "img/mare-1.jpeg", "img/mare-2.jpeg", "img/mare-3.jpeg" ],
        logo: 'img/logo.png',
        imageIndex: 0
    },
    methods: {
        counterLeft: function(){
            this.imageIndex++;

            if(this.imageIndex >= this.image.length){
                this.imageIndex = 0;
            } 
        },
        counterRight: function(){
            this.imageIndex--;

            if(this.imageIndex == -1){
                this.imageIndex = this.image.length -1;
            }
        }
    }
})