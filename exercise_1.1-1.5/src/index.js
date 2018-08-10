import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
    const exercises1 = 10;
    const exercises2 = 7;
    const exercises3 = 14;

    return (
        <div>
            <Otsikko name='Half Stack -sovelluskehitys' />
            <Sisalto subject='Reactin perusteet' exercises={exercises1} />
            <Sisalto subject='Tiedonvälitys propseilla' exercises={exercises2} />
            <Sisalto subject='Komponenttien tila' exercises={exercises3} />
            <Yhteensa exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} />
        </div>
    )
}

const Otsikko = (props) => {
    return (
        <h1>{props.name}</h1>
    )
}

const Sisalto = (props) => {
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