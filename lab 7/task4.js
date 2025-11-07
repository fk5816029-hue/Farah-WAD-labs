let softwareHouses=["Microsoft", "Google", "Amazon"];
console.log("Original Array:", softwareHouses);

softwareHouses.shift();  
console.log("After removing first name:", softwareHouses);

softwareHouses.splice(1, 1, "whatsapp");
console.log("After replacing middle name:", softwareHouses);
softwareHouses.push("facebook");
console.log("After adding new name at the end:", softwareHouses);
