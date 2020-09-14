import React, { useContext } from 'react';
import UserSessionContext from '../../contexts/UserSessionContext';
import './Pitch.scss';

const Pitch = () => {

  const userSessionState = useContext(UserSessionContext);
  const [userFormation] = userSessionState.formation;

  return (
    <div className={`pitch pitch-${userFormation.id}`} data-testid="Pitch">
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
};

export default Pitch;
