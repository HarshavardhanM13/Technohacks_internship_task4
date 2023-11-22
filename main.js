let features = document.getElementsByClassName('features');
let featuresContent = document.getElementsByClassName('featuresContent');

function openfeature(feature){
    for(Feature of features){
        Feature.classList.remove('onfeature');
    }
    for(featureCount of featuresContent){
        featureCount.classList.remove('onContent');
    }
    event.currentTarget.classList.add('onfeature');
   let x = document.getElementById(feature);
   x.classList.add('onContent');
}


let nav = document.getElementById('navbar');
console.log(nav)
function opennav(){
    nav.style.right = '0';
}
function closenav(){
    nav.style.right = "-200px";
}