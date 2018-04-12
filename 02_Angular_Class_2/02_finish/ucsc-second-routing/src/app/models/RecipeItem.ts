export class RecipeItem {
  constructor(public uri: string,
              public label: string,
              public image: string,
              public source: string,
              public shareAs: string,
              public url: string,
              public calories: number,
              public totalWeight: number,
              public totalTime: number,
              public healthLabels: string [] ) {

  }
}


