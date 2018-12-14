const INITIAL_STATE = {
    name: '',
    address: '',
    city: '',
    state: '',
    zip: 0,
    houses: []
}

const ADD_HOUSE = 'ADD_HOUSE';

export default function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case ADD_HOUSE:
            return Object.assign({}, state, { inventory: action.payload })
        default:
            return state;
    }
}

export function addHouse(inventory) {
    return {
        type: ADD_HOUSE,
        payload: inventory
    }
}

