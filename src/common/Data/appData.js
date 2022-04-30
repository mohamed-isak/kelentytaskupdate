import { FaExternalLinkSquareAlt,FaCalendarAlt,FaCalendarCheck,FaCalendarPlus,FaCalendarMinus } from "react-icons/fa";
import { ImArrowUpRight,ImArrowUp,ImArrowDownRight } from "react-icons/im";

export const SystemIcons=[
   <FaExternalLinkSquareAlt className="dashboard__system__icon"/>,
   <ImArrowUpRight className="dashboard__system__icon"/>,
   <ImArrowUp className="dashboard__system__icon"/>,
   <ImArrowDownRight className="dashboard__system__icon"/>,
   <FaCalendarAlt className="dashboard__system__icon"/>,
   <FaCalendarPlus className="dashboard__system__icon"/>,
   <FaCalendarMinus className="dashboard__system__icon"/>,
   <FaCalendarCheck className="dashboard__system__icon"/>,
];

export const SystemCardsdata = {
  
   "May":[
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
    "June":[
        {
            title: "Availability OOE",
            data: "84%"
         },
         {
           title: "Acutal Production Cost",
           data: "$701.00k"
        },
        {
           title: "Standard Production Cost",
           data: "$691.00k"
        },
        {
           title: "Production losses",
           data: "30.00k"
        },
        {
           title: "Number of days",
           data: "25"
        },
        {
           title: "Units Manufactured",
           data: "1,500"
        },
        {
           title: "Unit Unfinished",
           data: "125"
        },
        {
           title: "Labour Cost Per Unit",
           data: "4.3"
        },
    ]
};


export const barchartDataSource ={

   "May": [["2.6","1.2","1.9","1.8"],["2.5", "1.3", "1.7", " 1.7"]],
   "June":[['1.7','1.5',"2.9","1.5"],['1.7','2.5',"1.2","2.6"]]
}

export const linechartDataSource ={

   "May":  [-10, -40,0, 80, -20],
   "June": [-7, -30,0, 90, -40]
}