import { Person } from './Person';
import React,{useState} from 'react'
import { people } from '../../../data';
const List = () => {
    const[person,setPerson]= useState(people)
    console.log(person);
  return (
    <div>
    {people.map((person) => {
        return <Person     />
      })}
    </div>
  )
}

export default List