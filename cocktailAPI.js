import Cocktail from "./cocktailClassMetier";

const rootEndpoint = "https://www.thecocktaildb.com/api/json/v1/1";

const headers = {
    "Content-Type": "application/json",
    Accept: "application/json"
};

const _createCocktail = drink => {
    return new Cocktail(
        drink.idDrink,
        drink.strDrink,
        drink.strInstructions,
        drink.strDrinkThumb
    )
}

const _createCocktails = drinks => {
    let cocktails = [];
    drinks !== null && drinks.forEach(drink => {
        cocktails = [_createCocktail(drink), ...cocktails];
    });
    console.log(cocktails);
    return cocktails;
}

export const getCocktailByNameAPI = name =>
    fetch(`${rootEndpoint}/search.php?s=${name}`, { headers })
        .then(response => response.json())
        .then(jsonResponse => jsonResponse.drinks)
        .then(drinks => _createCocktails(drinks))
        .catch(error => {
            console.error(error);
        });
