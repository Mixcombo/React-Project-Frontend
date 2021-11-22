import React, { Component } from 'react';
import axios from 'axios';
import 'antd/dist/antd.css';
import { Table } from 'antd';
import TableTS1 from './TableTS1';
import TableTS2 from './TableTS2';
import TableTS3 from './TableTS3';
import TableTS4 from './TableTS4';
import TableTSId from './TableTSId';
import './CSV.css';

class TableTS extends Component{
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
                    children: [{
                        title: <TableTSId />,
                        dataIndex: 'id',
                    }],
                    sorter: {
                        compare: (a, b) =>  a.id.localeCompare(b.id)
                    },
                },
                {
                    title: "Negative for Pneumonia",
                    dataIndex: "Negative for Pneumonia",
                    children: [{
                        title: <TableTS1 />,
                        dataIndex: "Negative for Pneumonia",
                    }],
                    sorter: {
                        compare: (a, b) => a[`Negative for Pneumonia`] - b[`Negative for Pneumonia`],
                    },
                },
                {
                    title: "Typical Appearance",
                    dataIndex: "Typical Appearance",
                    children: [{
                        title: <TableTS2 />,
                        dataIndex: "Typical Appearance",
                    }],
                    sorter: {
                        compare: (a, b) => a[`Typical Appearance`] - b[`Typical Appearance`],
                    },
                },
                {
                    title: "Indeterminate Appearance",
                    dataIndex: "Indeterminate Appearance",
                    children: [{
                        title: <TableTS3 />,
                        dataIndex: "Indeterminate Appearance",
                    }],
                    sorter: {
                        compare: (a, b) => a[`Indeterminate Appearance`] - b[`Indeterminate Appearance`],
                    },
                },
                {
                    title: "Atypical Appearance",
                    dataIndex: "Atypical Appearance",
                    children: [{
                        title: <TableTS4 />,
                        dataIndex: "Atypical Appearance",
                    }],
                    sorter: {
                        compare: (a, b) => a[`Atypical Appearance`] - b[`Atypical Appearance`],
                    },
                },
            ]
        })
    }
    async componentDidMount(){
        await axios.get("http://localhost:8000/csv/train_study_level.csv")
        .then((rawdata)=>{
            this.setdata(rawdata.data)
        })
    }
    render(){
        return(
            <div className="container-chart1" style={{alignContent:'center',
                justifyContent:'center',marginRight:'auto'}}>
                <div className="table1">
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
export default TableTS;