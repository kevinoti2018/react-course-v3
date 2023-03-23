import { useState } from 'react';

const ShortCircuitExamples = () => {
  // falsy
  const [text, setText] = useState('');
  // truthy
  const [name, setName] = useState('susan');
  const [user, setUser] = useState({ name: 'john' });
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div>
    <h2>{name && "short circuit - examples"}</h2>
    {!isEditing && (
      <p>{name}</p>
    )}
    </div>
    )
};

export default ShortCircuitExamples;
