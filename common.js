
const scriptTag = document.createElement('script');
scriptTag.src='https://cdnjs.cloudflare.com/ajax/libs/blueimp-md5/2.18.0/js/md5.min.js';

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

var hemligaOrdet='855f3f976217732f39584c61b922632f';
var teckensnitt='59c73c74b74f0940e5491723ddce698d';
var bakgrund='c7a4e9535d83a84eb64119dd03919259';
var text='7eac7bd4c5ae399d5118c5c09c67fa4d';
var lat='9b68edde3794c229ce5c492869e7fd03';
var long='fc7daed4b11f52f768fd0059202188f5';
var bokchiffer='302438cad422e1b278fd93da4373940b';

function setAnswer(page,id){
    document.head.appendChild(scriptTag);
    var answer = document.getElementById(id).value;
    checkAnswer(page,id,answer);
}
function setAnswer3(page, id1, id2,id3){
    document.head.appendChild(scriptTag);
    var answer1 = document.getElementById(id1).value.toLowerCase();
    var answer2 =document.getElementById(id2).value.toLowerCase();

    if (page ==3){
      var answer3 = document.getElementById(id3).value.toLowerCase();
      if (md5(answer1)==teckensnitt&&md5(answer2)==bakgrund&&md5(answer3)==text) {
        sessionStorage.setItem("a1",answer2);
        sessionStorage.setItem("a2",answer3);
        setColor();
        box3.innerHTML="Korrekt!<br/>"+"Nästa <a href=\"ctf.html\">här</a>";
      }else
        box3.innerHTML = "Fel, försök igen";

    }else if(page==6){
      if(md5(answer1)==lat && md5(answer2)==long)
        box7.innerHTML="Korrekt!<br/>"+"Nästa <a href=\"bokchiffer.html\">här</a>";
      else
        box7.innerHTML = "Fel, försök igen";
    }
}

function checkAnswer(page,id,answer){
  if (page==1){
    if (md5(answer)==hemligaOrdet) 
        box2.innerHTML="Korrekt!<br/>"+"Nästa <a href=\"ifelse.html\">här</a>";
    else
        box2.innerHTML="Fel, försök igen";

  }else if(page==2){
    if (answer >=10) 
      box4.innerHTML="Korrekt!<br/> Mycket bra jobbat!"
      +"Nästa <a href=\"ssgp.html\">här</a>";
    else 
      box4.innerHTML="Fel svar, försök igen";

  }else if(page==4){
    if(answer=='flag{PR7-R8z-kGK-Vrm}'|| answer=='{PR7-R8z-kGK-Vrm}'||answer=='PR7-R8z-kGK-Vrm')
      box5.innerHTML="Korrekt!<br/> Mycket bra jobbat!"+"Nästa <a href=\"quickResponse.html\">här</a>";
    else
      box5.innerHTML="Fel svar, försök igen";

  }else if(page ==5){
    if (answer.toLowerCase== "alla-kan-koda"||answer=='flag{Alla-Kan-Koda}')
      box6.innerHTML="Korrekt!<br/> Mycket bra jobbat!"+"Nästa <a href=\"latLong.html\">här</a>";
    else
      box6.innerHTML="Fel svar, försök igen";

  }else if(page==7){
    if(md5(answer.toLowerCase())==bokchiffer)
      box8.innerHTML="Korrekt!<br/> Mycket bra jobbat!";
    else
      box8.innerHTML="Fel,försök igen";
  }
}
function setColor(){
  var v1=sessionStorage.getItem("a1");
  var v2=sessionStorage.getItem("a2");
  document.body.style.backgroundColor = v1;
  document.body.style.color=v2;
}

