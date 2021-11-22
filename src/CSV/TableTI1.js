import React, { Component } from "react";
import { parse } from 'papaparse';
import './CSV.css';

class TableTI1 extends Component{
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
        var c1 = csvdata.filter(data => data.boxes ==="")
        var c2 = csvdata.filter(data => data.boxes)
        var c3 = csvdata[0].boxes
        c3 = c3.substring(0, 22) +" ........";
        var sum0 = c1.length + c2.length
        var c2per = Math.ceil((c2.length/sum0)*100);
        var c1per = 100-Math.ceil(c2per);
        this.setState(
            {
                Chartdata1: c1per,
                Chartdata2: c2per,
                dataf : c3 ,
                sum : c2.length-1,
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
                    {`[Null]    ${this.state.Chartdata1}%`}
                </div>
                <div>
                    {`${this.state.dataf}  0%`}
                </div>
                <div>
                    {`Other(${this.state.sum})  ${this.state.Chartdata2}%`}
                </div>
            </div>
        )
    }
}
export default TableTI1;