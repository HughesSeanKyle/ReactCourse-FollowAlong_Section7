import React from 'react';
import SearchBar from './SearchBar';

class App extends React.Component {

    //2
    onSearchSubmit = term => {
        console.log(term);
    }

    render() {
        return (
            <div className="ui container" style={{marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit} />
            </div> //1
        );
    }
}

export default App;

/*
//1 - onSubmit - With normal JSX elements specific event handling names must be used
        However, if properties are passed to a component authored by the programmer the method can be called/named anything. 

//2 - This function was created so that we can somehow communicate to the App component what the search result was. This is done so that the App component can then communicate to the "picture render" component to display the searched pictures. 
*/