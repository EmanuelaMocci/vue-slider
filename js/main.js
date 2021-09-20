var app = new Vue({
    el: '#root',
    data: {
        titolo: "Visita le nostre cale",
        image: [ "img/mare-1.jpeg", "img/mare-2.jpeg", "img/mare-3.jpeg", "img/mare-6.jpeg" ],
        logo: 'img/logo.png',
        imageIndex: 0,
        autoplayID: null
    },
    methods: {
        counterRight: function(){
            this.imageIndex++;

            if(this.imageIndex >= this.image.length){
                this.imageIndex = 0;
            } 
        },
        counterLeft: function(){
            this.imageIndex--;

            if(this.imageIndex == -1){
                this.imageIndex = this.image.length -1;
            }
        },
        mounted: function() {
            this.autoplayID = setInterval(this.counterRight, 2000);
        }
    }
})