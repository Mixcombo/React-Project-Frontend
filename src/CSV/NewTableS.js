import React, { Component } from 'react';
import axios from 'axios';
import 'antd/dist/antd.css';
import { Table } from 'antd';
import TableS1 from './TableS1';
import TableS2 from './TableS2';
import './CSV.css';

class TableS extends Component {
    constructor(props){
        super(props);
        this.state = {
            columns : null,
            charttop : [],
        }
    }

    setdata(csvdata){
        this.setState({
            charttop : csvdata,
            columns : [
                {
                    title: 'id',
                    dataIndex: 'id',
                    children:[{
                        title: <TableS1 />,
                        dataIndex: 'id',
                    }],
                    sorter: {
                        compare: (a, b) =>  a.id.localeCompare(b.id)
                    },
                },
                {
                    title: "PredictionString",
                    dataIndex: "PredictionString",
                    children:[{
                        title: <TableS2 />,
                        dataIndex: 'PredictionString',
                    }],
                    sorter: {
                        compare: (a, b) => a.PredictionString.length - b.PredictionString.length,
                    },
                },
            ]
        })
    }

    async componentDidMount() {
        await axios.get("http://localhost:8000/csv/sample_submission.csv")
        .then((rawdata)=>{
            this.setdata(rawdata.data)
        })
        .catch((error)=>{
            console.log(error)
        }) ;
    }

    render() {
        return(
            <div className="container-chart" style={{alignContent : 'center',justifyContent : 'center'}}>
                <div className="table">
                    <Table 
                        columns={this.state.columns}
                        dataSource={this.state.charttop}
                        sticky={true}
					    tableLayout="fixed"
                    />
                </div>
            </div>
        )
    }

}
export default TableS;