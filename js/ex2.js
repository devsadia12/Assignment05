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


