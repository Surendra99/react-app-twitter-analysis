import React, { Component } from 'react';
import ReactWordcloud from 'react-wordcloud';

class DisplayWordCloud extends Component {

    constructor(args) {
        super(args);
        this.state = {
            wordsJson: [],
        }
    }

    modifyJson = (json) => {
        const data = []
        Object.entries(json).map(function ([key, value]) {
            data.push({ text: key, value: value })
        })
        return data;
    }

    componentDidMount() {
        fetch('http://127.0.0.1:5000/wordcloud', {})
            .then(response => response.json())
            .then(json => this.modifyJson(json))
            .then(data => this.setState({ wordsJson: data }))
    }

    render() {
        return (
            <div style={{ height: 400, width: 300 }}>
                <ReactWordcloud words={this.state.wordsJson} />
            </div>
        )
    }
}
export default DisplayWordCloud;