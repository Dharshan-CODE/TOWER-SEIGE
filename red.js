class red extends BaseClass{
    constructor(x,y){
      super(x,y,30,30);
     
    }
  
    display() {
      if(this.body.speed<3){
        fill('red');
        stroke("white");
        super.display();
      }
     else{
       World.remove(world,this.body);
       push();
       this.Visibility = this.Visibility-5;
       tint(255,this.Visibility);
     
       pop();
     }
     
      
    }
  }
  