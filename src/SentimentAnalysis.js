import React, { Component } from 'react';
import BarChart from 'react-bar-chart';

const margin = {top: 20, right: 20, bottom: 30, left: 40};
export default class SentimentalAnalysis extends Component {

    constructor(args){
        super(args);
        this.state = {
            sentiJson:[]
        }
    }

    modifyJson = (json) => {
        const data = []
        Object.entries(json).map(([key,value])=>{
            data.push({text:key,value:value})
        })
        return data;
    }

    componentDidMount(){
        fetch('http://127.0.0.1:5000/sentiment',{})
        .then(response=>response.json())
        .then(json=>this.modifyJson(json))
        .then(data=>this.setState({sentiJson:data}))
    }

    render() {
        return (
            <div ref='root'>
                <div style={{ width: '50%' }}>
                    <BarChart ylabel='Quantity'
                        width={400}
                        height={500}
                        margin={margin}
                        data={this.state.sentiJson}
                        onBarClick={this.handleBarClick} />
                </div>
            </div>
        )
    }
}