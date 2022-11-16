// owner_id is teacher id from teachers table

const initialState = {
    classes: [
        {
            id: 1,
            name: 'Math class',
            number: 100,
            subjects: 'Math',
            destination: 1,
            ownerId: 1,
            way: '2m forward, turn right, 3m forward',
            photos: [1, 2, 3]
        },
        {
            id: 2,
            name: 'English class',
            number: 200,
            subjects: ['English language', 'English literature'],
            destination: 1,
            ownerId: 0,
            way: '4m forward, turn left, 5m forward',
            photos: [1, 2, 3]
        },
        {
            id: 3,
            name: 'Toilet',
            number: 301,
            subjects: "",
            destination: 0,
            ownerId: 0,
            way: '6m forward, turn right, 7m forward',
            photos:  1
        }
    ]
}

export const classesReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}
