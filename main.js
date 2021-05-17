name_of_people=[];

function submit(){
     var name= document.getElementById("Display_Guest").value;
     name_of_people.push(name);
     console.log(name_of_people);
document.getElementById("display_name").innerHTML=name_of_people;
document.getElementById("submit_button").style.display="inline-block";
document.getElementById("sort_button").style.display="inline-block";
document.getElementById("search_button").style.display="inline-block";
document.getElementById("show_button").style.display="inline-block";

var length_of_name_of_people=name_of_people.length;
var display_name_of_people_sorting;
console.log(length_of_name_of_people);
for(var k=0;k<length_of_name_of_people;k++){
    display_name_of_people_sorting.push("<h4>Name-"+name_of_people[k]+"</h4>");
    console.log(display_name_of_people);
}
}

function show(){
    var list= document.getElementById("display_name_without_commas").value;
    name_of_people.push(list);
    document.getElementById("display_name_without_commas").innerHTML=name_of_people;
    document.getElementById("submit_button").style.display="inline-block";
    document.getElementById("sort_button").style.display="inline-block";
    document.getElementById("search_button").style.display="inline-block";
    document.getElementById("show_button").style.display="inline-block";

    console.log(name_of_people);
    var display=display_name_of_sorting.join("");
    console.log(display);
    document.getElementById("display_name_without_commas").innerHTML=display;}
   

    function sort(){
    
        name_of_people.sort();
        console.log(name_of_people);
        
        var display_name_of_people_sorting=[];
        var length_of_name_of_people=name_of_people.length;
    
        console.log(length_of_name_of_people);
        for(var m=0; m<length_of_name_of_people;m++){
            display_name_of_people_sorting.push("<h4>⭐"+name_of_people[m]+"</h4>");
            console.log(display_name_of_people_sorting);  
        }
        var DN=display_name_of_people_sorting.join("");
        
        document.getElementById("display_name_with_commas").innerHTML=DN;
    
    
    
    }
       



function search()
{
    var s= document.getElementById("Search").value;
    var found=0;
    var j;
    for(j=0; j<name_of_people.length; j++)
  {
    if(s==name_of_people[j]){
        found=found+1;
    }
  }
document.getElementById("search_ans").innerHTML="name found "+found+" time/s"
console.log("name found "+found+" time/s")

}