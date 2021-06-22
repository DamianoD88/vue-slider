const start = new Vue (
    {
        el: '#start',
        data: {
            counter: 0,
            photo: [
                'img/img1.jpg',
                'img/img2.jpg',
                'img/img3.jpg',
                'img/img4.jpg',
                'img/img5.jpg',
                'img/img6.jpg',
                'img/img7.jpg',
                'img/img8.jpg'
    
            ] 
        },
        methods: {
            proxPhoto() {
                (this.counter == this.photo.lenght - 1) ? this.counter = 0 : this.counter++;
            },
            prePhoto() {

                if(this.counter == 0) {
                    this.counter = this.photo.lenght - 1;
                } else {
                    this.counter--;
                }
            },
            cambiaPhoto(indice){
                this.counter = indice;
            }
            
        } 
    }
);