const initialState = {
    teachers: [
        {
            id: 1,
            name: 'Ivanov Ivan Ivanovych',
            subjects: 'Math',
            class_leader: '10b',
            photo_id: 1
        },
        {
            id: 2,
            name: 'Petrov Petr Petrovich',
            subjects: ['English Language', 'English literature'],
            class_leader: '9c',
            photo_id: 2
        },
        {
            id: 3,
            name: 'Igorev Igor Igorevych',
            subjects: 'History',
            class_leader: '',
            photo_id: 3
        }
    ]
}

export const teachersReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}
