import React, { useState } from "react"
import "./Pizza.css"

const Pizza = () => {
  const [name, setName] = useState("")
  const [pepperoni, setPepperoni] = useState(false)
  const [sausage, setSausage] = useState(false)
  const [peppers, setPeppers] = useState(false)
  const [onions, setOnions] = useState(false)

  return (
    <div className="Pizza">
      <form className="PizzaForm">
        <input
          placeholder="Enter Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value)
          }}
        />
        <label>
          <input
            type="checkbox"
            checked={pepperoni}
            onChange={() => {
              setPepperoni(!pepperoni)
            }}
          />
          Pepperoni
        </label>
        <label>
          <input
            type="checkbox"
            checked={sausage}
            onChange={() => {
              setSausage(!sausage)
            }}
          />
          Sausage
        </label>
        <label>
          <input
            type="checkbox"
            checked={peppers}
            onChange={() => {
              setPeppers(!peppers)
            }}
          />
          Peppers
        </label>
        <label>
          <input
            type="checkbox"
            checked={onions}
            onChange={() => {
              setOnions(!onions)
            }}
          />
          Onions
        </label>
      </form>

      <div className="PizzaOrder">
        <h3>Your Order:</h3>
        <p>{name}</p>
        {pepperoni && <p>Pepperoni</p>}
        {sausage && <p>Sausage</p>}
        {peppers && <p>Peppers</p>}
        {onions && <p>Onions</p>}
      </div>
    </div>
  )
}

export default Pizza
