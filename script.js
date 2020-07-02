/*parts from CSCU9N5 Practical, University of Stirling*/
function climb() {
    document.getElementById("bullet").style.animationPlayState = "running";
    
    /*used to make several clicks possible*/
    setTimeout(function(){document.getElementById("bullet").style.animationPlayState = "paused"},1800);
    /*sound from http://soundbible.com/783-Click.html*/
    document.getElementById("bigclimb").play();
    
}

/*from CSCU9N5 Practical, University of Stirling*/
var inum = 1;
                                            
                                                
function newSlide1(inum)
{
    /*pictures from http://blog.otoro.net/2017/10/29/visual-evolution-strategies/*/
  var iname = "images/openes"+ ".gif";
  var newimg = document.getElementById("slide");
  newimg.setAttribute("src", iname);
 
}

function newSlide2(inum)
{
  var iname = "images/schaffer"+ ".png";
  var newimg = document.getElementById("slide");
  newimg.setAttribute("src", iname);

}

function nextSlide()
{
  inum = inum + 1;
  newSlide1(inum);
  /*sound from http://soundbible.com/783-Click.html*/
  document.getElementById("bigclimb").play();
  document.getElementById("btnSlPrev").disabled = false;
  if (inum == 2) {
    document.getElementById("btnSlNxt").disabled = true;
  }
}

function prevSlide()
{
  inum = inum - 1;
  newSlide2(inum);
  /*sound from http://soundbible.com/783-Click.html*/
  document.getElementById("bigclimb").play();
  document.getElementById("btnSlNxt").disabled = false;
  if (inum == 1) {
    document.getElementById("btnSlPrev").disabled = true;
  }
}