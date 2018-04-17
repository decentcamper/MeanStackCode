export class RecipeDetail {
  constructor(public uri: string,
              public label: string,
              public image: string,
              public source: string,
              public shareAs: string,
              public url: string,
              public calories: number,
              public totalWeight: number,
              public totalTime: number,
              public healthLabels: string [],
              public cautions: string,
              public ingredientLines: string,
              public ingredients : any [],
              public totalNutrients: any [],
              public totalDaily : any[],
              public digest: any[]


  ) {

  }
}


