import { createStore } from 'redux';

const increment = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
});
const decrement = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
});
const set = ({ set = 1 } = {}) => ({
    type: "SET",
    set
});
const reset = () => ({
    type: 'RESET'
});

const store = createStore((state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count + action.incrementBy };
        case 'DECREMENT':
            return ({ count: state.count - action.decrementBy });
        case 'SET':
            return ({ count: action.set })
        case 'RESET':
            return ({ count: 0 });
    }
});

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch(increment());
store.dispatch(increment({ incrementBy: 7 }));
store.dispatch(decrement({ decrementBy: 3 }));
store.dispatch(set({ set: 101 }));

store.dispatch(reset());