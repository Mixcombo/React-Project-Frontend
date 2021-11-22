import React, { Component } from "react";
import { parse } from 'papaparse';
import './CSV.css';

class TableTI2 extends Component{
    constructor(props){
        super(props);
        this.state = {
            Chartdata1 : null,
            Chartdata2 : null,
            dataf : null,
            sum : null,
        }
    }
    setdata(csvdata){
        var c1 = csvdata.filter(data => data.label ==="none 1 0 0 1 1")
        var c2 = csvdata.filter(data => data.label)
        var c3 = csvdata[0].label
        c3 = c3.substring(0, 22) +" ........";
        var other = c2.length-c1.length ;
        var c2per = Math.ceil((other/c2.length)*100);
        var c1per = 100-Math.ceil(c2per);
        this.setState(
            {
                Chartdata1: c1per,
                Chartdata2: c2per,
                dataf : c3 ,
                sum : other-1,
        }) 
    }
    componentDidMount(){
        parse("http://localhost:8000/downloadcsv/train_image_level.csv", {
            download : true,
            header : true,
            complete : (e)=>{
                this.setdata(e.data);
            } 
        })
    }
    render(){
        return(
            <div className="bar">
                 <div>
                    {`none 1 0 0 1 1   ${this.state.Chartdata1}%`}
                </div>
                <div >
                    {`${this.state.dataf}  0%`}
                </div>
                <div>
                    {`Other(${this.state.sum})  ${this.state.Chartdata2}%`}
                </div>
            </div>
        )
    }
}
export default TableTI2;