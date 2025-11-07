function NewClass(){
  let p=document.getElementById("Para"); 
  const style=document.createElement("style");
  style.innerHTML = `
    .SecondClass{
      color: white;
      display: table;
      border: 3px solid blue;
      padding: 5px;
      background-color: green;
      font-weight: bold;
    }`;
  document.head.append(style);
  p.classList.add("SecondClass");
  console.log("New class added!");
}