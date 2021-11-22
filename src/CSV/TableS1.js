import React, { Component } from "react";
import { parse } from 'papaparse';
import "./CSV.css";

class TableS1 extends Component {
    constructor(props){
        super(props);
        this.state = {
            Chartdata : null,
        }
    }
    setdata(csvdata){
        var c1 = csvdata.filter(data=>data.id)
        this.setState({
            Chartdata : c1.length,
        })
    }
    componentDidMount(){
        parse("http://localhost:8000/downloadcsv/sample_submission.csv", {
            download : true,
            header : true,
            complete : (e)=>{
                this.setdata(e.data);
            }
        })
    }
    render(){
        return(
            <div style={{alignContent:'center',justifyContent:'center',marginLeft:'27vh',marginRight:'auto'}}>
                <div className="fontsize">
                    {`${this.state.Chartdata}`}
                </div>
                <div className="bar">
                    unique values
                </div>
            </div>
        )
    }
}
export default TableS1;