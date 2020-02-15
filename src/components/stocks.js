import React from 'react';

export default class Stock extends React.Component{
    constructor(props){
        super(props);
        this.state={
           stockChartXValues:[],
           stockChartYValues:[]
        }
    }
    
    componentDidMount(){
        this.fetchStocks();
    }
        
    fetchStocks(){
     const API_Key = "HZK3LOC2I9EILXC2";
     const Stock_Symbol = "MSFT";
     const API_Call =`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${Stock_Symbol}&outputsize=full&apikey=${API_Key}`;
    }

 render(){
     return(
         <div>
             <h3>Stock Analysis</h3>
         </div>
     )
 }
}