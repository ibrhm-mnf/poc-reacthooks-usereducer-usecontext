
function TodoReducer(state, action) {
    switch (action.type) {
        case 'RESET': {
            let { state } = action.payload;
            return state;
        }
        case "ADD":
            state = [
                ...state,
                {
                    id: Date.now(),
                    text: '',
                    isCompleted: false
                }
            ];
            console.log(state);
            return state;
        case "DELETE": {
            let { id } = action.payload;
            console.log(id)
            state = state.filter(item => item.id !== id);
            console.log(state);
            return state;
        }
        case 'COMPLETED': {
            let { id } = action.payload;
            state = state.map(item => {
                if (item.id === id) {
                    return {
                        ...item,
                        isCompleted: !item.isCompleted
                    }
                }
                else
                    return item
            });
            console.log(state);
            return state;
        }
        case 'TEXT_CHANGED': {
            let { text, id } = action.payload;
            state = state.map(item => {
                if (item.id === id) {
                    return {
                        ...item,
                        text
                    }
                }
                else
                    return item
            });
            console.log(state);
            return state;
        }
        default:
            return state;
    }
}

export default TodoReducer;