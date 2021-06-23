import  React , {useState} from 'react';

export const InputElement = () => {
  const [userName, setUserName] = useState('');

  return (
    <>
      <h3 data-testid="userName-label">{userName}</h3>
      <input
        data-testid="userName-input"
        value={userName}
        onChange={e => setUserName(e.target.value)}
      />
    </>
  );
};