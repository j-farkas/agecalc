export class Connect{
  constructor(){
    this.players = {player1:{}, player2:{}};
    this.turn = 0;
  }

  getTurn(){
    if (this.turn % 2 === 0){
      return "red";
    }else{
      return "blue";
    }
  }
}

const connect = new Connect();
connect.getTurn();
