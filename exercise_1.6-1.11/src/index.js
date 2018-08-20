import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
    return (
        <AnnaPalautetta teksti={"anna palautetta"}/>
    )
}

const AnnaPalautetta = (props) => {<h1>{props.teksti}</h1>}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)