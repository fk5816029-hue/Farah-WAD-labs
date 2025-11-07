function toggleBulb()
{
    let bulb = document.getElementById("bulbImage");
    if (bulb.src.includes("bulboff"))
        {
            bulb.src = "Images/BULB1.jpg";

        }
    else
        {
            bulb.src = "Images/BULB22.jpg";
        }
}