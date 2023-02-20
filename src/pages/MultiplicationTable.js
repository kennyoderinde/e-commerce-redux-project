import React from "react";
import "./IsPrime.css"
// import "./IsPrime.test"


  function isPrime(num) {
    // function to check if a number is prime
    for(let i = 2; i < num; i++) {
      if(num % i === 0) {
        return false;
      }
    }
    return num !== 1;
  }
  
  function getPrimes(num) {
    // function to generate the first num prime numbers
    const primes = [];
    let i = 2;
    while(primes.length < num) {
      if(isPrime(i)) {
        primes.push(i);
      }
      i++;
    }
    return primes;
  }
  
  function generateTable(primes) {
    // function to generate the multiplication table
    const table = [];
    for(let i = 0; i < primes.length; i++) {
      const row = [];
      for(let j = 0; j < primes.length; j++) {
        row.push(primes[i] * primes[j]);
      }
      table.push(row);
    }
    return table;
  }

function MultiplicationTable() {
    const primes = getPrimes(10);
    const table = generateTable(primes);
  
    return (
    <div className="container">
      <h1>Prime Numbers Multiplication Table</h1>
      <table className="table">
        <thead className="thead">
          <tr>
            <th></th>
            {primes.map((prime) => (
              <th key={prime}>{prime}</th>
            ))}
          </tr>
        </thead>
        <tbody className="table-body">
          {primes.map((prime, i) => (
            <tr key={prime}>
              <th>{prime}</th>
              {table[i].map((product, j) => (
                <td key={j}>{product}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    );
  }
  
  export default MultiplicationTable;
