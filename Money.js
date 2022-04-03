let Family={
    Incomes: [1200, 2500, 1100, 850],
    Expenses: [350, 761, 173, 813, 1236, 595],
  }

  function sum(Array){
      let Total=0;

      for(let value of Array){
          Total += value
      } 

      return Total
  }

  function CauculateBalance() {
      const CauculateIncomes = sum(Family.Incomes)
      const CauculateExpenses = sum(Family.Expenses)

      const Total= CauculateIncomes - CauculateExpenses
      const ItsOk = Total >=0
      let BalanceText = "Negative"
       
      if (ItsOk) {
       BalanceText="Positive"
    }
    
    console.log(`Your Balance Is ${BalanceText}:${Total}$`)
  }
   CauculateBalance()
