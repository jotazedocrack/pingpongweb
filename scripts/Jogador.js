class Jogador{
    constructor(c, keyboard){
        this.c = c;
        this.keyboard = keyboard;
        this.x=0;
        this.y=0;
        this.vel=5;
        this.gravity = 5;
        this.jump = 20;
        this.R = new Image ();
        this.R.src = "assets/R.png";
        this.R.width=150;
        this.R.height=150;
        this.R.addEventListener('load',()=>{
           this.draw()
           
        })

    }
    management(){
        if (this.keyboard.esquerda) {
            if (this.x > 0)
                this.x-=this.vel;
        }

        if (this.keyboard.direita){ 
            if (this.x < this.c.canvas.width-this.R.width)
                this.x+=this.vel;
            }

        if (this.keyboard.cima){ 
            if (this.y > 0 && this.y - 10)
                this.y-=this.vel;
        }

        if (this.keyboard.baixo){
            if (this.y < this.c.canvas.height-this.R.height - 10) 
                this.y+=this.vel;
        }

                if (this.keyboard.jump) 
                    this.y -= this.jump;
                
                if (this.keyboard.jump==false)
                    if (this.y < this.c.canvas.height-this.R.height){ 
                        this.y+= this.gravity;
                    }
                    }


draw(){
        this.management();
        this.c.drawImage(this.R, this.x, this.y, this.R.width, this.R.height);
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