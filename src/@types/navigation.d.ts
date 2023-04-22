export interface RecipeParams {
    id: string;
    title: string;
    ingredients: string;
    preparation: string;
}

export declare global {
    namespace ReactNavigation {
        interface RootParamList {
            home: undefined;
            recipe: RecipeParams;
        }
    }
}