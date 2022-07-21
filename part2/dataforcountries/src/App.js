import { useState, useEffect } from 'react'
import axios from 'axios'


const Countrie = ({countrie}) => {
  const key = parseInt(countrie.idd.suffixes[0])
  return (
    <li key={key}>{countrie.name.common}</li>
  )
}

const Filter = ({value, onChange}) => {
    return (
      <>
      find countries <input value={value} 
        onChange={onChange}
      />
      </>
    )
}

const Countries = ({countries}) => {
  return (
    <ul>
      {(countries.length <= 10) ? countries.map(countrie => <Countrie countrie={countrie} /> ) : "Too many matches specify another filter"}
    </ul>
  )
}

const FullCountry = ({countrie}) => {
  return (
    <>
    <h1>{countrie.name.common}</h1>
    <p>capital: {countrie.capital}</p>
    <p>area: {countrie.area}</p>

    <h2>languages</h2>
    {Object.entries(countrie.languages).map(([key,value]) => <li key={key}>{value}</li>)}
    <img src={countrie.flags.png} alt={countrie.name.official} />
    </>
    
  )
}

const MainComp = ({countries}) => {
  return (countries.length === 1) ? <FullCountry countrie={countries[0]} /> : <Countries countries={countries} />
}


const App = () => {
  const [countries, setCountries] = useState([])
  const [userFilter, setUserFilter] = useState([])

  const hook = () => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data)
      })
  }

  useEffect(hook,[])

  const onFilter = (event) => {
    setUserFilter(event.target.value)
  }

  return (
    <div>
      <Filter value={userFilter} onChange={onFilter} />
      <MainComp countries={countries.filter(c => c.name.common.includes(userFilter))}/>
    </div>
  )
}

export default App;
