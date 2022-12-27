//1. Compare two JSON objects have same properties without order
//a. let obj1 = {name: "person1", age : 5};
//b. let obj2 = {age:5, name: "person1"};

let obj1 = {
    name: "person1", 
    age : 5
};

let obj2 = {
    age:5, 
    name: "person1"
};

var a= JSON.stringify(obj1);  //converting objects into JSON
var b= JSON.stringify(obj2);  //converting objects into JSON

if(a.age != b.age && a.name != b.name){
    console.log("The two objects are not equal");
}
else
{
    console.log("The two objects are equal");
}



// 2. Use the restcountries API url and display all country flags.

var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all", true);
request.send();
request.onload = function() {
    var data = request.response;
    var result = JSON.parse(data);
    for (var obj of result){
        console.log(obj.flags);
    }
}



//3.Print country name, region, sub region, population:

var region = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all", true);
request.send();
request.onload = function() {
    var data = request.response;
    var result = JSON.parse(data);
    for (var obj of result){
        console.log(obj.name, obj.region, obj.subregion, obj.population);
    }
}

