$(document).ready(function() {
    $('#button').on('click', function(e) {
       
        $.get('https://www.thecocktaildb.com/api/json/v1/1/random.php', (data) => {
            $('#results').empty();
            data.drinks.forEach((item) => {
                const drinkName = item.strDrink;
                const glassType = item.strGlass;
                const drinkPic = item.strDrinkThumb;
                const drinkInstructions = item.strInstructions;
                const resultCard = $('<div class="result-card">');

                //for loop to loop through ingredients
                
                // Displaying the drink name
                resultCard.append('<h2>' + drinkName + '</h2>');
                
                // Displaying the type of glass
                resultCard.append('<p>Glass Type: ' + glassType + '</p>');
                
                // Displaying the drink image
                resultCard.append('<img src="' + drinkPic + '" alt="' + drinkName + '">');
                
                // Displaying the drink instructions
                resultCard.append('<p>Instructions: ' + drinkInstructions + '</p>');
                
                // Appending the result card to the results container
                $('#results').append(resultCard);
                
                for(let i = 1;i<=15;i++){
                    if(item['strIngredient' + i] !== null){
                        resultCard.append('<p>' + item['strMeasure'+i]+ ' ' + item['strIngredient'+i] + '</p>')
                    } else{
                        break;
                    }
                }
            });
        });
    });
});
