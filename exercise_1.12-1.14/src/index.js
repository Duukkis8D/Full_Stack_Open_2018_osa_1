import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selected: 0,
            votes: [0, 0, 0, 0, 0, 0]
        }
    }

    render() {
        const handleClickShowButton = (min, max) => {
            return () => this.setState({ selected: Math.floor(Math.random() * (max - min + 1)) + min });
        }

        const handleClickVoteButton = () => {
            const votes = [...this.state.votes];

            return () => {
                votes[this.state.selected] = votes[this.state.selected] + 1;
                this.setState({ votes: votes });
            }
        }

        return (
            <div>
                <p>{this.props.anecdotes[this.state.selected]}</p>
                <p>has {this.state.votes[this.state.selected]} votes</p>
                <VoteButton onClick={handleClickVoteButton()}/>
                <NextButton onClick={handleClickShowButton(0, 5)}/>
            </div>
        )
    }
}

const VoteButton = (props) => {
    return (
        <div>
            <br></br><button onClick={props.onClick}>Vote this anecdote</button>
        </div>
    )
}

const NextButton = (props) => {
    return (
        <div>
            <br></br><button onClick={props.onClick}>Show next anecdote</button>
        </div>
    )
}

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
    <App anecdotes={anecdotes} />,
    document.getElementById('root')
)