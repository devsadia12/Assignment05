var classification = [ "John Hill" , "Mary Jane", "Gary Vee", "Paricia Mills", "Helen Hall", "Paul Green" ];
 var bestThree = classification.slice(-3);
  document.getElementById("best_students").innerHTML = bestThree;

  var course = {
        'title': "Learn to Code in Python 3",
        'categories': ['programming', 'technology', 'python'],
        '5_stars_reviews': 420,
        '4_stars_reviews': 80,
        '3_stars_reviews': 33,
        '2_stars_reviews': 20,
        '1_stars_reviews': 4
    }
                
    //console.log(course.title);
    document.getElementById("course_title").innerHTML = course.title;
//console.log(course.categories[0]);

document.getElementById("main_category").innerHTML = course.categories[0];
    
    var shoppingList = ["Milk", "Butter", "Juice", "Bread", "Beer", "Rice", "Potatoes", "Chocolate"]; 
shoppingList.pop();
console.log(shoppingList);

shoppingList.unshift("Chocolate");
console.log(shoppingList);

var shoppingList = ["Milk", "Butter", "Juice", "Bread", "Beer", "Rice", "Potatoes", "Chocolate"];
shoppingList [8] = "Cheese";
shoppingList [9] = "Eggs";
console.log(shoppingList);


//The formula for the conversion is: F = (9 * C / 5) + 32

//"38", "24", "-1"
function calcAverage (C){
    var average = (9 * C / 5) + 32
    return average
}
document.getElementById("fahr_1").innerHTML = calcAverage(38);
document.getElementById("fahr_2").innerHTML = calcAverage(24);
document.getElementById("fahr_3").innerHTML = calcAverage(-1);
//console.log(calcAverage(38));
//console.log(calcAverage(24));
//console.log(calcAverage(-1));

var course = {
        'title': "Learn to Code in Python 3",
        'categories': ['programming', 'technology', 'python'],
        '5_stars_reviews': 420,
        '4_stars_reviews': 80,
        '3_stars_reviews': 33,
        '2_stars_reviews': 20,
        '1_stars_reviews': 4
    }
function get_Total_reviews () {
var total = course['5_stars_reviews'] + course['4_stars_reviews'] + course['3_stars_reviews'] + course['2_stars_reviews'] + course['1_stars_reviews'] ;
return total
} 
//console.log(get_Total_reviews ());

function get_Percentage () {
    var average = get_Total_reviews(); 
    var percentage = (course['5_stars_reviews'] / average) * 100;
    return Math.round(percentage) + "%";
}
//console.log(get_Percentage ());
document.getElementById("reviews_5_stars").innerHTML = get_Percentage();
