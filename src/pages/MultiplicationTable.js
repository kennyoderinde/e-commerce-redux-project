import React, { useState } from 'react';
import "./IsPrime.css"

// function to check if a number is prime
function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}
// function to generate the first num prime numbers
function generatePrimes(numPrimes) {
  let primes = [];
  let i = 2;
  while (primes.length < numPrimes) {
    if (isPrime(i)) {
      primes.push(i);
    }
    i++;
  }
  return primes;
}

// function to generate the multiplication table
function MultiplicationTable() {
  const [numPrimes, setNumPrimes] = useState(10);
  const [primes, setPrimes] = useState(generatePrimes(numPrimes));

  function handleNumPrimesChange(event) {
    const newNumPrimes = parseInt(event.target.value);
    setNumPrimes(newNumPrimes);
    setPrimes(generatePrimes(newNumPrimes));
  }

  return (
    <div className='big-container'>
      <h1>Prime Numbers Multiplication Table</h1> 
      <label className='num-input-container'>
        Number of Primes:
        <input className='input-box' type="number" value={numPrimes} onChange={handleNumPrimesChange} />
      </label> <br></br>
      <table className='table'>
        <thead className='thead'>
          <tr>
            <th></th>
            {primes.map(prime => <th key={prime}>{prime}</th>)}
          </tr>
        </thead>
        <tbody className='table-body'>
          {primes.map(prime1 => (
            <tr key={prime1}>
              <th>{prime1}</th>
              {primes.map(prime2 => (
                <td key={prime2}>{prime1 * prime2}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MultiplicationTable;
