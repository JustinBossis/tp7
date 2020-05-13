function canvasApp(canvas){
    let context = document.getElementById(canvas).getContext("2d");
    context.beginPath();
    context.lineWidth = 3;
    context.fillStyle = "yellow";
    context.arc(100,100,75, 0, 2*Math.PI);
    context.closePath();
    context.stroke();
    context.fill();

    
    context.beginPath();
    context.fillStyle = "black";
    context.arc(65,70,10, 0, 2*Math.PI);
    context.closePath();
    context.fill();
    
    context.beginPath();
    context.fillStyle = "black";
    context.arc(135,70,10, 0, 2*Math.PI);
    context.closePath();
    context.fill();

    
    context.beginPath();
    context.lineWidth = 6;
    context.arc(99,120,35, 0, Math.PI);
    context.stroke();
    context.closePath();

    context.textBaseline = "middle";
    context.textAlign = "center";
    context.font = "20px sans-serif";
    context.fillText("Hello Canvas!", 100, 200);
}

function displayDateTime(){
    let date = document.getElementById("date");
    let heure = document.getElementById("heure");
    const options = {weekday:"long", year: "numeric", month:"long", day: "numeric"};
    let d = new Date();
    date.innerText = d.toLocaleDateString('fr-FR', options);
    heure.innerText = d.toLocaleTimeString('fr-FR');
}

function displayDecrementSeconds(time){
    let p = document.getElementById("decrement");
    if(time == 0){
        p.innerHTML = "Le dessin est affiché ci-dessous";
        canvasApp("canvas");
    }else{
        p.innerHTML = "Le dessin va s'afficher après <b>"+time+"</b>s";
        setTimeout(displayDecrementSeconds, 1000, time-1);
    }
}

function main(){
    setInterval(displayDateTime, 1000);
    displayDecrementSeconds(58);
}

main();