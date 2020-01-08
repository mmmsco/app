import Ingredient from "./Ingredient"
import Direction from "./Direction"
import Comment from "./Comment"


export class Recipe {
    name: string
    starRatingAsPercent: number
    numberOfReviews: number
    ingredients: Ingredient[]
    directions: Direction[]
    prepTimeMinutes: number
    cookTimeMinutes: number
    comments: Comment[]
    sourceUrl: string


    constructor(name: string, starRatingAsPercent: number, numberOfReviews: number, ingredients: Ingredient[], directions: Direction[], prepTimeMinutes: number, cookTimeMinutes: number, comments: Comment[], sourceUrl: string) {
        this.name = name;
        this.starRatingAsPercent = starRatingAsPercent;
        this.numberOfReviews = numberOfReviews;
        this.ingredients = ingredients;
        this.directions = directions;
        this.prepTimeMinutes = prepTimeMinutes;
        this.cookTimeMinutes = cookTimeMinutes;
        this.comments = comments;
        this.sourceUrl = sourceUrl;
    }
}

