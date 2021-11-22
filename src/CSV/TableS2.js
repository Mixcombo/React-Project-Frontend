import React, { Component } from "react";
import { parse } from "papaparse";
import "./CSV.css";

class TableS2 extends Component {
    constructor(props){
        super(props);
        this.state = {
            Chartdata1 : null,
            Chartdata2 : null,
        }
    }
    setdata(csvdata){
        var c1 = csvdata.filter(data => data.PredictionString ==="none 1 0 0 1 1")
        var c2 = csvdata.filter(data => data.PredictionString ==="negative 1 0 0 1 1")
        var sum = c1.length + c2.length
        var c1per = Math.ceil((c1.length/sum)*100);
        var c2per = 100-Math.ceil(c1per);
        this.setState(
            {
                Chartdata1: c1per,
                Chartdata2: c2per,
        })
        console.log(csvdata)
    }
    componentDidMount(){
        parse("http://localhost:8000/downloadcsv/sample_submission.csv", {
            download : true,
            header : true,
            complete : (e)=>{
                this.setdata(e.data);
                console.log(e.data)
            }
        })
    }
    render(){
        return(
            <div className="bar">
                <div>
                    {`none 1 0 0 1 1 ${this.state.Chartdata1}%`}
                    {console.log(this.state.Chartdata1)}
                </div>
                <div>
                    {`negative 1 0 0 1 1 ${this.state.Chartdata2}%`}
                </div>
            </div>
        )
    }
}
export default TableS2;