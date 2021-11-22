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

class TableTS4 extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            Chartdata4 :{},
        }
    }
    setdata(csvdata){
        console.log(csvdata);
        var d1 = csvdata.filter(data => data[`Atypical Appearance`] ==="1")
        var d2 = csvdata.filter(data => data[`Atypical Appearance`] ==="0")
        this.setState({
            Chartdata4 :{
                labels: ['0', '1'],
                datasets: [{
                label:'Atypical Appearance',
                data: [d2.length,d1.length],
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
                    <Bar data={this.state.Chartdata4}
                        options={options}
                    /> 
                </div>
            </div>
        )
    }
}
export default TableTS4;