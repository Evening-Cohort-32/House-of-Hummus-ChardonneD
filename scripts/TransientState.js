const transientState = {
    entreeId: 0,
    vegetableId: 0,
    sideDishId: 0
}

export const setEntree = (id) => {
    transientState.entreeId = id
}