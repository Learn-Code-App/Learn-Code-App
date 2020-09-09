var coins = 0;
var noExploit = 0;
var visits = 0;
  function SaveCoins() {
  localStorage.setItem("coins", coins);
  localStorage.setItem("backup", noExploit);
  localStorage.setItem("visits", visits);
  }
window.onload = function () {
  coins = localStorage.getItem("coins")
  noExploit = localStorage.getItem("backup")
  visits = localStorage.getItem("visits")
  if (coins == null || noExploit == null || visits == null) {
    coins = 0
    noExploit = 0
  }
  coins = noExploit
  visits += 1
}
  function SaveVisits() {
  localStorage.setItem("visits", visits);
  }
function Check() {
    window.setTimeout(function(){
if (coins >= 1 && noExploit >= 1){ // why am i mistaking lua for js
  SaveCoins()
} else {
    coins=0
    noExploit=0
    SaveVisits()
}
  Check()
      
  },1);
}
  
Check()