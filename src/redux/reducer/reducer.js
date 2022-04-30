import {CHART_UPDATE,MONTH_SWITCH} from "../action/action"

// Initial State

var initaialState ={
   currentSystemData:[
   {
       title: "Availability OOE",
       data: "94%"
    },
    {
      title: "Acutal Production Cost",
      data: "$601.00k"
   },
   {
      title: "Standard Production Cost",
      data: "$591.00k"
   },
   {
      title: "Production losses",
      data: "32.00k"
   },
   {
      title: "Number of days",
      data: "22"
   },
   {
      title: "Units Manufactured",
      data: "2,281"
   },
   {
      title: "Unit Unfinished",
      data: "121"
   },
   {
      title: "Labour Cost Per Unit",
      data: "5.3"
   },
   ],
   curretnChartData:{
      barChartDatasets:[["2.6", "1.2", "1.9", "1.8"],["2.5", "1.3", "1.7", " 1.7"]],
     lineChartDatasets: [-10, -40,0, 80, -20]
   }
}
  

// Reducer
 const dashboardReducer=(state=initaialState,action)=>{
   switch (action.type) {
      case MONTH_SWITCH:{
        return {
          ...state,
          currentSystemData: action.payload,
        };
      }
      
       case CHART_UPDATE: {
          return {
            ...state,
            curretnChartData: {
               barChartDatasets: [...action.payload.bar],
               lineChartDatasets: [...action.payload.line]
            }
          };
        }
      
      default:
        return state
    }
}

export default dashboardReducer;