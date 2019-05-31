export class Connect{
  constructor(){
    this.players = {player1:{}, player2:{}};
    this.turn = 0;
    this.board = {};
    this.gameOver = false;
  }

  getTurn(){
    if (this.turn % 2 === 0){
      return "red";
    }else{
      return "blue";
    }
  }

  checkWinner(move){
    let possible = {l:1,ul:1,dl:1,u:1,ur:1,r:1,dr:1}
    if(move%7 <= 3){
      possible.l = 0;
      possible.ul = 0;
      possible.dl = 0;
    }
    if(move%7 >= 5){
      possible.r = 0;
      possible.ur = 0;
      possible.dr = 0;
    }
    if(move < 21){
      possible.u = 0;
      possible.ul = 0;
      possible.ur = 0;
    }
    if(move >= 21){
      possible.dr = 0;
      possible.dl = 0;
    }
    if(possible.l === 1){
      let winner = {}
      winner[this.board[move]] = 1;
      for(let i = move-1; i > move-4; i--)
      {
        winner[this.board[i]]++;
      }if(winner[this.board[move]] === 4){
        this.gameOver = true;
        console.log("left");
        return this.gameOver;
      }
    }
    if(possible.ul === 1){
      let winner = {}
      winner[this.board[move]] = 1;
      for(let i = move-8; i > move-32; i-=8)
      {
        winner[this.board[i]]++;
      }
      if(winner[this.board[move]] === 4){
        this.gameOver = true;
        console.log("upeft");
        return this.gameOver;
      }
    }
    if(possible.u === 1){
      let winner = {}
      winner[this.board[move]] = 1;
      for(let i = move-7; i > move-21; i-=7)
      {
        winner[this.board[i]]++;
      }
      if(winner[this.board[move]] === 4){
        this.gameOver = true;
        console.log("up");
        return this.gameOver;
      }
    }
    if(possible.ur === 1){
      let winner = {}
      winner[this.board[move]] = 1;
      for(let i = move-6; i > move-24; i-=6)
      {
        winner[this.board[i]]++;
      }
      if(winner[this.board[move]] === 4){
        this.gameOver = true;
        console.log("upright");
        return this.gameOver;
      }
    }
    if(possible.dr === 1){
      let winner = {}
      winner[this.board[move]] = 1;
      for(let i = move+8; i <move+32; i+=8)
      {
        winner[this.board[i]]++;
      }
      if(winner[this.board[move]] === 4){
        this.gameOver = true;
        console.log("downright");
        return this.gameOver;
      }
    }
    if(possible.dl === 1){
      let winner = {}
      winner[this.board[move]] = 1;
      for(let i = move+6; i <move+24; i+=6)
      {
        winner[this.board[i]]++;
      }
      if(winner[this.board[move]] === 4){
        this.gameOver = true;
        console.log("downleft");
        return this.gameOver;
      }
    }
    if(possible.r === 1){
      let winner = {}
      winner[this.board[move]] = 1;
      for(let i = move+1; i < move+4; i++)
      {
        winner[this.board[i]]++;
      }
      if(winner[this.board[move]] === 4){
        this.gameOver = true;
        console.log("right");
        return this.gameOver;
      }
    }
  }
}

const connect = new Connect();
connect.getTurn();
