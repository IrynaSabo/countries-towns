var land = document.getElementById("land");
var finland = document.getElementById("finland");
var norge = document.getElementById("norge");
var stad_s = document.getElementById("stad_s"); 
var stad_f = document.getElementById("stad_f");
var stad_n = document.getElementById("stad_n");

function createNode(element){
    return document.createElement(element);
}
function append(parent,el){
    return parent.appendChild(el);
}

fetch("land.json")
 .then( 
  function(response){
      return response.json();
  })
  .then(
    function(country){ 
        console.log("request saccesful", country);       
       
        for(i=0; i< country.length;i++ ){
            console.log(country[i].countryname)
        document.getElementById("sverige").innerHTML=country[0].countryname;
        document.getElementById("finland").innerHTML=country[1].countryname;
        document.getElementById("norge").innerHTML=country[2].countryname;}                
       
       
})

.catch(
function(error){
    console.log("request filed", error);
})



fetch("stad.json")
 .then( 
  function(response){
      return response.json();
  })
  .then(
    function(town){ 
        console.log("request saccesful",town);       
      town.sort(function(a, b){
       return b.population - a.population;
       });
        for(i=0; i< town.length;i++ ){
            console.log(town[i].population)
            var x = town[i].countryid;
            switch(x){
                case 1:
            var sverige = document.getElementById("sverige"); 
            let li3 = createNode('li');             
            span3 = createNode('span');
            span3.innerHTML = `<br/> ${town[i].stadname} <br/> ${town[i].population}`; 
            append(li3, span3);
            append(stad_s, li3);
            append(sverige, stad_s);        
                    break;
                case 2:            
            let li1 = createNode('li');             
            span1 = createNode('span');
            span1.innerHTML = `<br/> ${town[i].stadname} <br/> ${town[i].population}`; 
            append(li1, span1);
            append(stad_f, li1);
            append(finland, stad_f);        
                    break;        
                case 3:
             let li2 = createNode('li'),
            span2 = createNode('span');
            span2.innerHTML = `<br/> ${town[i].stadname} <br/> ${town[i].population}`; 
            append(li2, span2);
            append(stad_n, li2);
            append(norge, stad_n);        
                    break;
            }               
                
            
        }
       
})

.catch(
function(error){
    console.log("request filed", error);
})