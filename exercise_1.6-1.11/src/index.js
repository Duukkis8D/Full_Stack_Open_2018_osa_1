import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            good: 0,
            neutral: 0,
            bad: 0
        }
    }

    render() {
        const handleGoodClick = () => () => this.setState({ good: this.state.good + 1 })

        const handleNeutralClick = () => () => this.setState({ neutral: this.state.neutral + 1 })

        const handleBadClick = () => () => this.setState({ bad: this.state.bad + 1 })

        return (
            <div>
                <Otsikko teksti="anna palautetta"/>
                <button onClick={handleGoodClick()}>hyvä</button>
                <button onClick={handleNeutralClick()}>neutraali</button>
                <button onClick={handleBadClick()}>huono</button>
                <Otsikko teksti="statistiikka"/>
                <Statistiikka state={this.state}/>
            </div>
        )
    }
}

const Otsikko = (props) => <h1>{props.teksti}</h1>

const Statistiikka = (props) => {
    return (
        <div>
            <p>hyvä {props.state.good}</p>
            <p>neutraali {props.state.neutral}</p>
            <p>huono {props.state.bad}</p>
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)