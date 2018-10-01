import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

//add Expense
const addExpensie = (
  {
    description = '',
    note = '',
    amount = 0,
    createdAt = 0
  } = {}) => ({
    type: 'EXPENSIVE',
    expense: {
      id: uuid(),
      description,
      note,
      amount,
      createdAt
    }
  }
  );

//Remove Expense

const removeExpense = ({ id }) => ({
  type: "REMOVE_EXPENSE",
  id
});


const expensifyReducerState = [];

const expensifyReducer = (state = expensifyReducerState, action) => {
  switch (action.type) {
    case 'EXPENSIVE':
      return [...state, action.expense]
    case 'REMOVE_EXPENSE':
      return state.filter(({ id }) => id !== action.id)
    default:
      return state;
  }
}

const filerDefaultState = {
  text: '',
  sortBy: 'Date',
  startDate: undefined,
  endDate: undefined
}

const filterReducer = (state = filerDefaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

const store = createStore(
  combineReducers({
    expensify: expensifyReducer,
    filter: filterReducer
  })
)

store.subscribe(() => {
  console.log(store.getState());
});

const expse1 = store.dispatch(addExpensie({ description: 'Rent', amount: 100 }));
const expse2 = store.dispatch(addExpensie({ description: 'Cofee', amount: 50 }));

const remove1 = store.dispatch(removeExpense(expse1.expense))


const demoState = {
  expenses: [{
    id: 'poijasdfhwer',
    description: 'January Rent',
    note: 'This was the final payment for that address',
    amount: 54500,
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount', // date or amount
    startDate: undefined,
    endDate: undefined
  }
};