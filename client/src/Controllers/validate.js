export const Validate = (recipe) => {
    let errors = {};
    if (!recipe.title) {
        errors.title = "Name is required";
    };
    if (!recipe.summary) {
        errors.summary = "summary is required";
    };
    if (!/^([0-9])*$/.test(recipe.likes)) { //a  partir de una regular exression verifica que lo cumpla el valor entre () devuelve un boolean 
        errors.likes = "it can only be a number";
    } else if (recipe.likes < 0 || recipe.likes > 100) {
        errors.likes = "range has to be 0 to 100";
    };
    if (!/^([0-9])*$/.test(recipe.health)) {
        errors.health = "it can only be a number";
    } else if (recipe.health < 0 || recipe.health > 100) {
        errors.health = "range has to be 0 to 100";
    };
    if (recipe.diet.length === 0) {
        errors.diet = "you must select at least one diet";
    };

    
    return errors;
};

