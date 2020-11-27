import React from 'react';

class SearchBar extends React.Component {
    
    state = { term: ''};

    // will prevent page being refreshed on enter key down (default behaviour)
    onFormSubmit(event) {
        event.preventDefault();

        console.log(this.state.term);
    }

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input 
                            type="text" 
                            value={this.state.term} 
                            onChange={e => this.setState({ term: e.target.value })} 
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;

//onChange - Special React keyword used to handle events
// Render method is called everytime value is update or key typed in