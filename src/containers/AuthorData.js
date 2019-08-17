import React from 'react';

export default class AuthorData extends React.Component {

    constructor(props) {
        super(props);
        this.author = null;

        this.state = {
            author: null
        }
    }

    componentDidMount() {
        const author = this.props.location.state;

        this.setState({
            author: author.author
        });

        this.showAuthorData();
    }

    showAuthorData = () => {
        let author = this.state.author;
        console.log(author);
        if (author !== null) {
            return (
                <div>
                    <h1 className={'header1'}>Author Data</h1>
                    <div>
                        <h2 className={'header1'}>{author._name}</h2>
                        <br/>
                        <p className={'simpleText'}>username: {author._username}</p>
                        <br/>
                        <p className={'simpleText'}>location: {author._location}</p>
                        <br/>
                        <img src={author._profileImage} alt={author._name}/>
                    </div>
                </div>
            );
        }
    };

    render() {
        return (
            <div>
                {this.showAuthorData()}
            </div>
        );
    }
}
