var arrButtonClicked = [];
var arrUserGold = [];
var arrComputerGold = [];

// when player clicks the button
  function buttonclick(buttonid)
  {
    if(arrButtonClicked.indexOf(buttonid) == -1) 
    { 
      buttonExecute(buttonid, 'user');

     // computerbuttonclick();

      setTimeout(computerbuttonclick, 1000);

    }
  }
  
  // button function 
  function buttonExecute(buttonid, whoami)
  {
    let gold = 'https://content.codecademy.com/courses/learn-phaser/Treasure%20Hunter/gold%20coin%20shine.png';
      let hole = 'https://content.codecademy.com/courses/learn-phaser/Treasure%20Hunter/dug%20hole.png';
      var imagename = buttonid.replace('btn', 'img');
        var luck = getRandomInt(10) % 2;  
        if(luck == 1)
        {
          if(whoami == 'user')
          {
            arrUserGold.push(1);
          }
          else if (whoami == 'computer')
          {
              arrComputerGold.push(1);
          }
          document.getElementById(imagename).src = gold;
        }
        else if (luck == 0)
        {
          document.getElementById(imagename).src = hole;
        }
        arrButtonClicked.push(buttonid);

        showDisplay();
  }

  function showDisplay()
  {
    document.getElementById('player1').innerText = 'Player 1 takes ' + arrUserGold.length + ' gold(s)!';
    document.getElementById('computer').innerText = `Computer takes ${arrComputerGold.length} gold(s)!`;  
    if(arrButtonClicked.length == 36)
    {
      if (arrUserGold.length > arrComputerGold.length)
        document.getElementById('winner').innerText = 'Player 1 wins!';
      else if (arrUserGold.length == arrComputerGold.length)
        document.getElementById('winner').innerText = 'Match tie!';
      else
        document.getElementById('winner').innerText = 'Computer wins!';
    }
  }
  

  function computerbuttonclick()
  {
    while(true)
    {
      var randomid = getRandomInt(37);
      if(randomid > 0 && randomid < 37 && arrButtonClicked.indexOf('btn' + randomid) == -1)
      {
        //alert('btn' + randomid);
        buttonExecute('btn' + randomid, 'computer');
        break;
      }
    }
  }

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }