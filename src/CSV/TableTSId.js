import React, { Component } from "react";
import { parse } from 'papaparse';

class TableTSId extends Component{
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
            <div style={{alignContent : 'center',justifyContent : 'center',marginLeft:'7vh',marginRight:'auto'}}>
                <div className="fontsize" style={{marginLeft:'25px'}}>
                    {`${this.state.Chartdata}`}
                </div>
                <div className="bar">
                    unique values
                </div>
            </div>
        )
    }
}
export default TableTSId;