import React, { Component } from "react";
import axios from "axios";
import 'antd/dist/antd.css';
import { Table } from 'antd';
import './CSV.css';
import TableTI1 from "./TableTI1";
import TableTI2 from "./TableTI2";
import TableTIId from "./TableTIId";
import TableTSId from "./TableTSId";

class TableTI extends Component{
    constructor(props){
        super(props);
        this.state = {
            columns : null,
            charttop : [],
        }
    }
    async componentDidMount(){
        await axios.get("http://localhost:8000/csv/train_image_level.csv")
        .then((rawdata)=>{
            this.setdata(rawdata.data)
        })
    }
    setdata(csvdata){
        this.setState({
            charttop : csvdata,
            columns : [
                {
                    title: 'id',
                    dataIndex: 'id',
                    children: [{
                        title: <TableTIId />,
                        dataIndex: 'id',
                    }],
                    sorter: {
                        compare: (a, b) =>  a.id.localeCompare(b.id)
                    },
                },
                {
                    title: "boxes",
                    dataIndex: "boxes",
                    children: [{
                        title: <TableTI1 />,
                        dataIndex: "boxes",
                    }],
                    sorter: {
                        compare: (a, b) => a[`boxes`].length - b[`boxes`].length,
                    },
                },
                {
                    title: "label",
                    dataIndex: "label",
                    children: [{
                        title: <TableTI2 />,
                        dataIndex: "label",
                    }],
                    sorter: {
                        compare: (a, b) => a[`label`].length - b[`label`].length,
                    },
                },
                {
                    title: "StudyInstanceUID",
                    dataIndex: "StudyInstanceUID",
                    children: [{
                        title: <TableTSId />,
                        dataIndex: "StudyInstanceUID",
                    }],
                    sorter: {
                        compare: (a, b) =>  a.StudyInstanceUID.localeCompare(b.StudyInstanceUID)
                    },
                },
            ]
        })
    }
    render(){
        return(
            <div className="container-chart" style={{alignContent:'center',
                justifyContent :'center',marginRight:'auto'}}>
                <div className="table">
                    <Table 
                        columns = {this.state.columns}
                        dataSource = {this.state.charttop}
                        sticky={true}
					    tableLayout="fixed"
                    />
                </div>
            </div>
        )
    }
}
export default TableTI;