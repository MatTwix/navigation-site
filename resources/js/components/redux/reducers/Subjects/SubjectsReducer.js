const initialState = {
    subjects: [
        {
            id: 1,
            name: 'Math'
        },
        {
            id: 2,
            name: 'Language'
        },
        {
            id: 3,
            name: 'Physics'
        },
        {
            id: 4,
            name: 'Bio'
        }
    ]
}

export const subjectsReduser = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}