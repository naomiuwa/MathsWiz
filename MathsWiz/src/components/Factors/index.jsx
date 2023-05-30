import { useState } from "react"

function Factors(){
    const [operator, setOperator] = useState('')
    const [lowerFactors, setLowerFactors] = useState([])
    const [upperFactors, setUpperFactors] = useState([])
}

export default Factors

/* 
- states = operator, lowerFactors, upperFactors

- operators = checkboxes where you can only pick one 
- factors = checkboxes where you can pick more than one element 

*/