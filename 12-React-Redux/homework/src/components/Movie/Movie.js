import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetail, clearDetail } from '../../actions/index';

import './Movie.css';

class Movie extends React.Component {

    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.getMovieDetail(id);
    }
    componentWillUnmount() {
        this.props.getMovieDetail();
    }

    render() {
        return (
            <div className="movie-detail">
                <h2>Title: {this.props.movie.Title}</h2>
                <img src={this.props.movie.Poster} alt="No hay imagenes" />
                <p>Year: {this.props.movie.Year}</p>
                <p>Director: {this.props.movie.Director}</p>
                <p>Actors: {this.props.movie.Actors}</p>
                <p>Plot: {this.props.movie.Plot}</p>
            </div>
        );
    }

}

function mapStateToProps(state) {
    return {
        movie: state.movieDetail
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getMovieDetail: (id) => dispatch(getMovieDetail(id)),
        clearDetail: () => dispatch(clearDetail())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Movie);