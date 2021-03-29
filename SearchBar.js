import React from 'react';

//class charactoristics
class SearchBar extends React.Component{
    state={term:''};
    //a callback - so i'll use an arrow function (for both functions)
oninputChange=(event)=>{
    this.setState({term: event.target.value});
};
//why do you not use () for "event" on line 11?
onFormSubmit= event =>{
    //make sure that the browser will not automaticly
    //submit the form every time:
    //that way when the user hits Enter after typing
    //in a value the page will not entirely refresh.
    event.preventDefault();


    //TODO: Make sure we call 
    //callback from parent component
    //(done!)
    // * 'prop' stands for 'property'
    this.props.onFormSubmit(this.state.term);


}


//actions
    render(){
        return (<div className = "search-bar ui segment">
            <form onSubmit={this.onFormSubmit} className = "ui form">
                <div className = "field">
                    <label>Video Search</label>
                    <input type="text" value={this.state.term}
                    onChange={this.oninputChange}
                    //could write this instead of lines 7-9:
                    //onChange= {e => this.setState({term: e.target.value})}
                    />
                </div>
            </form>
        </div> 
        );
    }
}
export default SearchBar