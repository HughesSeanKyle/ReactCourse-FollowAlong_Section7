import React from 'react';
import axios from 'axios'; //3
import SearchBar from './SearchBar';
import { AuthKey } from '../config/keys';

class App extends React.Component {

    //2
    onSearchSubmit = async term => {
        const response = await axios.get('https://api.unsplash.com/search/photos', { //4
            params: { query: term },
            headers: {
                Authorization: AuthKey
            }
        });

        console.log(response.data.results);
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

//4 Will take two args
    1st Arg - The address we want to make a git reuest to
    2nd Arg - Object that wil have bunch of options that will customize this request
        One of the arguments is a headers object.

            header refers to supplemental data placed at the beginning of a block of data being stored or transmitted. In data transmission, the data following the header is sometimes called the payload or body.
            [https://en.wikipedia.org/wiki/Header_(computing)#:~:text=From%20Wikipedia%2C%20the%20free%20encyclopedia,called%20the%20payload%20or%20body.]

    When ever a request is made with axios it returns a promise object as the request is asynchronous in nature. Make a request => Wait for a response => Do something with response using .then()

        onSearchSubmit = term => {
        axios.get('https://api.unsplash.com/search/photos', { //4
            params: { query: term },
            headers: {
                Authorization: AuthKey
            }
        }).then((response) => {                 <<|=============
            console.log(response);
        });
    }

    async await is a much better alternative to above. 
*/