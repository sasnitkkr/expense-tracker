import ExpenseItemList from "./components/Expenses/ExpenseItemList";
import expenses from "./expenses.js";

function App() {
  return (
    <div>
      <ExpenseItemList expenses={expenses} />
    </div>
  );
}

export default App;
