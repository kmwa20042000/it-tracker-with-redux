import React, { useState, useEffect } from 'react';
import TechItem from './TechItem';
import Preloader from '../layout/Preloader';
const TechListModal = () => {
  const [techs, setTechs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getTechs();
  }, []);

  const getTechs = async () => {
    setLoading(true);
    const res = await fetch('/techs');
    const data = await res.json();
    console.log(data);
    setTechs(data);
    setLoading(false);
  };
  /*
  if (loading) {
    return <Preloader />;
  }
  */
  return (
    <div id='tech-list-modal' className='modal'>
      <div className='modal-content'>
        <h4>Technicial List</h4>
        <ul className='collection'>
          {loading && <Preloader />}
          {!loading &&
            techs.map((tech) => <TechItem tech={tech} key={tech.id} />)}
        </ul>
      </div>
    </div>
  );
};
export default TechListModal;
