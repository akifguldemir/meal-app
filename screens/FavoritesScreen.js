import { View, Text, StyleSheet } from "react-native";
import MealsList from "../components/MealsList/MealsList";
import { useContext } from "react";
import { FavoritesContext } from "../store/context/favorites-context";
import { MEALS } from "../data/dummy-data";
import { useSelector } from "react-redux";

function FavoritesScreen(){

//    const favoriteMealsCtx =  useContext(FavoritesContext);
    const favoriteMealsIds = useSelector((state) => state.favoriteMeals.ids);

//    const favoriteMeals = MEALS.filter(meal => favoriteMealsCtx.ids.includes(meal.id))
   const favoriteMeals = MEALS.filter(meal => favoriteMealsIds.includes(meal.id))

   if(favoriteMeals.length === 0) {
    return <View style={styles.rootContainer}>
        <Text style={styles.text}>No Favorites Meal</Text>
    </View>
   }

    return <MealsList items={favoriteMeals}/>
}
export default FavoritesScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center' 
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
    }
});