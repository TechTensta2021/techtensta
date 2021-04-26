// Here you can change the name of the organization to update all pages
var organization = "TechTensta";
var title = "Tech Tensta - Hacker Challenge"

// Note that this header needs to have spaces to the left to align properly
var header = `
<pre>
<a href="index.html" class="uncoloured-link">
     ██╗ ██╗ ████████╗███████╗ ██████╗██╗  ██╗████████╗███████╗███╗   ██╗███████╗████████╗ █████╗  
    ████████╗╚══██╔══╝██╔════╝██╔════╝██║  ██║╚══██╔══╝██╔════╝████╗  ██║██╔════╝╚══██╔══╝██╔══██╗
    ╚██╔═██╔╝   ██║   █████╗  ██║     ███████║   ██║   █████╗  ██╔██╗ ██║███████╗   ██║   ███████║
    ████████╗   ██║   ██╔══╝  ██║     ██╔══██║   ██║   ██╔══╝  ██║╚██╗██║╚════██║   ██║   ██╔══██║
    ╚██╔═██╔╝   ██║   ███████╗╚██████╗██║  ██║   ██║   ███████╗██║ ╚████║███████║   ██║   ██║  ██║
     ╚═╝ ╚═╝    ╚═╝   ╚══════╝ ╚═════╝╚═╝  ╚═╝   ╚═╝   ╚══════╝╚═╝  ╚═══╝╚══════╝   ╚═╝   ╚═╝  ╚═╝
</a>
</pre>`;


// Functions goes here
function includeHeader()
{
  document.write(header);
}

function includeOrganization()
{
  document.write(organization);
}

function includeTitle()
{
  document.title = title;
}

var hemligaOrdet='0100';
var teckensnitt='stockholm type';
var bakgrund='#fdbbd9';
var text='#006ebf';

function setAnswer(page,id){
    var answer = document.getElementById(id).value;
    checkAnswer(page,id,answer);
}
function setAnswer3(page, id1, id2,id3){
    var answer1 = document.getElementById(id1).value;
    var answer2 =document.getElementById(id2).value;
    var answer3 = document.getElementById(id3).value;
    if (page ==2){
      if (answer1.toLowerCase()==teckensnitt&&answer2.toLowerCase()==bakgrund&&answer3.toLowerCase()==text) {
        setColor();
        box3.innerHTML="Korrekt!<br/>"+"Nästa <a href=\"sida3.html\">här</a>";
      }else
        box3.innerHTML = "Fel, försök igen";
    }
}

function checkAnswer(page,id,answer){
  if (page==1){
    if (answer==hemligaOrdet) 
        box2.innerHTML="Korrekt!<br/>"+"Nästa <a href=\"sida2.html\">här</a>";
    else
        box2.innerHTML="Fel, försök igen";

  }else if(page==3){
    if (answer >=10) box4.innerHTML="Korrekt!<br/> Mycket bra jobbat!"
    else box4.innerHTML="Fel svar, försök igen"
  }
}
function setColor(){
  document.body.style.backgroundColor = bakgrund;
  document.body.style.color=text;
}
//window.addEventListener("load",setButton,false);
