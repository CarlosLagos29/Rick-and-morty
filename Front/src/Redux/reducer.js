import { ADD_FAV, REMOVE_FAV, ORDER, FILTER } from "./actions-types";

const initialState = {
    myFavorites: [],
    allCharacters: []
}

const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAV:
            return {
                ...state,
                myFavorites: action.payload,
                allCharacters: action.payload
            }
        case REMOVE_FAV:
            return {
                ...state,
                myFavorites: action.payload,
                allCharacters: action.payload
            }
        case FILTER:
            if (action.payload === "All") return {
                ...state,
                myFavorites: state.allCharacters
            }
            const filteredChar = state.allCharacters.filter((char) => char.gender === action.payload)
            return {
                ...state,
                myFavorites: filteredChar
            }
        case ORDER:
            const orderedCharbyName = action.payload === "A" ?
                [...state.myFavorites].sort((a, b) => a.name > b.name ? 1 : -1) //se hace la copia de myfavorites para q funcionen ambos filtros a la vez
                :
                [...state.myFavorites].sort((a, b) => b.name > a.name ? 1 : -1) //el sort puede con este metodo de 1 y -1 podemos comparar alfabeticamente
            return {
                ...state,
                myFavorites: orderedCharbyName
            }
        default: return { ...state }
    }
}


export default Reducer;