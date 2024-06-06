import { supabase } from "./supabase";

async function findBIngredientsIds(ids: string[]){
    const { data } = await supabase
    .rpc("recipes_by_ingredients", { ids })
    .returns<RecipeResponse[]>()

    return data ?? []
}

export { findBIngredientsIds }