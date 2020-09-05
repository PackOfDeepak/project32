class Box extends BaseClass {
    constructor(x, y, width, height){
      super(x,y,width,height);
      this.Visibility = true;
      if(this.body.speed<3){
        this.Visibility = true;
      }else{
        this.Visibility = false;
      }

      
    }
    score(){
      if(this.Visibility<0 && this.Visibility>-105){
        score++;
      }
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("brown");
      rect(pos.x, pos.y, this.width, this.height);
    }
  
  };
  