import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
    return (
        <div>
            <Otsikko name='Half Stack -sovelluskehitys' />
            <Sisalto/>
            <Yhteensa exercises1={10} exercises2={7} exercises3={14} />
        </div>
    )
}

const Otsikko = (props) => {
    return (
        <h1>{props.name}</h1>
    )
}

const Sisalto = () => {
    return (
        <div>
            <Osa subject='Reactin perusteet' exercises={10} />
            <Osa subject='Tiedonvälitys propseilla' exercises={7} />
            <Osa subject='Komponenttien tila' exercises={14} />
        </div>
    )
}

const Osa = (props) => {
    return (
        <p>{props.subject} {props.exercises}</p>
    )
}

const Yhteensa = (props) => {
    return (
        <p>yhteensä {props.exercises1 + props.exercises2 + props.exercises3} tehtävää</p>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)