export default class Cocktail {
    constructor(
        id,
        name,
        description,
        imageLink
    ) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.imageLink = imageLink + '/preview';
    }
}