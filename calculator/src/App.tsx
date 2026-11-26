import { useState } from 'react'
import { OPERATIONS, type Operation } from './calc'

const operations = Object.keys(OPERATIONS) as Operation[]

export default function App() {
  const [a, setA] = useState(0)
  const [b, setB] = useState(0)
  const [op, setOp] = useState<Operation>('add')
  const result = OPERATIONS[op](a, b)

  return (
    <main>
      <h1>Calculator</h1>
      <input type="number" aria-label="a" value={a} onChange={(e) => setA(e.target.valueAsNumber || 0)} />
      <select aria-label="operation" value={op} onChange={(e) => setOp(e.target.value as Operation)}>
        {operations.map((o) => (
          <option key={o} value={o}>{o}</option>
        ))}
      </select>
      <input type="number" aria-label="b" value={b} onChange={(e) => setB(e.target.valueAsNumber || 0)} />
      <p>= <output>{result}</output></p>
    </main>
  )
}
