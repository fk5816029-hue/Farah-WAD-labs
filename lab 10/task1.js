function changeClass(){
  let a=document.querySelector(".abc");
  console.log("Old class name:", a.className);

  a.className = "NEW CLASS";
  a.textContent = "Aqsa Khan";
  console.log("New class name:", a.className);
  a.style.color = "green";
  a.style.fontWeight = "bold";
  a.style.fontSize = "20px";
}