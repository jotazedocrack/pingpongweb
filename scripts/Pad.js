class Pad{
    constructor(c, keyboard){
        this.c = c;
        this.keyboard = keyboard;
        this.vel=20;
        this.largura = 20;
        this.altura = 100;
        this.x=10;
        this.y=(c.canvas.height/2)-(this.altura/2);

        this.playerImagem = new Image ();
        this.playerImagem.width = 20;
        this.playerImagem.height = 100;
        this.playerImagem.src = "assets/R.png";
        this.playerImagem.addEventListener('load', () =>{
            this.draw()
        });
    }

    management(){

        /*
        if (this.keyboard.esquerda) {
            if (this.x > 0)
                this.x-=this.vel;
        }

        if (this.keyboard.direita){ 
            if (this.x < this.c.canvas.width-this.width)
                this.x+=this.vel;
            }
            */

        if (this.keyboard.cima){ 
            if (this.y > 0 && this.y - 10)
                this.y-=this.vel;
        }

        if (this.keyboard.baixo){
            if (this.y < this.c.canvas.height-this.altura - 10) 
                this.y+=this.vel;
        }
/*
                if (this.keyboard.jump) 
                    this.y -= this.jump;
                
                if (this.keyboard.jump==false)
                    if (this.y < this.c.canvas.height-this.R.height){ 
                        this.y+= this.gravity;
                    } */
                    }


draw(){
        this.management();
        this.c.drawImage(this.playerImagem, this.x, this.y, this.playerImagem.width, this.playerImagem.height);
    }
}







/*
management(){
    if (this.keyboard.esquerda) 
        if (this.x > 0)
            this.x-=this.vel;
    if (this.keyboard.direita) 
        if (this.x < this.c.canvas.width-this.R.width){
            this.x+=this.vel;
        }
    if (this.keyboard.cima) 
        if (this.y > 0)
            this.y-=this.vel;
    if (this.keyboard.baixo)
        if (this.y < this.c.canvas.height-this.R.height) 
            this.y+=this.vel;
}

*/