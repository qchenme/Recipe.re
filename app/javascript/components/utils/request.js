export const requestURL = `https://api.edamam.com/search?app_id=${
  process.env.APP_ID
}&app_key=${process.env.API_KEY}&from=0&to=50&q=`;
export const param = {
  method: "GET",
  headers: {
    "Content-Type": "application/json"
  }
};

export const testRecipes = [
  {
    uri:
      "http://www.edamam.com/ontologies/edamam.owl#recipe_39e587841dfc191f0651af1cd6a514a8",
    label: "Baked Potato Snack recipes",
    image:
      "https://www.edamam.com/web-img/633/6330c4b566f8eba34eb1c5a4e66aa43e",
    source: "Martha Stewart",
    url: "http://www.marthastewart.com/353269/baked-potato-snack",
    shareAs:
      "http://www.edamam.com/recipe/baked-potato-snack-recipes-39e587841dfc191f0651af1cd6a514a8/potato",
    yield: 1.0,
    dietLabels: ["Low-Fat"],
    healthLabels: [
      "Sugar-Conscious",
      "Vegan",
      "Vegetarian",
      "Peanut-Free",
      "Tree-Nut-Free",
      "Alcohol-Free"
    ],
    cautions: [],
    ingredientLines: [
      "1 medium sweet potato, or baking potato",
      "ground black pepper",
      "salt"
    ],
    ingredients: [
      {
        text: "1 medium sweet potato, or baking potato",
        weight: 244.95555555555552
      },
      {
        text: "ground black pepper",
        weight: 0.7348666666666666
      },
      {
        text: "salt",
        weight: 1.4697333333333331
      }
    ],
    calories: 195.3594042222222,
    totalWeight: 247.1325849033673,
    totalTime: 70.0,
    totalNutrients: {
      ENERC_KCAL: {
        label: "Energy",
        quantity: 195.3594042222222,
        unit: "kcal"
      },
      FAT: {
        label: "Fat",
        quantity: 0.21992109777777774,
        unit: "g"
      },
      FASAT: {
        label: "Saturated",
        quantity: 0.07391778844444442,
        unit: "g"
      },
      FAMS: {
        label: "Monounsaturated",
        quantity: 0.010329775777777776,
        unit: "g"
      },
      FAPU: {
        label: "Polyunsaturated",
        quantity: 0.11266485822222219,
        unit: "g"
      },
      CHOCDF: {
        label: "Carbs",
        quantity: 44.733416122222216,
        unit: "g"
      },
      FIBTG: {
        label: "Fiber",
        quantity: 3.370343488888888,
        unit: "g"
      },
      SUGAR: {
        label: "Sugars",
        quantity: 1.5234275911111108,
        unit: "g"
      },
      PROCNT: {
        label: "Protein",
        quantity: 5.318401535555555,
        unit: "g"
      },
      NA: {
        label: "Sodium",
        quantity: 571.3481630693334,
        unit: "mg"
      },
      CA: {
        label: "Calcium",
        quantity: 35.44580059903038,
        unit: "mg"
      },
      MG: {
        label: "Magnesium",
        quantity: 57.61082140458922,
        unit: "mg"
      },
      K: {
        label: "Potassium",
        quantity: 1031.3464176811578,
        unit: "mg"
      },
      FE: {
        label: "Iron",
        quantity: 2.1827324679588895,
        unit: "mg"
      },
      ZN: {
        label: "Zinc",
        quantity: 0.7205581871255895,
        unit: "mg"
      },
      P: {
        label: "Phosphorus",
        quantity: 135.88664488888887,
        unit: "mg"
      },
      VITA_RAE: {
        label: "Vitamin A",
        quantity: 0.19841399999999998,
        unit: "µg"
      },
      VITC: {
        label: "Vitamin C",
        quantity: 13.962466666666664,
        unit: "mg"
      },
      THIA: {
        label: "Thiamin (B1)",
        quantity: 0.20165721155555552,
        unit: "mg"
      },
      RIBF: {
        label: "Riboflavin (B2)",
        quantity: 0.08215809333333332,
        unit: "mg"
      },
      NIA: {
        label: "Niacin (B3)",
        quantity: 2.543689525999999,
        unit: "mg"
      },
      VITB6A: {
        label: "Vitamin B6",
        quantity: 0.8472351286666664,
        unit: "mg"
      },
      FOLDFE: {
        label: "Folate equivalent (total)",
        quantity: 34.4187051111111,
        unit: "µg"
      },
      FOLFD: {
        label: "Folate (food)",
        quantity: 34.4187051111111,
        unit: "µg"
      },
      TOCPHA: {
        label: "Vitamin E",
        quantity: 0.03213816888888889,
        unit: "mg"
      },
      VITK1: {
        label: "Vitamin K",
        quantity: 5.612176733333333,
        unit: "µg"
      }
    },
    totalDaily: {
      ENERC_KCAL: {
        label: "Energy",
        quantity: 9.767970211111109,
        unit: "%"
      },
      FAT: {
        label: "Fat",
        quantity: 0.3383401504273504,
        unit: "%"
      },
      FASAT: {
        label: "Saturated",
        quantity: 0.36958894222222216,
        unit: "%"
      },
      CHOCDF: {
        label: "Carbs",
        quantity: 14.911138707407405,
        unit: "%"
      },
      FIBTG: {
        label: "Fiber",
        quantity: 13.481373955555553,
        unit: "%"
      },
      PROCNT: {
        label: "Protein",
        quantity: 10.63680307111111,
        unit: "%"
      },
      NA: {
        label: "Sodium",
        quantity: 23.806173461222226,
        unit: "%"
      },
      CA: {
        label: "Calcium",
        quantity: 3.5445800599030375,
        unit: "%"
      },
      MG: {
        label: "Magnesium",
        quantity: 13.716862239187908,
        unit: "%"
      },
      K: {
        label: "Potassium",
        quantity: 21.943540801726765,
        unit: "%"
      },
      FE: {
        label: "Iron",
        quantity: 12.126291488660497,
        unit: "%"
      },
      ZN: {
        label: "Zinc",
        quantity: 6.550528973868995,
        unit: "%"
      },
      P: {
        label: "Phosphorus",
        quantity: 19.412377841269837,
        unit: "%"
      },
      VITA_RAE: {
        label: "Vitamin A",
        quantity: 0.022045999999999996,
        unit: "%"
      },
      VITC: {
        label: "Vitamin C",
        quantity: 15.51385185185185,
        unit: "%"
      },
      THIA: {
        label: "Thiamin (B1)",
        quantity: 16.804767629629627,
        unit: "%"
      },
      RIBF: {
        label: "Riboflavin (B2)",
        quantity: 6.319853333333333,
        unit: "%"
      },
      NIA: {
        label: "Niacin (B3)",
        quantity: 15.898059537499995,
        unit: "%"
      },
      VITB6A: {
        label: "Vitamin B6",
        quantity: 65.17193297435895,
        unit: "%"
      },
      FOLDFE: {
        label: "Folate equivalent (total)",
        quantity: 8.604676277777775,
        unit: "%"
      },
      TOCPHA: {
        label: "Vitamin E",
        quantity: 0.21425445925925926,
        unit: "%"
      },
      VITK1: {
        label: "Vitamin K",
        quantity: 4.676813944444444,
        unit: "%"
      }
    },
    digest: [
      {
        label: "Fat",
        tag: "FAT",
        schemaOrgTag: "fatContent",
        total: 0.21992109777777774,
        hasRDI: true,
        daily: 0.3383401504273504,
        unit: "g",
        sub: [
          {
            label: "Saturated",
            tag: "FASAT",
            schemaOrgTag: "saturatedFatContent",
            total: 0.07391778844444442,
            hasRDI: true,
            daily: 0.36958894222222216,
            unit: "g"
          },
          {
            label: "Trans",
            tag: "FATRN",
            schemaOrgTag: "transFatContent",
            total: 0.0,
            hasRDI: false,
            daily: 0.0,
            unit: "g"
          },
          {
            label: "Monounsaturated",
            tag: "FAMS",
            schemaOrgTag: null,
            total: 0.010329775777777776,
            hasRDI: false,
            daily: 0.0,
            unit: "g"
          },
          {
            label: "Polyunsaturated",
            tag: "FAPU",
            schemaOrgTag: null,
            total: 0.11266485822222219,
            hasRDI: false,
            daily: 0.0,
            unit: "g"
          }
        ]
      },
      {
        label: "Carbs",
        tag: "CHOCDF",
        schemaOrgTag: "carbohydrateContent",
        total: 44.733416122222216,
        hasRDI: true,
        daily: 14.911138707407405,
        unit: "g",
        sub: [
          {
            label: "Carbs (net)",
            tag: "CHOCDF.net",
            schemaOrgTag: null,
            total: 41.36307263333333,
            hasRDI: false,
            daily: 0.0,
            unit: "g"
          },
          {
            label: "Fiber",
            tag: "FIBTG",
            schemaOrgTag: "fiberContent",
            total: 3.370343488888888,
            hasRDI: true,
            daily: 13.481373955555553,
            unit: "g"
          },
          {
            label: "Sugars",
            tag: "SUGAR",
            schemaOrgTag: "sugarContent",
            total: 1.5234275911111108,
            hasRDI: false,
            daily: 0.0,
            unit: "g"
          },
          {
            label: "Sugars, added",
            tag: "SUGAR.added",
            schemaOrgTag: null,
            total: 0.0,
            hasRDI: false,
            daily: 0.0,
            unit: "g"
          }
        ]
      },
      {
        label: "Protein",
        tag: "PROCNT",
        schemaOrgTag: "proteinContent",
        total: 5.318401535555555,
        hasRDI: true,
        daily: 10.63680307111111,
        unit: "g"
      },
      {
        label: "Cholesterol",
        tag: "CHOLE",
        schemaOrgTag: "cholesterolContent",
        total: 0.0,
        hasRDI: false,
        daily: 0.0,
        unit: "mg"
      },
      {
        label: "Sodium",
        tag: "NA",
        schemaOrgTag: "sodiumContent",
        total: 571.3481630693334,
        hasRDI: true,
        daily: 23.806173461222226,
        unit: "mg"
      },
      {
        label: "Calcium",
        tag: "CA",
        schemaOrgTag: null,
        total: 35.44580059903038,
        hasRDI: true,
        daily: 3.5445800599030375,
        unit: "mg"
      },
      {
        label: "Magnesium",
        tag: "MG",
        schemaOrgTag: null,
        total: 57.61082140458922,
        hasRDI: true,
        daily: 13.716862239187908,
        unit: "mg"
      },
      {
        label: "Potassium",
        tag: "K",
        schemaOrgTag: null,
        total: 1031.3464176811578,
        hasRDI: true,
        daily: 21.943540801726765,
        unit: "mg"
      },
      {
        label: "Iron",
        tag: "FE",
        schemaOrgTag: null,
        total: 2.1827324679588895,
        hasRDI: true,
        daily: 12.126291488660497,
        unit: "mg"
      },
      {
        label: "Zinc",
        tag: "ZN",
        schemaOrgTag: null,
        total: 0.7205581871255895,
        hasRDI: true,
        daily: 6.550528973868995,
        unit: "mg"
      },
      {
        label: "Phosphorus",
        tag: "P",
        schemaOrgTag: null,
        total: 135.88664488888887,
        hasRDI: true,
        daily: 19.412377841269837,
        unit: "mg"
      },
      {
        label: "Vitamin A",
        tag: "VITA_RAE",
        schemaOrgTag: null,
        total: 0.19841399999999998,
        hasRDI: true,
        daily: 0.022045999999999996,
        unit: "µg"
      },
      {
        label: "Vitamin C",
        tag: "VITC",
        schemaOrgTag: null,
        total: 13.962466666666664,
        hasRDI: true,
        daily: 15.51385185185185,
        unit: "mg"
      },
      {
        label: "Thiamin (B1)",
        tag: "THIA",
        schemaOrgTag: null,
        total: 0.20165721155555552,
        hasRDI: true,
        daily: 16.804767629629627,
        unit: "mg"
      },
      {
        label: "Riboflavin (B2)",
        tag: "RIBF",
        schemaOrgTag: null,
        total: 0.08215809333333332,
        hasRDI: true,
        daily: 6.319853333333333,
        unit: "mg"
      },
      {
        label: "Niacin (B3)",
        tag: "NIA",
        schemaOrgTag: null,
        total: 2.543689525999999,
        hasRDI: true,
        daily: 15.898059537499995,
        unit: "mg"
      },
      {
        label: "Vitamin B6",
        tag: "VITB6A",
        schemaOrgTag: null,
        total: 0.8472351286666664,
        hasRDI: true,
        daily: 65.17193297435895,
        unit: "mg"
      },
      {
        label: "Folate equivalent (total)",
        tag: "FOLDFE",
        schemaOrgTag: null,
        total: 34.4187051111111,
        hasRDI: true,
        daily: 8.604676277777775,
        unit: "µg"
      },
      {
        label: "Folate (food)",
        tag: "FOLFD",
        schemaOrgTag: null,
        total: 34.4187051111111,
        hasRDI: false,
        daily: 0.0,
        unit: "µg"
      },
      {
        label: "Folic acid",
        tag: "FOLAC",
        schemaOrgTag: null,
        total: 0.0,
        hasRDI: false,
        daily: 0.0,
        unit: "µg"
      },
      {
        label: "Vitamin B12",
        tag: "VITB12",
        schemaOrgTag: null,
        total: 0.0,
        hasRDI: false,
        daily: 0.0,
        unit: "µg"
      },
      {
        label: "Vitamin D",
        tag: "VITD",
        schemaOrgTag: null,
        total: 0.0,
        hasRDI: false,
        daily: 0.0,
        unit: "µg"
      },
      {
        label: "Vitamin E",
        tag: "TOCPHA",
        schemaOrgTag: null,
        total: 0.03213816888888889,
        hasRDI: true,
        daily: 0.21425445925925926,
        unit: "mg"
      },
      {
        label: "Vitamin K",
        tag: "VITK1",
        schemaOrgTag: null,
        total: 5.612176733333333,
        hasRDI: true,
        daily: 4.676813944444444,
        unit: "µg"
      }
    ]
  },
  {
    uri:
      "http://www.edamam.com/ontologies/edamam.owl#recipe_39e587841dfc191f0651af1cd6a514a8",
    label: "Baked Potato Snack recipes",
    image:
      "https://www.edamam.com/web-img/633/6330c4b566f8eba34eb1c5a4e66aa43e",
    source: "Martha Stewart",
    url: "http://www.marthastewart.com/353269/baked-potato-snack",
    shareAs:
      "http://www.edamam.com/recipe/baked-potato-snack-recipes-39e587841dfc191f0651af1cd6a514a8/potato",
    yield: 1.0,
    dietLabels: ["Low-Fat"],
    healthLabels: [
      "Sugar-Conscious",
      "Vegan",
      "Vegetarian",
      "Peanut-Free",
      "Tree-Nut-Free",
      "Alcohol-Free"
    ],
    cautions: [],
    ingredientLines: [
      "1 medium sweet potato, or baking potato",
      "ground black pepper",
      "salt"
    ],
    ingredients: [
      {
        text: "1 medium sweet potato, or baking potato",
        weight: 244.95555555555552
      },
      {
        text: "ground black pepper",
        weight: 0.7348666666666666
      },
      {
        text: "salt",
        weight: 1.4697333333333331
      }
    ],
    calories: 195.3594042222222,
    totalWeight: 247.1325849033673,
    totalTime: 70.0,
    totalNutrients: {
      ENERC_KCAL: {
        label: "Energy",
        quantity: 195.3594042222222,
        unit: "kcal"
      },
      FAT: {
        label: "Fat",
        quantity: 0.21992109777777774,
        unit: "g"
      },
      FASAT: {
        label: "Saturated",
        quantity: 0.07391778844444442,
        unit: "g"
      },
      FAMS: {
        label: "Monounsaturated",
        quantity: 0.010329775777777776,
        unit: "g"
      },
      FAPU: {
        label: "Polyunsaturated",
        quantity: 0.11266485822222219,
        unit: "g"
      },
      CHOCDF: {
        label: "Carbs",
        quantity: 44.733416122222216,
        unit: "g"
      },
      FIBTG: {
        label: "Fiber",
        quantity: 3.370343488888888,
        unit: "g"
      },
      SUGAR: {
        label: "Sugars",
        quantity: 1.5234275911111108,
        unit: "g"
      },
      PROCNT: {
        label: "Protein",
        quantity: 5.318401535555555,
        unit: "g"
      },
      NA: {
        label: "Sodium",
        quantity: 571.3481630693334,
        unit: "mg"
      },
      CA: {
        label: "Calcium",
        quantity: 35.44580059903038,
        unit: "mg"
      },
      MG: {
        label: "Magnesium",
        quantity: 57.61082140458922,
        unit: "mg"
      },
      K: {
        label: "Potassium",
        quantity: 1031.3464176811578,
        unit: "mg"
      },
      FE: {
        label: "Iron",
        quantity: 2.1827324679588895,
        unit: "mg"
      },
      ZN: {
        label: "Zinc",
        quantity: 0.7205581871255895,
        unit: "mg"
      },
      P: {
        label: "Phosphorus",
        quantity: 135.88664488888887,
        unit: "mg"
      },
      VITA_RAE: {
        label: "Vitamin A",
        quantity: 0.19841399999999998,
        unit: "µg"
      },
      VITC: {
        label: "Vitamin C",
        quantity: 13.962466666666664,
        unit: "mg"
      },
      THIA: {
        label: "Thiamin (B1)",
        quantity: 0.20165721155555552,
        unit: "mg"
      },
      RIBF: {
        label: "Riboflavin (B2)",
        quantity: 0.08215809333333332,
        unit: "mg"
      },
      NIA: {
        label: "Niacin (B3)",
        quantity: 2.543689525999999,
        unit: "mg"
      },
      VITB6A: {
        label: "Vitamin B6",
        quantity: 0.8472351286666664,
        unit: "mg"
      },
      FOLDFE: {
        label: "Folate equivalent (total)",
        quantity: 34.4187051111111,
        unit: "µg"
      },
      FOLFD: {
        label: "Folate (food)",
        quantity: 34.4187051111111,
        unit: "µg"
      },
      TOCPHA: {
        label: "Vitamin E",
        quantity: 0.03213816888888889,
        unit: "mg"
      },
      VITK1: {
        label: "Vitamin K",
        quantity: 5.612176733333333,
        unit: "µg"
      }
    },
    totalDaily: {
      ENERC_KCAL: {
        label: "Energy",
        quantity: 9.767970211111109,
        unit: "%"
      },
      FAT: {
        label: "Fat",
        quantity: 0.3383401504273504,
        unit: "%"
      },
      FASAT: {
        label: "Saturated",
        quantity: 0.36958894222222216,
        unit: "%"
      },
      CHOCDF: {
        label: "Carbs",
        quantity: 14.911138707407405,
        unit: "%"
      },
      FIBTG: {
        label: "Fiber",
        quantity: 13.481373955555553,
        unit: "%"
      },
      PROCNT: {
        label: "Protein",
        quantity: 10.63680307111111,
        unit: "%"
      },
      NA: {
        label: "Sodium",
        quantity: 23.806173461222226,
        unit: "%"
      },
      CA: {
        label: "Calcium",
        quantity: 3.5445800599030375,
        unit: "%"
      },
      MG: {
        label: "Magnesium",
        quantity: 13.716862239187908,
        unit: "%"
      },
      K: {
        label: "Potassium",
        quantity: 21.943540801726765,
        unit: "%"
      },
      FE: {
        label: "Iron",
        quantity: 12.126291488660497,
        unit: "%"
      },
      ZN: {
        label: "Zinc",
        quantity: 6.550528973868995,
        unit: "%"
      },
      P: {
        label: "Phosphorus",
        quantity: 19.412377841269837,
        unit: "%"
      },
      VITA_RAE: {
        label: "Vitamin A",
        quantity: 0.022045999999999996,
        unit: "%"
      },
      VITC: {
        label: "Vitamin C",
        quantity: 15.51385185185185,
        unit: "%"
      },
      THIA: {
        label: "Thiamin (B1)",
        quantity: 16.804767629629627,
        unit: "%"
      },
      RIBF: {
        label: "Riboflavin (B2)",
        quantity: 6.319853333333333,
        unit: "%"
      },
      NIA: {
        label: "Niacin (B3)",
        quantity: 15.898059537499995,
        unit: "%"
      },
      VITB6A: {
        label: "Vitamin B6",
        quantity: 65.17193297435895,
        unit: "%"
      },
      FOLDFE: {
        label: "Folate equivalent (total)",
        quantity: 8.604676277777775,
        unit: "%"
      },
      TOCPHA: {
        label: "Vitamin E",
        quantity: 0.21425445925925926,
        unit: "%"
      },
      VITK1: {
        label: "Vitamin K",
        quantity: 4.676813944444444,
        unit: "%"
      }
    },
    digest: [
      {
        label: "Fat",
        tag: "FAT",
        schemaOrgTag: "fatContent",
        total: 0.21992109777777774,
        hasRDI: true,
        daily: 0.3383401504273504,
        unit: "g",
        sub: [
          {
            label: "Saturated",
            tag: "FASAT",
            schemaOrgTag: "saturatedFatContent",
            total: 0.07391778844444442,
            hasRDI: true,
            daily: 0.36958894222222216,
            unit: "g"
          },
          {
            label: "Trans",
            tag: "FATRN",
            schemaOrgTag: "transFatContent",
            total: 0.0,
            hasRDI: false,
            daily: 0.0,
            unit: "g"
          },
          {
            label: "Monounsaturated",
            tag: "FAMS",
            schemaOrgTag: null,
            total: 0.010329775777777776,
            hasRDI: false,
            daily: 0.0,
            unit: "g"
          },
          {
            label: "Polyunsaturated",
            tag: "FAPU",
            schemaOrgTag: null,
            total: 0.11266485822222219,
            hasRDI: false,
            daily: 0.0,
            unit: "g"
          }
        ]
      },
      {
        label: "Carbs",
        tag: "CHOCDF",
        schemaOrgTag: "carbohydrateContent",
        total: 44.733416122222216,
        hasRDI: true,
        daily: 14.911138707407405,
        unit: "g",
        sub: [
          {
            label: "Carbs (net)",
            tag: "CHOCDF.net",
            schemaOrgTag: null,
            total: 41.36307263333333,
            hasRDI: false,
            daily: 0.0,
            unit: "g"
          },
          {
            label: "Fiber",
            tag: "FIBTG",
            schemaOrgTag: "fiberContent",
            total: 3.370343488888888,
            hasRDI: true,
            daily: 13.481373955555553,
            unit: "g"
          },
          {
            label: "Sugars",
            tag: "SUGAR",
            schemaOrgTag: "sugarContent",
            total: 1.5234275911111108,
            hasRDI: false,
            daily: 0.0,
            unit: "g"
          },
          {
            label: "Sugars, added",
            tag: "SUGAR.added",
            schemaOrgTag: null,
            total: 0.0,
            hasRDI: false,
            daily: 0.0,
            unit: "g"
          }
        ]
      },
      {
        label: "Protein",
        tag: "PROCNT",
        schemaOrgTag: "proteinContent",
        total: 5.318401535555555,
        hasRDI: true,
        daily: 10.63680307111111,
        unit: "g"
      },
      {
        label: "Cholesterol",
        tag: "CHOLE",
        schemaOrgTag: "cholesterolContent",
        total: 0.0,
        hasRDI: false,
        daily: 0.0,
        unit: "mg"
      },
      {
        label: "Sodium",
        tag: "NA",
        schemaOrgTag: "sodiumContent",
        total: 571.3481630693334,
        hasRDI: true,
        daily: 23.806173461222226,
        unit: "mg"
      },
      {
        label: "Calcium",
        tag: "CA",
        schemaOrgTag: null,
        total: 35.44580059903038,
        hasRDI: true,
        daily: 3.5445800599030375,
        unit: "mg"
      },
      {
        label: "Magnesium",
        tag: "MG",
        schemaOrgTag: null,
        total: 57.61082140458922,
        hasRDI: true,
        daily: 13.716862239187908,
        unit: "mg"
      },
      {
        label: "Potassium",
        tag: "K",
        schemaOrgTag: null,
        total: 1031.3464176811578,
        hasRDI: true,
        daily: 21.943540801726765,
        unit: "mg"
      },
      {
        label: "Iron",
        tag: "FE",
        schemaOrgTag: null,
        total: 2.1827324679588895,
        hasRDI: true,
        daily: 12.126291488660497,
        unit: "mg"
      },
      {
        label: "Zinc",
        tag: "ZN",
        schemaOrgTag: null,
        total: 0.7205581871255895,
        hasRDI: true,
        daily: 6.550528973868995,
        unit: "mg"
      },
      {
        label: "Phosphorus",
        tag: "P",
        schemaOrgTag: null,
        total: 135.88664488888887,
        hasRDI: true,
        daily: 19.412377841269837,
        unit: "mg"
      },
      {
        label: "Vitamin A",
        tag: "VITA_RAE",
        schemaOrgTag: null,
        total: 0.19841399999999998,
        hasRDI: true,
        daily: 0.022045999999999996,
        unit: "µg"
      },
      {
        label: "Vitamin C",
        tag: "VITC",
        schemaOrgTag: null,
        total: 13.962466666666664,
        hasRDI: true,
        daily: 15.51385185185185,
        unit: "mg"
      },
      {
        label: "Thiamin (B1)",
        tag: "THIA",
        schemaOrgTag: null,
        total: 0.20165721155555552,
        hasRDI: true,
        daily: 16.804767629629627,
        unit: "mg"
      },
      {
        label: "Riboflavin (B2)",
        tag: "RIBF",
        schemaOrgTag: null,
        total: 0.08215809333333332,
        hasRDI: true,
        daily: 6.319853333333333,
        unit: "mg"
      },
      {
        label: "Niacin (B3)",
        tag: "NIA",
        schemaOrgTag: null,
        total: 2.543689525999999,
        hasRDI: true,
        daily: 15.898059537499995,
        unit: "mg"
      },
      {
        label: "Vitamin B6",
        tag: "VITB6A",
        schemaOrgTag: null,
        total: 0.8472351286666664,
        hasRDI: true,
        daily: 65.17193297435895,
        unit: "mg"
      },
      {
        label: "Folate equivalent (total)",
        tag: "FOLDFE",
        schemaOrgTag: null,
        total: 34.4187051111111,
        hasRDI: true,
        daily: 8.604676277777775,
        unit: "µg"
      },
      {
        label: "Folate (food)",
        tag: "FOLFD",
        schemaOrgTag: null,
        total: 34.4187051111111,
        hasRDI: false,
        daily: 0.0,
        unit: "µg"
      },
      {
        label: "Folic acid",
        tag: "FOLAC",
        schemaOrgTag: null,
        total: 0.0,
        hasRDI: false,
        daily: 0.0,
        unit: "µg"
      },
      {
        label: "Vitamin B12",
        tag: "VITB12",
        schemaOrgTag: null,
        total: 0.0,
        hasRDI: false,
        daily: 0.0,
        unit: "µg"
      },
      {
        label: "Vitamin D",
        tag: "VITD",
        schemaOrgTag: null,
        total: 0.0,
        hasRDI: false,
        daily: 0.0,
        unit: "µg"
      },
      {
        label: "Vitamin E",
        tag: "TOCPHA",
        schemaOrgTag: null,
        total: 0.03213816888888889,
        hasRDI: true,
        daily: 0.21425445925925926,
        unit: "mg"
      },
      {
        label: "Vitamin K",
        tag: "VITK1",
        schemaOrgTag: null,
        total: 5.612176733333333,
        hasRDI: true,
        daily: 4.676813944444444,
        unit: "µg"
      }
    ]
  },
  {
    uri:
      "http://www.edamam.com/ontologies/edamam.owl#recipe_39e587841dfc191f0651af1cd6a514a8",
    label: "Baked Potato Snack recipes",
    image:
      "https://www.edamam.com/web-img/633/6330c4b566f8eba34eb1c5a4e66aa43e",
    source: "Martha Stewart",
    url: "http://www.marthastewart.com/353269/baked-potato-snack",
    shareAs:
      "http://www.edamam.com/recipe/baked-potato-snack-recipes-39e587841dfc191f0651af1cd6a514a8/potato",
    yield: 1.0,
    dietLabels: ["Low-Fat"],
    healthLabels: [
      "Sugar-Conscious",
      "Vegan",
      "Vegetarian",
      "Peanut-Free",
      "Tree-Nut-Free",
      "Alcohol-Free"
    ],
    cautions: [],
    ingredientLines: [
      "1 medium sweet potato, or baking potato",
      "ground black pepper",
      "salt"
    ],
    ingredients: [
      {
        text: "1 medium sweet potato, or baking potato",
        weight: 244.95555555555552
      },
      {
        text: "ground black pepper",
        weight: 0.7348666666666666
      },
      {
        text: "salt",
        weight: 1.4697333333333331
      }
    ],
    calories: 195.3594042222222,
    totalWeight: 247.1325849033673,
    totalTime: 70.0,
    totalNutrients: {
      ENERC_KCAL: {
        label: "Energy",
        quantity: 195.3594042222222,
        unit: "kcal"
      },
      FAT: {
        label: "Fat",
        quantity: 0.21992109777777774,
        unit: "g"
      },
      FASAT: {
        label: "Saturated",
        quantity: 0.07391778844444442,
        unit: "g"
      },
      FAMS: {
        label: "Monounsaturated",
        quantity: 0.010329775777777776,
        unit: "g"
      },
      FAPU: {
        label: "Polyunsaturated",
        quantity: 0.11266485822222219,
        unit: "g"
      },
      CHOCDF: {
        label: "Carbs",
        quantity: 44.733416122222216,
        unit: "g"
      },
      FIBTG: {
        label: "Fiber",
        quantity: 3.370343488888888,
        unit: "g"
      },
      SUGAR: {
        label: "Sugars",
        quantity: 1.5234275911111108,
        unit: "g"
      },
      PROCNT: {
        label: "Protein",
        quantity: 5.318401535555555,
        unit: "g"
      },
      NA: {
        label: "Sodium",
        quantity: 571.3481630693334,
        unit: "mg"
      },
      CA: {
        label: "Calcium",
        quantity: 35.44580059903038,
        unit: "mg"
      },
      MG: {
        label: "Magnesium",
        quantity: 57.61082140458922,
        unit: "mg"
      },
      K: {
        label: "Potassium",
        quantity: 1031.3464176811578,
        unit: "mg"
      },
      FE: {
        label: "Iron",
        quantity: 2.1827324679588895,
        unit: "mg"
      },
      ZN: {
        label: "Zinc",
        quantity: 0.7205581871255895,
        unit: "mg"
      },
      P: {
        label: "Phosphorus",
        quantity: 135.88664488888887,
        unit: "mg"
      },
      VITA_RAE: {
        label: "Vitamin A",
        quantity: 0.19841399999999998,
        unit: "µg"
      },
      VITC: {
        label: "Vitamin C",
        quantity: 13.962466666666664,
        unit: "mg"
      },
      THIA: {
        label: "Thiamin (B1)",
        quantity: 0.20165721155555552,
        unit: "mg"
      },
      RIBF: {
        label: "Riboflavin (B2)",
        quantity: 0.08215809333333332,
        unit: "mg"
      },
      NIA: {
        label: "Niacin (B3)",
        quantity: 2.543689525999999,
        unit: "mg"
      },
      VITB6A: {
        label: "Vitamin B6",
        quantity: 0.8472351286666664,
        unit: "mg"
      },
      FOLDFE: {
        label: "Folate equivalent (total)",
        quantity: 34.4187051111111,
        unit: "µg"
      },
      FOLFD: {
        label: "Folate (food)",
        quantity: 34.4187051111111,
        unit: "µg"
      },
      TOCPHA: {
        label: "Vitamin E",
        quantity: 0.03213816888888889,
        unit: "mg"
      },
      VITK1: {
        label: "Vitamin K",
        quantity: 5.612176733333333,
        unit: "µg"
      }
    },
    totalDaily: {
      ENERC_KCAL: {
        label: "Energy",
        quantity: 9.767970211111109,
        unit: "%"
      },
      FAT: {
        label: "Fat",
        quantity: 0.3383401504273504,
        unit: "%"
      },
      FASAT: {
        label: "Saturated",
        quantity: 0.36958894222222216,
        unit: "%"
      },
      CHOCDF: {
        label: "Carbs",
        quantity: 14.911138707407405,
        unit: "%"
      },
      FIBTG: {
        label: "Fiber",
        quantity: 13.481373955555553,
        unit: "%"
      },
      PROCNT: {
        label: "Protein",
        quantity: 10.63680307111111,
        unit: "%"
      },
      NA: {
        label: "Sodium",
        quantity: 23.806173461222226,
        unit: "%"
      },
      CA: {
        label: "Calcium",
        quantity: 3.5445800599030375,
        unit: "%"
      },
      MG: {
        label: "Magnesium",
        quantity: 13.716862239187908,
        unit: "%"
      },
      K: {
        label: "Potassium",
        quantity: 21.943540801726765,
        unit: "%"
      },
      FE: {
        label: "Iron",
        quantity: 12.126291488660497,
        unit: "%"
      },
      ZN: {
        label: "Zinc",
        quantity: 6.550528973868995,
        unit: "%"
      },
      P: {
        label: "Phosphorus",
        quantity: 19.412377841269837,
        unit: "%"
      },
      VITA_RAE: {
        label: "Vitamin A",
        quantity: 0.022045999999999996,
        unit: "%"
      },
      VITC: {
        label: "Vitamin C",
        quantity: 15.51385185185185,
        unit: "%"
      },
      THIA: {
        label: "Thiamin (B1)",
        quantity: 16.804767629629627,
        unit: "%"
      },
      RIBF: {
        label: "Riboflavin (B2)",
        quantity: 6.319853333333333,
        unit: "%"
      },
      NIA: {
        label: "Niacin (B3)",
        quantity: 15.898059537499995,
        unit: "%"
      },
      VITB6A: {
        label: "Vitamin B6",
        quantity: 65.17193297435895,
        unit: "%"
      },
      FOLDFE: {
        label: "Folate equivalent (total)",
        quantity: 8.604676277777775,
        unit: "%"
      },
      TOCPHA: {
        label: "Vitamin E",
        quantity: 0.21425445925925926,
        unit: "%"
      },
      VITK1: {
        label: "Vitamin K",
        quantity: 4.676813944444444,
        unit: "%"
      }
    },
    digest: [
      {
        label: "Fat",
        tag: "FAT",
        schemaOrgTag: "fatContent",
        total: 0.21992109777777774,
        hasRDI: true,
        daily: 0.3383401504273504,
        unit: "g",
        sub: [
          {
            label: "Saturated",
            tag: "FASAT",
            schemaOrgTag: "saturatedFatContent",
            total: 0.07391778844444442,
            hasRDI: true,
            daily: 0.36958894222222216,
            unit: "g"
          },
          {
            label: "Trans",
            tag: "FATRN",
            schemaOrgTag: "transFatContent",
            total: 0.0,
            hasRDI: false,
            daily: 0.0,
            unit: "g"
          },
          {
            label: "Monounsaturated",
            tag: "FAMS",
            schemaOrgTag: null,
            total: 0.010329775777777776,
            hasRDI: false,
            daily: 0.0,
            unit: "g"
          },
          {
            label: "Polyunsaturated",
            tag: "FAPU",
            schemaOrgTag: null,
            total: 0.11266485822222219,
            hasRDI: false,
            daily: 0.0,
            unit: "g"
          }
        ]
      },
      {
        label: "Carbs",
        tag: "CHOCDF",
        schemaOrgTag: "carbohydrateContent",
        total: 44.733416122222216,
        hasRDI: true,
        daily: 14.911138707407405,
        unit: "g",
        sub: [
          {
            label: "Carbs (net)",
            tag: "CHOCDF.net",
            schemaOrgTag: null,
            total: 41.36307263333333,
            hasRDI: false,
            daily: 0.0,
            unit: "g"
          },
          {
            label: "Fiber",
            tag: "FIBTG",
            schemaOrgTag: "fiberContent",
            total: 3.370343488888888,
            hasRDI: true,
            daily: 13.481373955555553,
            unit: "g"
          },
          {
            label: "Sugars",
            tag: "SUGAR",
            schemaOrgTag: "sugarContent",
            total: 1.5234275911111108,
            hasRDI: false,
            daily: 0.0,
            unit: "g"
          },
          {
            label: "Sugars, added",
            tag: "SUGAR.added",
            schemaOrgTag: null,
            total: 0.0,
            hasRDI: false,
            daily: 0.0,
            unit: "g"
          }
        ]
      },
      {
        label: "Protein",
        tag: "PROCNT",
        schemaOrgTag: "proteinContent",
        total: 5.318401535555555,
        hasRDI: true,
        daily: 10.63680307111111,
        unit: "g"
      },
      {
        label: "Cholesterol",
        tag: "CHOLE",
        schemaOrgTag: "cholesterolContent",
        total: 0.0,
        hasRDI: false,
        daily: 0.0,
        unit: "mg"
      },
      {
        label: "Sodium",
        tag: "NA",
        schemaOrgTag: "sodiumContent",
        total: 571.3481630693334,
        hasRDI: true,
        daily: 23.806173461222226,
        unit: "mg"
      },
      {
        label: "Calcium",
        tag: "CA",
        schemaOrgTag: null,
        total: 35.44580059903038,
        hasRDI: true,
        daily: 3.5445800599030375,
        unit: "mg"
      },
      {
        label: "Magnesium",
        tag: "MG",
        schemaOrgTag: null,
        total: 57.61082140458922,
        hasRDI: true,
        daily: 13.716862239187908,
        unit: "mg"
      },
      {
        label: "Potassium",
        tag: "K",
        schemaOrgTag: null,
        total: 1031.3464176811578,
        hasRDI: true,
        daily: 21.943540801726765,
        unit: "mg"
      },
      {
        label: "Iron",
        tag: "FE",
        schemaOrgTag: null,
        total: 2.1827324679588895,
        hasRDI: true,
        daily: 12.126291488660497,
        unit: "mg"
      },
      {
        label: "Zinc",
        tag: "ZN",
        schemaOrgTag: null,
        total: 0.7205581871255895,
        hasRDI: true,
        daily: 6.550528973868995,
        unit: "mg"
      },
      {
        label: "Phosphorus",
        tag: "P",
        schemaOrgTag: null,
        total: 135.88664488888887,
        hasRDI: true,
        daily: 19.412377841269837,
        unit: "mg"
      },
      {
        label: "Vitamin A",
        tag: "VITA_RAE",
        schemaOrgTag: null,
        total: 0.19841399999999998,
        hasRDI: true,
        daily: 0.022045999999999996,
        unit: "µg"
      },
      {
        label: "Vitamin C",
        tag: "VITC",
        schemaOrgTag: null,
        total: 13.962466666666664,
        hasRDI: true,
        daily: 15.51385185185185,
        unit: "mg"
      },
      {
        label: "Thiamin (B1)",
        tag: "THIA",
        schemaOrgTag: null,
        total: 0.20165721155555552,
        hasRDI: true,
        daily: 16.804767629629627,
        unit: "mg"
      },
      {
        label: "Riboflavin (B2)",
        tag: "RIBF",
        schemaOrgTag: null,
        total: 0.08215809333333332,
        hasRDI: true,
        daily: 6.319853333333333,
        unit: "mg"
      },
      {
        label: "Niacin (B3)",
        tag: "NIA",
        schemaOrgTag: null,
        total: 2.543689525999999,
        hasRDI: true,
        daily: 15.898059537499995,
        unit: "mg"
      },
      {
        label: "Vitamin B6",
        tag: "VITB6A",
        schemaOrgTag: null,
        total: 0.8472351286666664,
        hasRDI: true,
        daily: 65.17193297435895,
        unit: "mg"
      },
      {
        label: "Folate equivalent (total)",
        tag: "FOLDFE",
        schemaOrgTag: null,
        total: 34.4187051111111,
        hasRDI: true,
        daily: 8.604676277777775,
        unit: "µg"
      },
      {
        label: "Folate (food)",
        tag: "FOLFD",
        schemaOrgTag: null,
        total: 34.4187051111111,
        hasRDI: false,
        daily: 0.0,
        unit: "µg"
      },
      {
        label: "Folic acid",
        tag: "FOLAC",
        schemaOrgTag: null,
        total: 0.0,
        hasRDI: false,
        daily: 0.0,
        unit: "µg"
      },
      {
        label: "Vitamin B12",
        tag: "VITB12",
        schemaOrgTag: null,
        total: 0.0,
        hasRDI: false,
        daily: 0.0,
        unit: "µg"
      },
      {
        label: "Vitamin D",
        tag: "VITD",
        schemaOrgTag: null,
        total: 0.0,
        hasRDI: false,
        daily: 0.0,
        unit: "µg"
      },
      {
        label: "Vitamin E",
        tag: "TOCPHA",
        schemaOrgTag: null,
        total: 0.03213816888888889,
        hasRDI: true,
        daily: 0.21425445925925926,
        unit: "mg"
      },
      {
        label: "Vitamin K",
        tag: "VITK1",
        schemaOrgTag: null,
        total: 5.612176733333333,
        hasRDI: true,
        daily: 4.676813944444444,
        unit: "µg"
      }
    ]
  },
  {
    uri:
      "http://www.edamam.com/ontologies/edamam.owl#recipe_39e587841dfc191f0651af1cd6a514a8",
    label: "Baked Potato Snack recipes",
    image:
      "https://www.edamam.com/web-img/633/6330c4b566f8eba34eb1c5a4e66aa43e",
    source: "Martha Stewart",
    url: "http://www.marthastewart.com/353269/baked-potato-snack",
    shareAs:
      "http://www.edamam.com/recipe/baked-potato-snack-recipes-39e587841dfc191f0651af1cd6a514a8/potato",
    yield: 1.0,
    dietLabels: ["Low-Fat"],
    healthLabels: [
      "Sugar-Conscious",
      "Vegan",
      "Vegetarian",
      "Peanut-Free",
      "Tree-Nut-Free",
      "Alcohol-Free"
    ],
    cautions: [],
    ingredientLines: [
      "1 medium sweet potato, or baking potato",
      "ground black pepper",
      "salt"
    ],
    ingredients: [
      {
        text: "1 medium sweet potato, or baking potato",
        weight: 244.95555555555552
      },
      {
        text: "ground black pepper",
        weight: 0.7348666666666666
      },
      {
        text: "salt",
        weight: 1.4697333333333331
      }
    ],
    calories: 195.3594042222222,
    totalWeight: 247.1325849033673,
    totalTime: 70.0,
    totalNutrients: {
      ENERC_KCAL: {
        label: "Energy",
        quantity: 195.3594042222222,
        unit: "kcal"
      },
      FAT: {
        label: "Fat",
        quantity: 0.21992109777777774,
        unit: "g"
      },
      FASAT: {
        label: "Saturated",
        quantity: 0.07391778844444442,
        unit: "g"
      },
      FAMS: {
        label: "Monounsaturated",
        quantity: 0.010329775777777776,
        unit: "g"
      },
      FAPU: {
        label: "Polyunsaturated",
        quantity: 0.11266485822222219,
        unit: "g"
      },
      CHOCDF: {
        label: "Carbs",
        quantity: 44.733416122222216,
        unit: "g"
      },
      FIBTG: {
        label: "Fiber",
        quantity: 3.370343488888888,
        unit: "g"
      },
      SUGAR: {
        label: "Sugars",
        quantity: 1.5234275911111108,
        unit: "g"
      },
      PROCNT: {
        label: "Protein",
        quantity: 5.318401535555555,
        unit: "g"
      },
      NA: {
        label: "Sodium",
        quantity: 571.3481630693334,
        unit: "mg"
      },
      CA: {
        label: "Calcium",
        quantity: 35.44580059903038,
        unit: "mg"
      },
      MG: {
        label: "Magnesium",
        quantity: 57.61082140458922,
        unit: "mg"
      },
      K: {
        label: "Potassium",
        quantity: 1031.3464176811578,
        unit: "mg"
      },
      FE: {
        label: "Iron",
        quantity: 2.1827324679588895,
        unit: "mg"
      },
      ZN: {
        label: "Zinc",
        quantity: 0.7205581871255895,
        unit: "mg"
      },
      P: {
        label: "Phosphorus",
        quantity: 135.88664488888887,
        unit: "mg"
      },
      VITA_RAE: {
        label: "Vitamin A",
        quantity: 0.19841399999999998,
        unit: "µg"
      },
      VITC: {
        label: "Vitamin C",
        quantity: 13.962466666666664,
        unit: "mg"
      },
      THIA: {
        label: "Thiamin (B1)",
        quantity: 0.20165721155555552,
        unit: "mg"
      },
      RIBF: {
        label: "Riboflavin (B2)",
        quantity: 0.08215809333333332,
        unit: "mg"
      },
      NIA: {
        label: "Niacin (B3)",
        quantity: 2.543689525999999,
        unit: "mg"
      },
      VITB6A: {
        label: "Vitamin B6",
        quantity: 0.8472351286666664,
        unit: "mg"
      },
      FOLDFE: {
        label: "Folate equivalent (total)",
        quantity: 34.4187051111111,
        unit: "µg"
      },
      FOLFD: {
        label: "Folate (food)",
        quantity: 34.4187051111111,
        unit: "µg"
      },
      TOCPHA: {
        label: "Vitamin E",
        quantity: 0.03213816888888889,
        unit: "mg"
      },
      VITK1: {
        label: "Vitamin K",
        quantity: 5.612176733333333,
        unit: "µg"
      }
    },
    totalDaily: {
      ENERC_KCAL: {
        label: "Energy",
        quantity: 9.767970211111109,
        unit: "%"
      },
      FAT: {
        label: "Fat",
        quantity: 0.3383401504273504,
        unit: "%"
      },
      FASAT: {
        label: "Saturated",
        quantity: 0.36958894222222216,
        unit: "%"
      },
      CHOCDF: {
        label: "Carbs",
        quantity: 14.911138707407405,
        unit: "%"
      },
      FIBTG: {
        label: "Fiber",
        quantity: 13.481373955555553,
        unit: "%"
      },
      PROCNT: {
        label: "Protein",
        quantity: 10.63680307111111,
        unit: "%"
      },
      NA: {
        label: "Sodium",
        quantity: 23.806173461222226,
        unit: "%"
      },
      CA: {
        label: "Calcium",
        quantity: 3.5445800599030375,
        unit: "%"
      },
      MG: {
        label: "Magnesium",
        quantity: 13.716862239187908,
        unit: "%"
      },
      K: {
        label: "Potassium",
        quantity: 21.943540801726765,
        unit: "%"
      },
      FE: {
        label: "Iron",
        quantity: 12.126291488660497,
        unit: "%"
      },
      ZN: {
        label: "Zinc",
        quantity: 6.550528973868995,
        unit: "%"
      },
      P: {
        label: "Phosphorus",
        quantity: 19.412377841269837,
        unit: "%"
      },
      VITA_RAE: {
        label: "Vitamin A",
        quantity: 0.022045999999999996,
        unit: "%"
      },
      VITC: {
        label: "Vitamin C",
        quantity: 15.51385185185185,
        unit: "%"
      },
      THIA: {
        label: "Thiamin (B1)",
        quantity: 16.804767629629627,
        unit: "%"
      },
      RIBF: {
        label: "Riboflavin (B2)",
        quantity: 6.319853333333333,
        unit: "%"
      },
      NIA: {
        label: "Niacin (B3)",
        quantity: 15.898059537499995,
        unit: "%"
      },
      VITB6A: {
        label: "Vitamin B6",
        quantity: 65.17193297435895,
        unit: "%"
      },
      FOLDFE: {
        label: "Folate equivalent (total)",
        quantity: 8.604676277777775,
        unit: "%"
      },
      TOCPHA: {
        label: "Vitamin E",
        quantity: 0.21425445925925926,
        unit: "%"
      },
      VITK1: {
        label: "Vitamin K",
        quantity: 4.676813944444444,
        unit: "%"
      }
    },
    digest: [
      {
        label: "Fat",
        tag: "FAT",
        schemaOrgTag: "fatContent",
        total: 0.21992109777777774,
        hasRDI: true,
        daily: 0.3383401504273504,
        unit: "g",
        sub: [
          {
            label: "Saturated",
            tag: "FASAT",
            schemaOrgTag: "saturatedFatContent",
            total: 0.07391778844444442,
            hasRDI: true,
            daily: 0.36958894222222216,
            unit: "g"
          },
          {
            label: "Trans",
            tag: "FATRN",
            schemaOrgTag: "transFatContent",
            total: 0.0,
            hasRDI: false,
            daily: 0.0,
            unit: "g"
          },
          {
            label: "Monounsaturated",
            tag: "FAMS",
            schemaOrgTag: null,
            total: 0.010329775777777776,
            hasRDI: false,
            daily: 0.0,
            unit: "g"
          },
          {
            label: "Polyunsaturated",
            tag: "FAPU",
            schemaOrgTag: null,
            total: 0.11266485822222219,
            hasRDI: false,
            daily: 0.0,
            unit: "g"
          }
        ]
      },
      {
        label: "Carbs",
        tag: "CHOCDF",
        schemaOrgTag: "carbohydrateContent",
        total: 44.733416122222216,
        hasRDI: true,
        daily: 14.911138707407405,
        unit: "g",
        sub: [
          {
            label: "Carbs (net)",
            tag: "CHOCDF.net",
            schemaOrgTag: null,
            total: 41.36307263333333,
            hasRDI: false,
            daily: 0.0,
            unit: "g"
          },
          {
            label: "Fiber",
            tag: "FIBTG",
            schemaOrgTag: "fiberContent",
            total: 3.370343488888888,
            hasRDI: true,
            daily: 13.481373955555553,
            unit: "g"
          },
          {
            label: "Sugars",
            tag: "SUGAR",
            schemaOrgTag: "sugarContent",
            total: 1.5234275911111108,
            hasRDI: false,
            daily: 0.0,
            unit: "g"
          },
          {
            label: "Sugars, added",
            tag: "SUGAR.added",
            schemaOrgTag: null,
            total: 0.0,
            hasRDI: false,
            daily: 0.0,
            unit: "g"
          }
        ]
      },
      {
        label: "Protein",
        tag: "PROCNT",
        schemaOrgTag: "proteinContent",
        total: 5.318401535555555,
        hasRDI: true,
        daily: 10.63680307111111,
        unit: "g"
      },
      {
        label: "Cholesterol",
        tag: "CHOLE",
        schemaOrgTag: "cholesterolContent",
        total: 0.0,
        hasRDI: false,
        daily: 0.0,
        unit: "mg"
      },
      {
        label: "Sodium",
        tag: "NA",
        schemaOrgTag: "sodiumContent",
        total: 571.3481630693334,
        hasRDI: true,
        daily: 23.806173461222226,
        unit: "mg"
      },
      {
        label: "Calcium",
        tag: "CA",
        schemaOrgTag: null,
        total: 35.44580059903038,
        hasRDI: true,
        daily: 3.5445800599030375,
        unit: "mg"
      },
      {
        label: "Magnesium",
        tag: "MG",
        schemaOrgTag: null,
        total: 57.61082140458922,
        hasRDI: true,
        daily: 13.716862239187908,
        unit: "mg"
      },
      {
        label: "Potassium",
        tag: "K",
        schemaOrgTag: null,
        total: 1031.3464176811578,
        hasRDI: true,
        daily: 21.943540801726765,
        unit: "mg"
      },
      {
        label: "Iron",
        tag: "FE",
        schemaOrgTag: null,
        total: 2.1827324679588895,
        hasRDI: true,
        daily: 12.126291488660497,
        unit: "mg"
      },
      {
        label: "Zinc",
        tag: "ZN",
        schemaOrgTag: null,
        total: 0.7205581871255895,
        hasRDI: true,
        daily: 6.550528973868995,
        unit: "mg"
      },
      {
        label: "Phosphorus",
        tag: "P",
        schemaOrgTag: null,
        total: 135.88664488888887,
        hasRDI: true,
        daily: 19.412377841269837,
        unit: "mg"
      },
      {
        label: "Vitamin A",
        tag: "VITA_RAE",
        schemaOrgTag: null,
        total: 0.19841399999999998,
        hasRDI: true,
        daily: 0.022045999999999996,
        unit: "µg"
      },
      {
        label: "Vitamin C",
        tag: "VITC",
        schemaOrgTag: null,
        total: 13.962466666666664,
        hasRDI: true,
        daily: 15.51385185185185,
        unit: "mg"
      },
      {
        label: "Thiamin (B1)",
        tag: "THIA",
        schemaOrgTag: null,
        total: 0.20165721155555552,
        hasRDI: true,
        daily: 16.804767629629627,
        unit: "mg"
      },
      {
        label: "Riboflavin (B2)",
        tag: "RIBF",
        schemaOrgTag: null,
        total: 0.08215809333333332,
        hasRDI: true,
        daily: 6.319853333333333,
        unit: "mg"
      },
      {
        label: "Niacin (B3)",
        tag: "NIA",
        schemaOrgTag: null,
        total: 2.543689525999999,
        hasRDI: true,
        daily: 15.898059537499995,
        unit: "mg"
      },
      {
        label: "Vitamin B6",
        tag: "VITB6A",
        schemaOrgTag: null,
        total: 0.8472351286666664,
        hasRDI: true,
        daily: 65.17193297435895,
        unit: "mg"
      },
      {
        label: "Folate equivalent (total)",
        tag: "FOLDFE",
        schemaOrgTag: null,
        total: 34.4187051111111,
        hasRDI: true,
        daily: 8.604676277777775,
        unit: "µg"
      },
      {
        label: "Folate (food)",
        tag: "FOLFD",
        schemaOrgTag: null,
        total: 34.4187051111111,
        hasRDI: false,
        daily: 0.0,
        unit: "µg"
      },
      {
        label: "Folic acid",
        tag: "FOLAC",
        schemaOrgTag: null,
        total: 0.0,
        hasRDI: false,
        daily: 0.0,
        unit: "µg"
      },
      {
        label: "Vitamin B12",
        tag: "VITB12",
        schemaOrgTag: null,
        total: 0.0,
        hasRDI: false,
        daily: 0.0,
        unit: "µg"
      },
      {
        label: "Vitamin D",
        tag: "VITD",
        schemaOrgTag: null,
        total: 0.0,
        hasRDI: false,
        daily: 0.0,
        unit: "µg"
      },
      {
        label: "Vitamin E",
        tag: "TOCPHA",
        schemaOrgTag: null,
        total: 0.03213816888888889,
        hasRDI: true,
        daily: 0.21425445925925926,
        unit: "mg"
      },
      {
        label: "Vitamin K",
        tag: "VITK1",
        schemaOrgTag: null,
        total: 5.612176733333333,
        hasRDI: true,
        daily: 4.676813944444444,
        unit: "µg"
      }
    ]
  },
  {
    uri:
      "http://www.edamam.com/ontologies/edamam.owl#recipe_39e587841dfc191f0651af1cd6a514a8",
    label: "Baked Potato Snack recipes",
    image:
      "https://www.edamam.com/web-img/633/6330c4b566f8eba34eb1c5a4e66aa43e",
    source: "Martha Stewart",
    url: "http://www.marthastewart.com/353269/baked-potato-snack",
    shareAs:
      "http://www.edamam.com/recipe/baked-potato-snack-recipes-39e587841dfc191f0651af1cd6a514a8/potato",
    yield: 1.0,
    dietLabels: ["Low-Fat"],
    healthLabels: [
      "Sugar-Conscious",
      "Vegan",
      "Vegetarian",
      "Peanut-Free",
      "Tree-Nut-Free",
      "Alcohol-Free"
    ],
    cautions: [],
    ingredientLines: [
      "1 medium sweet potato, or baking potato",
      "ground black pepper",
      "salt"
    ],
    ingredients: [
      {
        text: "1 medium sweet potato, or baking potato",
        weight: 244.95555555555552
      },
      {
        text: "ground black pepper",
        weight: 0.7348666666666666
      },
      {
        text: "salt",
        weight: 1.4697333333333331
      }
    ],
    calories: 195.3594042222222,
    totalWeight: 247.1325849033673,
    totalTime: 70.0,
    totalNutrients: {
      ENERC_KCAL: {
        label: "Energy",
        quantity: 195.3594042222222,
        unit: "kcal"
      },
      FAT: {
        label: "Fat",
        quantity: 0.21992109777777774,
        unit: "g"
      },
      FASAT: {
        label: "Saturated",
        quantity: 0.07391778844444442,
        unit: "g"
      },
      FAMS: {
        label: "Monounsaturated",
        quantity: 0.010329775777777776,
        unit: "g"
      },
      FAPU: {
        label: "Polyunsaturated",
        quantity: 0.11266485822222219,
        unit: "g"
      },
      CHOCDF: {
        label: "Carbs",
        quantity: 44.733416122222216,
        unit: "g"
      },
      FIBTG: {
        label: "Fiber",
        quantity: 3.370343488888888,
        unit: "g"
      },
      SUGAR: {
        label: "Sugars",
        quantity: 1.5234275911111108,
        unit: "g"
      },
      PROCNT: {
        label: "Protein",
        quantity: 5.318401535555555,
        unit: "g"
      },
      NA: {
        label: "Sodium",
        quantity: 571.3481630693334,
        unit: "mg"
      },
      CA: {
        label: "Calcium",
        quantity: 35.44580059903038,
        unit: "mg"
      },
      MG: {
        label: "Magnesium",
        quantity: 57.61082140458922,
        unit: "mg"
      },
      K: {
        label: "Potassium",
        quantity: 1031.3464176811578,
        unit: "mg"
      },
      FE: {
        label: "Iron",
        quantity: 2.1827324679588895,
        unit: "mg"
      },
      ZN: {
        label: "Zinc",
        quantity: 0.7205581871255895,
        unit: "mg"
      },
      P: {
        label: "Phosphorus",
        quantity: 135.88664488888887,
        unit: "mg"
      },
      VITA_RAE: {
        label: "Vitamin A",
        quantity: 0.19841399999999998,
        unit: "µg"
      },
      VITC: {
        label: "Vitamin C",
        quantity: 13.962466666666664,
        unit: "mg"
      },
      THIA: {
        label: "Thiamin (B1)",
        quantity: 0.20165721155555552,
        unit: "mg"
      },
      RIBF: {
        label: "Riboflavin (B2)",
        quantity: 0.08215809333333332,
        unit: "mg"
      },
      NIA: {
        label: "Niacin (B3)",
        quantity: 2.543689525999999,
        unit: "mg"
      },
      VITB6A: {
        label: "Vitamin B6",
        quantity: 0.8472351286666664,
        unit: "mg"
      },
      FOLDFE: {
        label: "Folate equivalent (total)",
        quantity: 34.4187051111111,
        unit: "µg"
      },
      FOLFD: {
        label: "Folate (food)",
        quantity: 34.4187051111111,
        unit: "µg"
      },
      TOCPHA: {
        label: "Vitamin E",
        quantity: 0.03213816888888889,
        unit: "mg"
      },
      VITK1: {
        label: "Vitamin K",
        quantity: 5.612176733333333,
        unit: "µg"
      }
    },
    totalDaily: {
      ENERC_KCAL: {
        label: "Energy",
        quantity: 9.767970211111109,
        unit: "%"
      },
      FAT: {
        label: "Fat",
        quantity: 0.3383401504273504,
        unit: "%"
      },
      FASAT: {
        label: "Saturated",
        quantity: 0.36958894222222216,
        unit: "%"
      },
      CHOCDF: {
        label: "Carbs",
        quantity: 14.911138707407405,
        unit: "%"
      },
      FIBTG: {
        label: "Fiber",
        quantity: 13.481373955555553,
        unit: "%"
      },
      PROCNT: {
        label: "Protein",
        quantity: 10.63680307111111,
        unit: "%"
      },
      NA: {
        label: "Sodium",
        quantity: 23.806173461222226,
        unit: "%"
      },
      CA: {
        label: "Calcium",
        quantity: 3.5445800599030375,
        unit: "%"
      },
      MG: {
        label: "Magnesium",
        quantity: 13.716862239187908,
        unit: "%"
      },
      K: {
        label: "Potassium",
        quantity: 21.943540801726765,
        unit: "%"
      },
      FE: {
        label: "Iron",
        quantity: 12.126291488660497,
        unit: "%"
      },
      ZN: {
        label: "Zinc",
        quantity: 6.550528973868995,
        unit: "%"
      },
      P: {
        label: "Phosphorus",
        quantity: 19.412377841269837,
        unit: "%"
      },
      VITA_RAE: {
        label: "Vitamin A",
        quantity: 0.022045999999999996,
        unit: "%"
      },
      VITC: {
        label: "Vitamin C",
        quantity: 15.51385185185185,
        unit: "%"
      },
      THIA: {
        label: "Thiamin (B1)",
        quantity: 16.804767629629627,
        unit: "%"
      },
      RIBF: {
        label: "Riboflavin (B2)",
        quantity: 6.319853333333333,
        unit: "%"
      },
      NIA: {
        label: "Niacin (B3)",
        quantity: 15.898059537499995,
        unit: "%"
      },
      VITB6A: {
        label: "Vitamin B6",
        quantity: 65.17193297435895,
        unit: "%"
      },
      FOLDFE: {
        label: "Folate equivalent (total)",
        quantity: 8.604676277777775,
        unit: "%"
      },
      TOCPHA: {
        label: "Vitamin E",
        quantity: 0.21425445925925926,
        unit: "%"
      },
      VITK1: {
        label: "Vitamin K",
        quantity: 4.676813944444444,
        unit: "%"
      }
    },
    digest: [
      {
        label: "Fat",
        tag: "FAT",
        schemaOrgTag: "fatContent",
        total: 0.21992109777777774,
        hasRDI: true,
        daily: 0.3383401504273504,
        unit: "g",
        sub: [
          {
            label: "Saturated",
            tag: "FASAT",
            schemaOrgTag: "saturatedFatContent",
            total: 0.07391778844444442,
            hasRDI: true,
            daily: 0.36958894222222216,
            unit: "g"
          },
          {
            label: "Trans",
            tag: "FATRN",
            schemaOrgTag: "transFatContent",
            total: 0.0,
            hasRDI: false,
            daily: 0.0,
            unit: "g"
          },
          {
            label: "Monounsaturated",
            tag: "FAMS",
            schemaOrgTag: null,
            total: 0.010329775777777776,
            hasRDI: false,
            daily: 0.0,
            unit: "g"
          },
          {
            label: "Polyunsaturated",
            tag: "FAPU",
            schemaOrgTag: null,
            total: 0.11266485822222219,
            hasRDI: false,
            daily: 0.0,
            unit: "g"
          }
        ]
      },
      {
        label: "Carbs",
        tag: "CHOCDF",
        schemaOrgTag: "carbohydrateContent",
        total: 44.733416122222216,
        hasRDI: true,
        daily: 14.911138707407405,
        unit: "g",
        sub: [
          {
            label: "Carbs (net)",
            tag: "CHOCDF.net",
            schemaOrgTag: null,
            total: 41.36307263333333,
            hasRDI: false,
            daily: 0.0,
            unit: "g"
          },
          {
            label: "Fiber",
            tag: "FIBTG",
            schemaOrgTag: "fiberContent",
            total: 3.370343488888888,
            hasRDI: true,
            daily: 13.481373955555553,
            unit: "g"
          },
          {
            label: "Sugars",
            tag: "SUGAR",
            schemaOrgTag: "sugarContent",
            total: 1.5234275911111108,
            hasRDI: false,
            daily: 0.0,
            unit: "g"
          },
          {
            label: "Sugars, added",
            tag: "SUGAR.added",
            schemaOrgTag: null,
            total: 0.0,
            hasRDI: false,
            daily: 0.0,
            unit: "g"
          }
        ]
      },
      {
        label: "Protein",
        tag: "PROCNT",
        schemaOrgTag: "proteinContent",
        total: 5.318401535555555,
        hasRDI: true,
        daily: 10.63680307111111,
        unit: "g"
      },
      {
        label: "Cholesterol",
        tag: "CHOLE",
        schemaOrgTag: "cholesterolContent",
        total: 0.0,
        hasRDI: false,
        daily: 0.0,
        unit: "mg"
      },
      {
        label: "Sodium",
        tag: "NA",
        schemaOrgTag: "sodiumContent",
        total: 571.3481630693334,
        hasRDI: true,
        daily: 23.806173461222226,
        unit: "mg"
      },
      {
        label: "Calcium",
        tag: "CA",
        schemaOrgTag: null,
        total: 35.44580059903038,
        hasRDI: true,
        daily: 3.5445800599030375,
        unit: "mg"
      },
      {
        label: "Magnesium",
        tag: "MG",
        schemaOrgTag: null,
        total: 57.61082140458922,
        hasRDI: true,
        daily: 13.716862239187908,
        unit: "mg"
      },
      {
        label: "Potassium",
        tag: "K",
        schemaOrgTag: null,
        total: 1031.3464176811578,
        hasRDI: true,
        daily: 21.943540801726765,
        unit: "mg"
      },
      {
        label: "Iron",
        tag: "FE",
        schemaOrgTag: null,
        total: 2.1827324679588895,
        hasRDI: true,
        daily: 12.126291488660497,
        unit: "mg"
      },
      {
        label: "Zinc",
        tag: "ZN",
        schemaOrgTag: null,
        total: 0.7205581871255895,
        hasRDI: true,
        daily: 6.550528973868995,
        unit: "mg"
      },
      {
        label: "Phosphorus",
        tag: "P",
        schemaOrgTag: null,
        total: 135.88664488888887,
        hasRDI: true,
        daily: 19.412377841269837,
        unit: "mg"
      },
      {
        label: "Vitamin A",
        tag: "VITA_RAE",
        schemaOrgTag: null,
        total: 0.19841399999999998,
        hasRDI: true,
        daily: 0.022045999999999996,
        unit: "µg"
      },
      {
        label: "Vitamin C",
        tag: "VITC",
        schemaOrgTag: null,
        total: 13.962466666666664,
        hasRDI: true,
        daily: 15.51385185185185,
        unit: "mg"
      },
      {
        label: "Thiamin (B1)",
        tag: "THIA",
        schemaOrgTag: null,
        total: 0.20165721155555552,
        hasRDI: true,
        daily: 16.804767629629627,
        unit: "mg"
      },
      {
        label: "Riboflavin (B2)",
        tag: "RIBF",
        schemaOrgTag: null,
        total: 0.08215809333333332,
        hasRDI: true,
        daily: 6.319853333333333,
        unit: "mg"
      },
      {
        label: "Niacin (B3)",
        tag: "NIA",
        schemaOrgTag: null,
        total: 2.543689525999999,
        hasRDI: true,
        daily: 15.898059537499995,
        unit: "mg"
      },
      {
        label: "Vitamin B6",
        tag: "VITB6A",
        schemaOrgTag: null,
        total: 0.8472351286666664,
        hasRDI: true,
        daily: 65.17193297435895,
        unit: "mg"
      },
      {
        label: "Folate equivalent (total)",
        tag: "FOLDFE",
        schemaOrgTag: null,
        total: 34.4187051111111,
        hasRDI: true,
        daily: 8.604676277777775,
        unit: "µg"
      },
      {
        label: "Folate (food)",
        tag: "FOLFD",
        schemaOrgTag: null,
        total: 34.4187051111111,
        hasRDI: false,
        daily: 0.0,
        unit: "µg"
      },
      {
        label: "Folic acid",
        tag: "FOLAC",
        schemaOrgTag: null,
        total: 0.0,
        hasRDI: false,
        daily: 0.0,
        unit: "µg"
      },
      {
        label: "Vitamin B12",
        tag: "VITB12",
        schemaOrgTag: null,
        total: 0.0,
        hasRDI: false,
        daily: 0.0,
        unit: "µg"
      },
      {
        label: "Vitamin D",
        tag: "VITD",
        schemaOrgTag: null,
        total: 0.0,
        hasRDI: false,
        daily: 0.0,
        unit: "µg"
      },
      {
        label: "Vitamin E",
        tag: "TOCPHA",
        schemaOrgTag: null,
        total: 0.03213816888888889,
        hasRDI: true,
        daily: 0.21425445925925926,
        unit: "mg"
      },
      {
        label: "Vitamin K",
        tag: "VITK1",
        schemaOrgTag: null,
        total: 5.612176733333333,
        hasRDI: true,
        daily: 4.676813944444444,
        unit: "µg"
      }
    ]
  },
  {
    uri:
      "http://www.edamam.com/ontologies/edamam.owl#recipe_39e587841dfc191f0651af1cd6a514a8",
    label: "Baked Potato Snack recipes",
    image:
      "https://www.edamam.com/web-img/633/6330c4b566f8eba34eb1c5a4e66aa43e",
    source: "Martha Stewart",
    url: "http://www.marthastewart.com/353269/baked-potato-snack",
    shareAs:
      "http://www.edamam.com/recipe/baked-potato-snack-recipes-39e587841dfc191f0651af1cd6a514a8/potato",
    yield: 1.0,
    dietLabels: ["Low-Fat"],
    healthLabels: [
      "Sugar-Conscious",
      "Vegan",
      "Vegetarian",
      "Peanut-Free",
      "Tree-Nut-Free",
      "Alcohol-Free"
    ],
    cautions: [],
    ingredientLines: [
      "1 medium sweet potato, or baking potato",
      "ground black pepper",
      "salt"
    ],
    ingredients: [
      {
        text: "1 medium sweet potato, or baking potato",
        weight: 244.95555555555552
      },
      {
        text: "ground black pepper",
        weight: 0.7348666666666666
      },
      {
        text: "salt",
        weight: 1.4697333333333331
      }
    ],
    calories: 195.3594042222222,
    totalWeight: 247.1325849033673,
    totalTime: 70.0,
    totalNutrients: {
      ENERC_KCAL: {
        label: "Energy",
        quantity: 195.3594042222222,
        unit: "kcal"
      },
      FAT: {
        label: "Fat",
        quantity: 0.21992109777777774,
        unit: "g"
      },
      FASAT: {
        label: "Saturated",
        quantity: 0.07391778844444442,
        unit: "g"
      },
      FAMS: {
        label: "Monounsaturated",
        quantity: 0.010329775777777776,
        unit: "g"
      },
      FAPU: {
        label: "Polyunsaturated",
        quantity: 0.11266485822222219,
        unit: "g"
      },
      CHOCDF: {
        label: "Carbs",
        quantity: 44.733416122222216,
        unit: "g"
      },
      FIBTG: {
        label: "Fiber",
        quantity: 3.370343488888888,
        unit: "g"
      },
      SUGAR: {
        label: "Sugars",
        quantity: 1.5234275911111108,
        unit: "g"
      },
      PROCNT: {
        label: "Protein",
        quantity: 5.318401535555555,
        unit: "g"
      },
      NA: {
        label: "Sodium",
        quantity: 571.3481630693334,
        unit: "mg"
      },
      CA: {
        label: "Calcium",
        quantity: 35.44580059903038,
        unit: "mg"
      },
      MG: {
        label: "Magnesium",
        quantity: 57.61082140458922,
        unit: "mg"
      },
      K: {
        label: "Potassium",
        quantity: 1031.3464176811578,
        unit: "mg"
      },
      FE: {
        label: "Iron",
        quantity: 2.1827324679588895,
        unit: "mg"
      },
      ZN: {
        label: "Zinc",
        quantity: 0.7205581871255895,
        unit: "mg"
      },
      P: {
        label: "Phosphorus",
        quantity: 135.88664488888887,
        unit: "mg"
      },
      VITA_RAE: {
        label: "Vitamin A",
        quantity: 0.19841399999999998,
        unit: "µg"
      },
      VITC: {
        label: "Vitamin C",
        quantity: 13.962466666666664,
        unit: "mg"
      },
      THIA: {
        label: "Thiamin (B1)",
        quantity: 0.20165721155555552,
        unit: "mg"
      },
      RIBF: {
        label: "Riboflavin (B2)",
        quantity: 0.08215809333333332,
        unit: "mg"
      },
      NIA: {
        label: "Niacin (B3)",
        quantity: 2.543689525999999,
        unit: "mg"
      },
      VITB6A: {
        label: "Vitamin B6",
        quantity: 0.8472351286666664,
        unit: "mg"
      },
      FOLDFE: {
        label: "Folate equivalent (total)",
        quantity: 34.4187051111111,
        unit: "µg"
      },
      FOLFD: {
        label: "Folate (food)",
        quantity: 34.4187051111111,
        unit: "µg"
      },
      TOCPHA: {
        label: "Vitamin E",
        quantity: 0.03213816888888889,
        unit: "mg"
      },
      VITK1: {
        label: "Vitamin K",
        quantity: 5.612176733333333,
        unit: "µg"
      }
    },
    totalDaily: {
      ENERC_KCAL: {
        label: "Energy",
        quantity: 9.767970211111109,
        unit: "%"
      },
      FAT: {
        label: "Fat",
        quantity: 0.3383401504273504,
        unit: "%"
      },
      FASAT: {
        label: "Saturated",
        quantity: 0.36958894222222216,
        unit: "%"
      },
      CHOCDF: {
        label: "Carbs",
        quantity: 14.911138707407405,
        unit: "%"
      },
      FIBTG: {
        label: "Fiber",
        quantity: 13.481373955555553,
        unit: "%"
      },
      PROCNT: {
        label: "Protein",
        quantity: 10.63680307111111,
        unit: "%"
      },
      NA: {
        label: "Sodium",
        quantity: 23.806173461222226,
        unit: "%"
      },
      CA: {
        label: "Calcium",
        quantity: 3.5445800599030375,
        unit: "%"
      },
      MG: {
        label: "Magnesium",
        quantity: 13.716862239187908,
        unit: "%"
      },
      K: {
        label: "Potassium",
        quantity: 21.943540801726765,
        unit: "%"
      },
      FE: {
        label: "Iron",
        quantity: 12.126291488660497,
        unit: "%"
      },
      ZN: {
        label: "Zinc",
        quantity: 6.550528973868995,
        unit: "%"
      },
      P: {
        label: "Phosphorus",
        quantity: 19.412377841269837,
        unit: "%"
      },
      VITA_RAE: {
        label: "Vitamin A",
        quantity: 0.022045999999999996,
        unit: "%"
      },
      VITC: {
        label: "Vitamin C",
        quantity: 15.51385185185185,
        unit: "%"
      },
      THIA: {
        label: "Thiamin (B1)",
        quantity: 16.804767629629627,
        unit: "%"
      },
      RIBF: {
        label: "Riboflavin (B2)",
        quantity: 6.319853333333333,
        unit: "%"
      },
      NIA: {
        label: "Niacin (B3)",
        quantity: 15.898059537499995,
        unit: "%"
      },
      VITB6A: {
        label: "Vitamin B6",
        quantity: 65.17193297435895,
        unit: "%"
      },
      FOLDFE: {
        label: "Folate equivalent (total)",
        quantity: 8.604676277777775,
        unit: "%"
      },
      TOCPHA: {
        label: "Vitamin E",
        quantity: 0.21425445925925926,
        unit: "%"
      },
      VITK1: {
        label: "Vitamin K",
        quantity: 4.676813944444444,
        unit: "%"
      }
    },
    digest: [
      {
        label: "Fat",
        tag: "FAT",
        schemaOrgTag: "fatContent",
        total: 0.21992109777777774,
        hasRDI: true,
        daily: 0.3383401504273504,
        unit: "g",
        sub: [
          {
            label: "Saturated",
            tag: "FASAT",
            schemaOrgTag: "saturatedFatContent",
            total: 0.07391778844444442,
            hasRDI: true,
            daily: 0.36958894222222216,
            unit: "g"
          },
          {
            label: "Trans",
            tag: "FATRN",
            schemaOrgTag: "transFatContent",
            total: 0.0,
            hasRDI: false,
            daily: 0.0,
            unit: "g"
          },
          {
            label: "Monounsaturated",
            tag: "FAMS",
            schemaOrgTag: null,
            total: 0.010329775777777776,
            hasRDI: false,
            daily: 0.0,
            unit: "g"
          },
          {
            label: "Polyunsaturated",
            tag: "FAPU",
            schemaOrgTag: null,
            total: 0.11266485822222219,
            hasRDI: false,
            daily: 0.0,
            unit: "g"
          }
        ]
      },
      {
        label: "Carbs",
        tag: "CHOCDF",
        schemaOrgTag: "carbohydrateContent",
        total: 44.733416122222216,
        hasRDI: true,
        daily: 14.911138707407405,
        unit: "g",
        sub: [
          {
            label: "Carbs (net)",
            tag: "CHOCDF.net",
            schemaOrgTag: null,
            total: 41.36307263333333,
            hasRDI: false,
            daily: 0.0,
            unit: "g"
          },
          {
            label: "Fiber",
            tag: "FIBTG",
            schemaOrgTag: "fiberContent",
            total: 3.370343488888888,
            hasRDI: true,
            daily: 13.481373955555553,
            unit: "g"
          },
          {
            label: "Sugars",
            tag: "SUGAR",
            schemaOrgTag: "sugarContent",
            total: 1.5234275911111108,
            hasRDI: false,
            daily: 0.0,
            unit: "g"
          },
          {
            label: "Sugars, added",
            tag: "SUGAR.added",
            schemaOrgTag: null,
            total: 0.0,
            hasRDI: false,
            daily: 0.0,
            unit: "g"
          }
        ]
      },
      {
        label: "Protein",
        tag: "PROCNT",
        schemaOrgTag: "proteinContent",
        total: 5.318401535555555,
        hasRDI: true,
        daily: 10.63680307111111,
        unit: "g"
      },
      {
        label: "Cholesterol",
        tag: "CHOLE",
        schemaOrgTag: "cholesterolContent",
        total: 0.0,
        hasRDI: false,
        daily: 0.0,
        unit: "mg"
      },
      {
        label: "Sodium",
        tag: "NA",
        schemaOrgTag: "sodiumContent",
        total: 571.3481630693334,
        hasRDI: true,
        daily: 23.806173461222226,
        unit: "mg"
      },
      {
        label: "Calcium",
        tag: "CA",
        schemaOrgTag: null,
        total: 35.44580059903038,
        hasRDI: true,
        daily: 3.5445800599030375,
        unit: "mg"
      },
      {
        label: "Magnesium",
        tag: "MG",
        schemaOrgTag: null,
        total: 57.61082140458922,
        hasRDI: true,
        daily: 13.716862239187908,
        unit: "mg"
      },
      {
        label: "Potassium",
        tag: "K",
        schemaOrgTag: null,
        total: 1031.3464176811578,
        hasRDI: true,
        daily: 21.943540801726765,
        unit: "mg"
      },
      {
        label: "Iron",
        tag: "FE",
        schemaOrgTag: null,
        total: 2.1827324679588895,
        hasRDI: true,
        daily: 12.126291488660497,
        unit: "mg"
      },
      {
        label: "Zinc",
        tag: "ZN",
        schemaOrgTag: null,
        total: 0.7205581871255895,
        hasRDI: true,
        daily: 6.550528973868995,
        unit: "mg"
      },
      {
        label: "Phosphorus",
        tag: "P",
        schemaOrgTag: null,
        total: 135.88664488888887,
        hasRDI: true,
        daily: 19.412377841269837,
        unit: "mg"
      },
      {
        label: "Vitamin A",
        tag: "VITA_RAE",
        schemaOrgTag: null,
        total: 0.19841399999999998,
        hasRDI: true,
        daily: 0.022045999999999996,
        unit: "µg"
      },
      {
        label: "Vitamin C",
        tag: "VITC",
        schemaOrgTag: null,
        total: 13.962466666666664,
        hasRDI: true,
        daily: 15.51385185185185,
        unit: "mg"
      },
      {
        label: "Thiamin (B1)",
        tag: "THIA",
        schemaOrgTag: null,
        total: 0.20165721155555552,
        hasRDI: true,
        daily: 16.804767629629627,
        unit: "mg"
      },
      {
        label: "Riboflavin (B2)",
        tag: "RIBF",
        schemaOrgTag: null,
        total: 0.08215809333333332,
        hasRDI: true,
        daily: 6.319853333333333,
        unit: "mg"
      },
      {
        label: "Niacin (B3)",
        tag: "NIA",
        schemaOrgTag: null,
        total: 2.543689525999999,
        hasRDI: true,
        daily: 15.898059537499995,
        unit: "mg"
      },
      {
        label: "Vitamin B6",
        tag: "VITB6A",
        schemaOrgTag: null,
        total: 0.8472351286666664,
        hasRDI: true,
        daily: 65.17193297435895,
        unit: "mg"
      },
      {
        label: "Folate equivalent (total)",
        tag: "FOLDFE",
        schemaOrgTag: null,
        total: 34.4187051111111,
        hasRDI: true,
        daily: 8.604676277777775,
        unit: "µg"
      },
      {
        label: "Folate (food)",
        tag: "FOLFD",
        schemaOrgTag: null,
        total: 34.4187051111111,
        hasRDI: false,
        daily: 0.0,
        unit: "µg"
      },
      {
        label: "Folic acid",
        tag: "FOLAC",
        schemaOrgTag: null,
        total: 0.0,
        hasRDI: false,
        daily: 0.0,
        unit: "µg"
      },
      {
        label: "Vitamin B12",
        tag: "VITB12",
        schemaOrgTag: null,
        total: 0.0,
        hasRDI: false,
        daily: 0.0,
        unit: "µg"
      },
      {
        label: "Vitamin D",
        tag: "VITD",
        schemaOrgTag: null,
        total: 0.0,
        hasRDI: false,
        daily: 0.0,
        unit: "µg"
      },
      {
        label: "Vitamin E",
        tag: "TOCPHA",
        schemaOrgTag: null,
        total: 0.03213816888888889,
        hasRDI: true,
        daily: 0.21425445925925926,
        unit: "mg"
      },
      {
        label: "Vitamin K",
        tag: "VITK1",
        schemaOrgTag: null,
        total: 5.612176733333333,
        hasRDI: true,
        daily: 4.676813944444444,
        unit: "µg"
      }
    ]
  },
  {
    uri:
      "http://www.edamam.com/ontologies/edamam.owl#recipe_39e587841dfc191f0651af1cd6a514a8",
    label: "Baked Potato Snack recipes",
    image:
      "https://www.edamam.com/web-img/633/6330c4b566f8eba34eb1c5a4e66aa43e",
    source: "Martha Stewart",
    url: "http://www.marthastewart.com/353269/baked-potato-snack",
    shareAs:
      "http://www.edamam.com/recipe/baked-potato-snack-recipes-39e587841dfc191f0651af1cd6a514a8/potato",
    yield: 1.0,
    dietLabels: ["Low-Fat"],
    healthLabels: [
      "Sugar-Conscious",
      "Vegan",
      "Vegetarian",
      "Peanut-Free",
      "Tree-Nut-Free",
      "Alcohol-Free"
    ],
    cautions: [],
    ingredientLines: [
      "1 medium sweet potato, or baking potato",
      "ground black pepper",
      "salt"
    ],
    ingredients: [
      {
        text: "1 medium sweet potato, or baking potato",
        weight: 244.95555555555552
      },
      {
        text: "ground black pepper",
        weight: 0.7348666666666666
      },
      {
        text: "salt",
        weight: 1.4697333333333331
      }
    ],
    calories: 195.3594042222222,
    totalWeight: 247.1325849033673,
    totalTime: 70.0,
    totalNutrients: {
      ENERC_KCAL: {
        label: "Energy",
        quantity: 195.3594042222222,
        unit: "kcal"
      },
      FAT: {
        label: "Fat",
        quantity: 0.21992109777777774,
        unit: "g"
      },
      FASAT: {
        label: "Saturated",
        quantity: 0.07391778844444442,
        unit: "g"
      },
      FAMS: {
        label: "Monounsaturated",
        quantity: 0.010329775777777776,
        unit: "g"
      },
      FAPU: {
        label: "Polyunsaturated",
        quantity: 0.11266485822222219,
        unit: "g"
      },
      CHOCDF: {
        label: "Carbs",
        quantity: 44.733416122222216,
        unit: "g"
      },
      FIBTG: {
        label: "Fiber",
        quantity: 3.370343488888888,
        unit: "g"
      },
      SUGAR: {
        label: "Sugars",
        quantity: 1.5234275911111108,
        unit: "g"
      },
      PROCNT: {
        label: "Protein",
        quantity: 5.318401535555555,
        unit: "g"
      },
      NA: {
        label: "Sodium",
        quantity: 571.3481630693334,
        unit: "mg"
      },
      CA: {
        label: "Calcium",
        quantity: 35.44580059903038,
        unit: "mg"
      },
      MG: {
        label: "Magnesium",
        quantity: 57.61082140458922,
        unit: "mg"
      },
      K: {
        label: "Potassium",
        quantity: 1031.3464176811578,
        unit: "mg"
      },
      FE: {
        label: "Iron",
        quantity: 2.1827324679588895,
        unit: "mg"
      },
      ZN: {
        label: "Zinc",
        quantity: 0.7205581871255895,
        unit: "mg"
      },
      P: {
        label: "Phosphorus",
        quantity: 135.88664488888887,
        unit: "mg"
      },
      VITA_RAE: {
        label: "Vitamin A",
        quantity: 0.19841399999999998,
        unit: "µg"
      },
      VITC: {
        label: "Vitamin C",
        quantity: 13.962466666666664,
        unit: "mg"
      },
      THIA: {
        label: "Thiamin (B1)",
        quantity: 0.20165721155555552,
        unit: "mg"
      },
      RIBF: {
        label: "Riboflavin (B2)",
        quantity: 0.08215809333333332,
        unit: "mg"
      },
      NIA: {
        label: "Niacin (B3)",
        quantity: 2.543689525999999,
        unit: "mg"
      },
      VITB6A: {
        label: "Vitamin B6",
        quantity: 0.8472351286666664,
        unit: "mg"
      },
      FOLDFE: {
        label: "Folate equivalent (total)",
        quantity: 34.4187051111111,
        unit: "µg"
      },
      FOLFD: {
        label: "Folate (food)",
        quantity: 34.4187051111111,
        unit: "µg"
      },
      TOCPHA: {
        label: "Vitamin E",
        quantity: 0.03213816888888889,
        unit: "mg"
      },
      VITK1: {
        label: "Vitamin K",
        quantity: 5.612176733333333,
        unit: "µg"
      }
    },
    totalDaily: {
      ENERC_KCAL: {
        label: "Energy",
        quantity: 9.767970211111109,
        unit: "%"
      },
      FAT: {
        label: "Fat",
        quantity: 0.3383401504273504,
        unit: "%"
      },
      FASAT: {
        label: "Saturated",
        quantity: 0.36958894222222216,
        unit: "%"
      },
      CHOCDF: {
        label: "Carbs",
        quantity: 14.911138707407405,
        unit: "%"
      },
      FIBTG: {
        label: "Fiber",
        quantity: 13.481373955555553,
        unit: "%"
      },
      PROCNT: {
        label: "Protein",
        quantity: 10.63680307111111,
        unit: "%"
      },
      NA: {
        label: "Sodium",
        quantity: 23.806173461222226,
        unit: "%"
      },
      CA: {
        label: "Calcium",
        quantity: 3.5445800599030375,
        unit: "%"
      },
      MG: {
        label: "Magnesium",
        quantity: 13.716862239187908,
        unit: "%"
      },
      K: {
        label: "Potassium",
        quantity: 21.943540801726765,
        unit: "%"
      },
      FE: {
        label: "Iron",
        quantity: 12.126291488660497,
        unit: "%"
      },
      ZN: {
        label: "Zinc",
        quantity: 6.550528973868995,
        unit: "%"
      },
      P: {
        label: "Phosphorus",
        quantity: 19.412377841269837,
        unit: "%"
      },
      VITA_RAE: {
        label: "Vitamin A",
        quantity: 0.022045999999999996,
        unit: "%"
      },
      VITC: {
        label: "Vitamin C",
        quantity: 15.51385185185185,
        unit: "%"
      },
      THIA: {
        label: "Thiamin (B1)",
        quantity: 16.804767629629627,
        unit: "%"
      },
      RIBF: {
        label: "Riboflavin (B2)",
        quantity: 6.319853333333333,
        unit: "%"
      },
      NIA: {
        label: "Niacin (B3)",
        quantity: 15.898059537499995,
        unit: "%"
      },
      VITB6A: {
        label: "Vitamin B6",
        quantity: 65.17193297435895,
        unit: "%"
      },
      FOLDFE: {
        label: "Folate equivalent (total)",
        quantity: 8.604676277777775,
        unit: "%"
      },
      TOCPHA: {
        label: "Vitamin E",
        quantity: 0.21425445925925926,
        unit: "%"
      },
      VITK1: {
        label: "Vitamin K",
        quantity: 4.676813944444444,
        unit: "%"
      }
    },
    digest: [
      {
        label: "Fat",
        tag: "FAT",
        schemaOrgTag: "fatContent",
        total: 0.21992109777777774,
        hasRDI: true,
        daily: 0.3383401504273504,
        unit: "g",
        sub: [
          {
            label: "Saturated",
            tag: "FASAT",
            schemaOrgTag: "saturatedFatContent",
            total: 0.07391778844444442,
            hasRDI: true,
            daily: 0.36958894222222216,
            unit: "g"
          },
          {
            label: "Trans",
            tag: "FATRN",
            schemaOrgTag: "transFatContent",
            total: 0.0,
            hasRDI: false,
            daily: 0.0,
            unit: "g"
          },
          {
            label: "Monounsaturated",
            tag: "FAMS",
            schemaOrgTag: null,
            total: 0.010329775777777776,
            hasRDI: false,
            daily: 0.0,
            unit: "g"
          },
          {
            label: "Polyunsaturated",
            tag: "FAPU",
            schemaOrgTag: null,
            total: 0.11266485822222219,
            hasRDI: false,
            daily: 0.0,
            unit: "g"
          }
        ]
      },
      {
        label: "Carbs",
        tag: "CHOCDF",
        schemaOrgTag: "carbohydrateContent",
        total: 44.733416122222216,
        hasRDI: true,
        daily: 14.911138707407405,
        unit: "g",
        sub: [
          {
            label: "Carbs (net)",
            tag: "CHOCDF.net",
            schemaOrgTag: null,
            total: 41.36307263333333,
            hasRDI: false,
            daily: 0.0,
            unit: "g"
          },
          {
            label: "Fiber",
            tag: "FIBTG",
            schemaOrgTag: "fiberContent",
            total: 3.370343488888888,
            hasRDI: true,
            daily: 13.481373955555553,
            unit: "g"
          },
          {
            label: "Sugars",
            tag: "SUGAR",
            schemaOrgTag: "sugarContent",
            total: 1.5234275911111108,
            hasRDI: false,
            daily: 0.0,
            unit: "g"
          },
          {
            label: "Sugars, added",
            tag: "SUGAR.added",
            schemaOrgTag: null,
            total: 0.0,
            hasRDI: false,
            daily: 0.0,
            unit: "g"
          }
        ]
      },
      {
        label: "Protein",
        tag: "PROCNT",
        schemaOrgTag: "proteinContent",
        total: 5.318401535555555,
        hasRDI: true,
        daily: 10.63680307111111,
        unit: "g"
      },
      {
        label: "Cholesterol",
        tag: "CHOLE",
        schemaOrgTag: "cholesterolContent",
        total: 0.0,
        hasRDI: false,
        daily: 0.0,
        unit: "mg"
      },
      {
        label: "Sodium",
        tag: "NA",
        schemaOrgTag: "sodiumContent",
        total: 571.3481630693334,
        hasRDI: true,
        daily: 23.806173461222226,
        unit: "mg"
      },
      {
        label: "Calcium",
        tag: "CA",
        schemaOrgTag: null,
        total: 35.44580059903038,
        hasRDI: true,
        daily: 3.5445800599030375,
        unit: "mg"
      },
      {
        label: "Magnesium",
        tag: "MG",
        schemaOrgTag: null,
        total: 57.61082140458922,
        hasRDI: true,
        daily: 13.716862239187908,
        unit: "mg"
      },
      {
        label: "Potassium",
        tag: "K",
        schemaOrgTag: null,
        total: 1031.3464176811578,
        hasRDI: true,
        daily: 21.943540801726765,
        unit: "mg"
      },
      {
        label: "Iron",
        tag: "FE",
        schemaOrgTag: null,
        total: 2.1827324679588895,
        hasRDI: true,
        daily: 12.126291488660497,
        unit: "mg"
      },
      {
        label: "Zinc",
        tag: "ZN",
        schemaOrgTag: null,
        total: 0.7205581871255895,
        hasRDI: true,
        daily: 6.550528973868995,
        unit: "mg"
      },
      {
        label: "Phosphorus",
        tag: "P",
        schemaOrgTag: null,
        total: 135.88664488888887,
        hasRDI: true,
        daily: 19.412377841269837,
        unit: "mg"
      },
      {
        label: "Vitamin A",
        tag: "VITA_RAE",
        schemaOrgTag: null,
        total: 0.19841399999999998,
        hasRDI: true,
        daily: 0.022045999999999996,
        unit: "µg"
      },
      {
        label: "Vitamin C",
        tag: "VITC",
        schemaOrgTag: null,
        total: 13.962466666666664,
        hasRDI: true,
        daily: 15.51385185185185,
        unit: "mg"
      },
      {
        label: "Thiamin (B1)",
        tag: "THIA",
        schemaOrgTag: null,
        total: 0.20165721155555552,
        hasRDI: true,
        daily: 16.804767629629627,
        unit: "mg"
      },
      {
        label: "Riboflavin (B2)",
        tag: "RIBF",
        schemaOrgTag: null,
        total: 0.08215809333333332,
        hasRDI: true,
        daily: 6.319853333333333,
        unit: "mg"
      },
      {
        label: "Niacin (B3)",
        tag: "NIA",
        schemaOrgTag: null,
        total: 2.543689525999999,
        hasRDI: true,
        daily: 15.898059537499995,
        unit: "mg"
      },
      {
        label: "Vitamin B6",
        tag: "VITB6A",
        schemaOrgTag: null,
        total: 0.8472351286666664,
        hasRDI: true,
        daily: 65.17193297435895,
        unit: "mg"
      },
      {
        label: "Folate equivalent (total)",
        tag: "FOLDFE",
        schemaOrgTag: null,
        total: 34.4187051111111,
        hasRDI: true,
        daily: 8.604676277777775,
        unit: "µg"
      },
      {
        label: "Folate (food)",
        tag: "FOLFD",
        schemaOrgTag: null,
        total: 34.4187051111111,
        hasRDI: false,
        daily: 0.0,
        unit: "µg"
      },
      {
        label: "Folic acid",
        tag: "FOLAC",
        schemaOrgTag: null,
        total: 0.0,
        hasRDI: false,
        daily: 0.0,
        unit: "µg"
      },
      {
        label: "Vitamin B12",
        tag: "VITB12",
        schemaOrgTag: null,
        total: 0.0,
        hasRDI: false,
        daily: 0.0,
        unit: "µg"
      },
      {
        label: "Vitamin D",
        tag: "VITD",
        schemaOrgTag: null,
        total: 0.0,
        hasRDI: false,
        daily: 0.0,
        unit: "µg"
      },
      {
        label: "Vitamin E",
        tag: "TOCPHA",
        schemaOrgTag: null,
        total: 0.03213816888888889,
        hasRDI: true,
        daily: 0.21425445925925926,
        unit: "mg"
      },
      {
        label: "Vitamin K",
        tag: "VITK1",
        schemaOrgTag: null,
        total: 5.612176733333333,
        hasRDI: true,
        daily: 4.676813944444444,
        unit: "µg"
      }
    ]
  }
];
