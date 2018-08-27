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
        // Computed property names (ES2015):
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/
        // object_initializer#New_notations_in_ECMAScript_2015
        const handleClick = (arvo) => () => this.setState({ [arvo]: this.state[arvo] + 1 })

        return (
            <div>
                <Header teksti="anna palautetta"/>
                <Button teksti="hyvä" onClick={handleClick("good")}/>
                <Button teksti="neutraali" onClick={handleClick("neutral")}/>
                <Button teksti="huono" onClick={handleClick("bad")}/>
                <Header teksti="statistiikka"/>
                <Statistics state={this.state}/>
            </div>
        )
    }
}

const Header = (props) => <h1>{props.teksti}</h1>

const Button = (props) => {
    return <button onClick={props.onClick}>{props.teksti}</button>
}

const Statistics = (props) => {
    let keskiarvo = (props.state.good * 1 + props.state.bad * -1) /
        (props.state.good + props.state.neutral + props.state.bad);
    if( Number.isNaN(keskiarvo) ) keskiarvo = 0;

    let positiivisia = props.state.good / (props.state.good + props.state.neutral + props.state.bad) * 100
    if( Number.isNaN(positiivisia) ) positiivisia = 0;

    if(props.state.good === 0 && props.state.neutral === 0 && props.state.bad === 0) {
        return (
            <p>Ei yhtään palautetta annettu</p>
        )
    }

    return (
        <div>
            <Statistic teksti="hyvä" toiminto={props.state.good}/>
            <Statistic teksti="neutraali" toiminto={props.state.neutral}/>
            <Statistic teksti="huono" toiminto={props.state.bad}/>
            <Statistic teksti="keskiarvo" toiminto={keskiarvo}/>
            <Statistic teksti="positiivisia" toiminto={positiivisia + " %"}/>
        </div>
    )
}

const Statistic = (props) => {
    return <p>{props.teksti} {props.toiminto}</p>
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)