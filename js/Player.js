class Player{
constructor(){
 this.name=null;   
}
//this function get the player count from the data 

    getCount(){
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value",function(data){
          playercount = data.val();
        })
      }
       

//this function updates the player count in the database

      updateCount(count){
        database.ref('/').update({
          playerCount: count
        });
      }




}