/**
 * 1. Create an object that represents your favourite coffee. Please include coffee name,
strength, flavour, milk, sugar, … everything you like!
 */

var coffee = {
    name:'esspreso',
    strength:'strong',
    flavour:'strong',
    sugar:'no',
    milk:'no'
}
 

/**
 * 2. Create an object that represents your favourite movie. Please include title, actors,
director, genre, popularity.
 */

var myFavouriteMovie = {
    title:'green mile',
    actors:['Tom Hanks','David Morse','Micheal Clarke Duncan'],
    director:' Frank Darabont',
    genre:'Drama Crime Fantasy',
    popularity:'278'
}


/**
 * 3. Write a function that creates an object that represents a project. Each project is
described by: description, programming language, git repository, boolean status that
says if the project is in development or not. Add a method that prints out the project&#39;s
repository, a method that checks if the project is written in JavaScript as well as a
method that checks if the project is in development or not.
 * 
 */

var project = {
    description:'Hospital website',
    programmingLanguage:'JavaScript',
    gitRepository:'imagine',
    development:true,
    printProjectRepo:function(){
        console.log(project.gitRepository);
    },
    isProjectJS:function(){
        if(project.programmingLanguage ==='JavaScript'){
            console.log('JavaScriptProject');
        }else{
            console.log('The project is not written in javascript');
        }
    },
    isProjectInDevelop:function(){
        if(project.development === true){
            console.log('We are working on a project');
        }
        else{
            console.log('The project is finished');
        }
    }
}


/**
 * 4. Write a function that creates an object that represents a culinary recipe. Each recipe is
described by: name, type of cuisine, complexity (value from 1 to 5), list of ingredients,
preparing time, preparing instruction.
○ Add a method that prints out all the ingredients necessary for the meal
preparation.
○ Add a method that checks if a meal can be prepared in under 15 minutes.
○ Add a method that changes the type of cuisine to the given value.
○ Add a method that delete a given ingredient from the list of ingredients.
 */

recipe = {
    name:'soup',
    typeCuisine:'serbian',
    complexity:3,
    ingredients:['onions','carrots','cellery','chicken'],
    preparingTime:180,
    preparingInstructions:'pour water into the pot and add all the ingredients',
    printAllIng:function(){
        for(var ing of recipe.ingredients){
            console.log(ing);
        }
    },
    prepMealTime:function(){
        if(preparingTime < 15 ){
            console.log('you can prepare this meal in less than 15 minutes');
        }
    },
    changeCusine:function(newCusine){
        recipe.typeCuisine = newCusine;
    },
    deleteIngredient:function(ing){
        
        for(i=0;i<recipe.ingredients.length;i++){
            if(ing === recipe.ingredients[i]){
                recipe.ingredients.splice(i,1);
            }
        }
        console.log(recipe.ingredients);
    }


}

//console.log(recipe.deleteIngredient('carrots'));
