// owner_id is teacher id from teachers table

const initialState = {
    classes: [
        {
            id: 1,
            name: 'Math class',
            subjects: 'Math',
            destination: 1,
            ownerId: 1,
            way: '2m forward, turn right, 3m forward',
            photos: [1, 2, 3]
        },
        {
            id: 2,
            name: 'English class',
            subjects: ['English language', 'English literature'],
            destination: 1,
            ownerId: 0,
            way: '4m forward, turn left, 5m forward',
            photos: [4, 5, 6]
        },
        {
            id: 3,
            name: 'Toilet',
            subjects: "",
            destination: 0,
            ownerId: 0,
            way: '6m forward, turn right, 7m forward',
            photos:  [1, 2, 3]
        }
    ]
}

export const classesReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}
