import React from 'react';
import axios from 'axios'; //3
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

//3 - In this case it is useful for App.js to have axios as it now has access to the term state in the the SearcBar component. This will then make the request to the unsplash API to retrieve the data. 
    By convention imports from 3rd party packages are usually put above component imports created y author/engineer. 
*/