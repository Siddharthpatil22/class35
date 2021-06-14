class Form{

constructor(){
this.input=createInput("Name")
this.button=createButton("Play")
this.greeting=createElement('h2')
this.title=createElement('h2')

}

display(){
this.title.html("Car Racing Game")
this.title.position(446,100)

this.input.position(380,370)
this.button.position(450,470)
this.button.mousePressed(()=>{
    this.input.hide();
    this.button.hide();

var name=this.input.value();
playercount=playercount+1
player.updateCount(playercount);
this.greeting.html("HELLO "+name)
this.greeting.position(400,300)
})
}



}