import React, { Component } from "react";
import { Bar } from 'react-chartjs-2';
import { parse } from 'papaparse';

const options = { 
    plugins:{
        legend: {
          display: false
        }
    }
}

class TableTS3 extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            Chartdata3 :{},
        }
    }
    setdata(csvdata){
        console.log(csvdata);
        var c1 = csvdata.filter(data => data[`Indeterminate Appearance`] ==="1")
        var c2 = csvdata.filter(data => data[`Indeterminate Appearance`] ==="0")
        this.setState({
            Chartdata3 :{
                labels: ['0', '1'],
                datasets: [{
                label:'Indeterminate Appearance',
                data: [c2.length,c1.length],
                    backgroundColor:[
                        'rgba(48, 172, 202, 0.8)',
                        'rgba(48, 172, 202, 0.8)']
                }]
                },
            })   
    }
    componentDidMount(){
        parse("http://localhost:8000/downloadcsv/train_study_level.csv", {
            download: true,
            header : true ,
            complete : (e)=>{
                this.setState({
                    table : e.data
                })
                this.setdata(e.data);
            }
        })
      }
    render(){
        return(
            <div> 
                <div >
                    <Bar data={this.state.Chartdata3}
                        options={options}
                    /> 
                </div>
            </div>
        )
    }
}
export default TableTS3;