import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
    const kurssi = 'Half Stack -sovelluskehitys'
    const osa1 = {
        nimi: 'Reactin perusteet',
        tehtavia: 10
    }
    const osa2 = {
        nimi: 'Tiedonvälitys propseilla',
        tehtavia: 7
    }
    const osa3 = {
        nimi: 'Komponenttien tila',
        tehtavia: 14
    }

    return (
        <div>
            <Otsikko nimi={kurssi}/>
            <Sisalto osa1={osa1} osa2={osa2} osa3={osa3}/>
            <Yhteensa tehtavia1={osa1.tehtavia} tehtavia2={osa2.tehtavia} tehtavia3={osa3.tehtavia}/>
        </div>
    )
}

const Otsikko = (props) => {
    return (
        <h1>{props.nimi}</h1>
    )
}

const Sisalto = (props) => {
    return (
        <div>
            <Osa kurssi={props.osa1.nimi} tehtavia={props.osa1.tehtavia}/>
            <Osa kurssi={props.osa2.nimi} tehtavia={props.osa2.tehtavia}/>
            <Osa kurssi={props.osa3.nimi} tehtavia={props.osa3.tehtavia}/>
        </div>
    )
}

const Osa = (props) => {
    return (
        <p>{props.kurssi} {props.tehtavia}</p>
    )
}

const Yhteensa = (props) => {
    return (
        <p>yhteensä {props.tehtavia1 + props.tehtavia2 + props.tehtavia3} tehtävää</p>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)