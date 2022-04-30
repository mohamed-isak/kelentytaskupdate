import "./App.css";
import {SystemIcons,SystemCardsdata,barchartDataSource,linechartDataSource} from '../src/common/Data/appData'
import ReactSpeedometer from "react-d3-speedometer";
import { useSelector } from "react-redux";
import CustomChart from "./common/Widgets/customChart";
import "chart.js/auto";
import {store} from './redux/index'
import {CHART_UPDATE,MONTH_SWITCH} from "./redux/action/action"

function App() {
   const currentState = useSelector((state) => state);


   // Filter

 const handleFilter = (e)=>{
    if(e.target.value in SystemCardsdata){
      store.dispatch({type:MONTH_SWITCH,payload:[...SystemCardsdata[e.target.value]]});
      store.dispatch(
        {type: CHART_UPDATE,
        payload: {"bar":[...barchartDataSource[e.target.value]],"line":linechartDataSource[e.target.value]}
      
      })
    }
  }
   
  
 // Bar Chart data

 var BarchartData =  {
  labels: ["Q4", "Q3", "Q2", "Q1"],

  datasets: [
    {
      barThickness: 30,
      maxBarThickness: 30,
      minBarLength: 2,
      label: "Acutal Production cost",
      backgroundColor: "#00B4A9",
      data: currentState.curretnChartData.barChartDatasets[0]
    },
    {
      barThickness: 30,
      maxBarThickness: 30,
      minBarLength: 2,
      label: "Standard Production cost",
      backgroundColor: "#FFB100",
      data: currentState.curretnChartData.barChartDatasets[1],
    },
  ],
};
 
var Barchatoptions = 
  {
    indexAxis: "y",
    scaleShowValues: true,
    responsive: true,
    plugins: {
      legend: {
        display: true,
        labels: {
          color: "white",
          boxWidth: 15,
          boxHeight: 15,
        },
      },
    },
    interaction: {
      intersect: false,
    },
    scales: {
      y: {
        stacked: true,
        grid: {
          color: "rgba(255,0,0,0.1)",
          borderColor: "#ffffff", // <-- this line is answer to initial question
        },
        ticks: {
          color: "white",
          font: {
            size: 13, // 'size' now within object 'font {}'
          },
          stepSize: 1,
          beginAtZero: true,
        },
      },
      x: {
        stacked: true,
        grid: {
          color: "rgba(255,0,0,0.1)",
          borderColor: "#ffffff", // <-- this line is answer to initial question
        },
        ticks: {
          color: "white",
          font: {
            size: 13, // 'size' now within object 'font {}'
          },
          stepSize: 1,
          beginAtZero: true,
          callback: function (value, index, ticks) {
            return value > 0
              ? "$" + value + ".00M"
              : "$" + value + ".00";
          },
        },
      },
    },
    layout: {
      padding: 15,
    },
  }
 
  // line chart data
var lineChartData = {
  labels: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ],
  datasets: [
    {
      label: "Dataset 1",
      borderWidth: 2,
      borderColor: "#00B4A9",
      data: currentState.curretnChartData.lineChartDatasets,
    },
  ],
}  


  var lineChartoptions = {
    indexAxis: "x",
    scaleShowValues: true,
    responsive: true,
    plugins: {
      legend: {
        display: false,
        labels: {
          color: "white",
          boxWidth: 15,
          boxHeight: 15,
        },
      },
    },
    elements: {
      point: {
        radius: 0,
      },
    },
    interaction: {
      intersect: false,
    },
    scales: {
      y: {
        grid: {
          color: "rgba(255,0,0,0.1)",
          borderColor: "#ffffff", // <-- this line is answer to initial question
        },
        display: true,
        title: {
          display: true,
          text: "Value",
        },
        ticks: {
          color: "white",
          font: {
            size: 13, // 'size' now within object 'font {}'
          },
          stepSize: 1,
          beginAtZero: true,
          // Include a dollar sign in the ticks
          callback: function (value, index, ticks) {
            return "$ "+value+'k';
          },
        },
      },
      x: {
        grid: {
          color: "rgba(255,0,0,0.1)",
          borderColor: "#ffffff", // <-- this line is answer to initial question
        },
        display: true,
        ticks: {
          color: "white",
          font: {
            size: 13, // 'size' now within object 'font {}'
          },
          stepSize: 1,
          beginAtZero: true,
          // Include a dollar sign in the ticks
          callback: function (value, index, ticks) {
            return "$" + value;
          },
        },
        title: {
          display: true,
          text: "Month",
        },
      },
    },
    layout: {
      padding: 15,
    },
  }



  return (
    <>
      <header className="App__Header">  
        <h1 className="App__brand">Production KPI</h1>
         <label className="App_header_label">Filter:</label>
         <select className="App__Filter" onChange={(e)=>{
             handleFilter(e);
         }}>
           {
             Object.keys(SystemCardsdata).map((opt,i)=>{
               return (<option value={opt} key={i}>{opt}</option>)
             })
           }
         </select>
        </header>

      <section className="dashboard__section__body">
        {currentState.currentSystemData.map((item, i) => {
          return (
            <div className="dashboard__system__card" key={i}>
              <h2 className="dashboard__system__title">{item.title}</h2>
              <div className="dashboard__system_data">
                <span className="dashboard__system__text">{item.data}</span>
                {SystemIcons[i]}
                
              </div>
            </div>
          );
        })}
      </section>

      <section className="dashboard__chart__body">
        <div className="dashboard__chart_card">
          <h2 className="dashboard__system__title">Availability OCE</h2>

          <div className="speedometer">
            <ReactSpeedometer
              width={250}
              needleHeightRatio={0.8}
              value={577}
              customSegmentStops={[0, 200, 750, 1000]}
              segmentColors={["#FF0047", "#FFB100", "#00B4A9"]}
              ringWidth={17}
              needleTransitionDuration={3333}
              needleTransition="ea//seElastic"
              needleColor={"#FF0047"}
              textColor={"#d8dee9"}
            />
          </div>
        </div>

        <div className="dashboard__chart_card">
          <h2 className="dashboard__system__title">Production Cost Variance</h2>
          <CustomChart type="bar" bardata={BarchartData} baroptions={Barchatoptions}></CustomChart>
        </div>

        <div className="dashboard__chart_card">
          <h2 className="dashboard__system__title">Production Cost Variance</h2>
          <CustomChart type="line" bardata={lineChartData} baroptions={lineChartoptions}></CustomChart>
        </div>
      </section>
    </>
  );
}

export default App;
