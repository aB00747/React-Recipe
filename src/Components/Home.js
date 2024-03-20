import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
    <ul>
        <li>
            <Link  className="Link-style" to={"/BasicExp"}>React Example</Link>
        </li>
        <li>
            <Link  className="Link-style" to={"/ListandKeys"}>List-and-Keys</Link>
        </li>
    </ul>
    </>
  )
}
