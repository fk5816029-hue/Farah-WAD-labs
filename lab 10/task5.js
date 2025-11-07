Para.style.color="blue";
Para.style.fontSize="20px";

function toggleParagraph(){
    let p=document.getElementById("Para");
    p.style.color="blue";
    p.style.fontSize="20px"
    if (p.style.display==="none"){
        p.style.display="block";
        }
    else{
        p.style.display = "none";
        }
}