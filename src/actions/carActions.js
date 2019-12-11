
export const ADD_ITEM = 'ADD_ITEM';

export const REMOVE_ITEM = 'REMOVE_ITEM';

export const addItem = (newItem) => {
    return { type: ADD_ITEM, payload: newItem};
};

export const removeItem = (newItem) => {
    return { type: REMOVE_ITEM, payload: newItem};
};