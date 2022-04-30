import "chart.js/auto";
import { memo } from "react";
import { Chart } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
} from "chart.js";

ChartJS.register(LineController, LineElement, PointElement, LinearScale, Title);

 function CustomChart(props){
    const {type,bardata,baroptions} = props;
     return (
        <Chart
            type={type}
            data={bardata}
            options={baroptions}
          />
    )
 }

 export default memo(CustomChart)
