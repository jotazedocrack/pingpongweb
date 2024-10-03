class Bola{
    constructor(c){
        this.pad= pad;
        this.c = c;
        this.keyboard = keyboard;
        this.vel=10;
        this.largura = 50;
        this.altura = 50;
        this.dirX=0;
        this.dirY=0;
        this.movendo=false;
        this.x=(c.canvas.width/2)-(this.largura/2);
        this.y=(c.canvas.height/2)-(this.altura/2);

        this.bolaImagem = new Image ();
    this.bolaImagem.width = 50;
    this.bolaImagem.height = 50;
    this.bolaImagem.src = "assets/bolapica.png";
    this.bolaImagem.addEventListener('load', () =>{
        this.draw()
    });

    }

    

startGame(){

    this.movendo=true;
    this.dirX=-1;
    this.dirY=(Math.random() * 10 > 5 ? -1 : 1);
}

    management(){

  if(this.movendo){
    this.x+=(this.dirX*this.vel);
    this.y+=(this.dirY*this.vel);

    if(this.x >= (this.c.canvas.width-this.largura)){
        this.dirX = -1;
        pontoJogador1++;
        this.resetBall();
    }
    if (this.x<=0){
        this.dirX = 1;
        pontoJogador2++;
        this.resetBall();
    }

   
    if(this.y >= (this.c.canvas.height-this.altura)){
        this.dirY *= -1; 
    }
    if (this.y<=0){
        this.dirY *= -1;
    }

if ((this.x <= this.pad.x + this.pad.largura) && (this.x + this.largura >= this.pad.x)
&& ((this.y +this.altura >= this.pad.y) && (this.y <= this.pad.altura + this.pad.y)))
{
    this.dirX = 1;
}

if ((this.x <= this.pad.x + this.pad.largura) && (this.x + this.largura >= this.pad.x)
&& ((this.y +this.altura >= this.pad.y) && (this.y <= this.pad.altura + this.pad.y)))
{
    this.dirX = 1;
    this.dirY = ((this.y + (this.altura/2))-(this.pad.y+ (this.pad.altura/2)))/16;
}

  }
}

resetBall(){
    this.movendo=false;
    setTimeout(() =>
    {
        this.x=(this.c.canvas.width/2)-(this.largura/2);
        this.y=(this.c.canvas.height/2)-(this.altura/2);
        pad.x=5;
        pad.y=(this.c.canvas.height/2)-(pad.altura/2);
        cpu.x=(this.c.canvas.width - cpu.largura - 5);
        cpu.y=(this.c.canvas.height/2)-(cpu.altura/2);
    }, 1000);
}

draw(){
        this.management();
        this.c.drawImage(this.bolaImagem, this.x, this.y, this.bolaImagem.width, this.bolaImagem.height);
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