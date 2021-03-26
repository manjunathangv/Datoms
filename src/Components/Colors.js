import React from 'react';

export default class Users extends React.Component {
    state = {
        searchValue: '',
        colornumber: null,
        count : 9
    }
    handleSearch = (e) => {
        
        this.setState({ searchValue: e.target.value})
    }
    colorme = () => {
        const {searchValue}= this.state;
        this.setState({colornumber : parseInt(searchValue), searchValue: ""});
    }
    render() {
        const {colornumber} = this.state;
        let cubes =[];
        for(let i=1; i <= this.state.count; i++) {
            cubes.push(<div className={`cube ${i=== colornumber ? 'fill': null}`}>{i}</div>);
        }
        return (
            <>
            <h2> colors</h2>
            <input onChange={(e) => { this.handleSearch(e) }} value={this.state.searchValue} placeholder="User Input"></input>
            <button className="colorme" onClick={this.colorme}>Color me</button>
            <div className="cubecontainer">
                {cubes}
            </div>
            </>
        );
    }
}
