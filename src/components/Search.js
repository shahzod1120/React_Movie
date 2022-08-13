import React from "react";

export default class Search extends React.Component {

    state = {
        search: 'panda',
        type: 'all'
    }
    handleKey = (e) => {
        if (e.key === 'Enter') {
            this.props.searchMovies(this.state.search)
        }
    }
    handleFilter = (e) => {
        this.setState(() => ({type: e.target.dataset.type}), () => {
            this.props.searchMovies(this.state.search, this.state.type )
        })
    }
    render() {
        return (
            <div className="row">
                <div className="col s12">
                    <div className="input-field ">
                        <input id="email_inline"
                            type="search"
                            className="validate"
                            placeholder="Search"
                            value={this.state.search}
                            autoComplete='off'
                            onChange={(e) => this.setState({ search: e.target.value })}
                            onKeyDown={this.handleKey} />
                        <button className="btn btn_search" onClick={(e) => this.props.searchMovies(this.state.search, this.state.type)}>Search Movie</button>
                    </div>
                    <label>
                        <input type="radio" className="with-gap" name="type" data-type="all" onChange={this.handleFilter} checked={this.state.type === 'all'} />
                        <span className="filter">All</span>
                    </label>
                    <label>
                        <input type="radio" className="with-gap" name="type" data-type="movie" onChange={this.handleFilter} checked={this.state.type === 'movie'} />
                        <span className="filter">Movies</span>
                    </label>
                    <label>
                        <input type="radio" className="with-gap" name="type" data-type="series" onChange={this.handleFilter} checked={this.state.type === 'series'} />
                        <span className="filter">Series</span>
                    </label>
                </div>
            </div>
        )
    }
}