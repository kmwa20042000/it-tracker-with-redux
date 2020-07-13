import React, { useEffect } from 'react';
import TechItem from './TechItem';
import Preloader from '../layout/Preloader';
import { connect } from 'react-redux';
import { getTechs } from '../../store/actions/techAction';
import PropTypes from 'prop-types';

const TechListModal = ({ getTechs, tech: { techs, loading } }) => {
  useEffect(() => {
    getTechs();
    // eslint-disable-next-line
  }, []);

  /*
  const [techs, setTechs] = useState([]);
  const [loading, setLoading] = useState(false);
  const getTechs = async () => {
    setLoading(true);
    const res = await fetch('/techs');
    const data = await res.json();
    console.log(data);
    setTechs(data);
    setLoading(false);
  };
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
            techs !== null &&
            techs.map((tech) => <TechItem tech={tech} key={tech.id} />)}
        </ul>
      </div>
    </div>
  );
};

TechListModal.propTypes = {
  tech: PropTypes.object.isRequired,
  getTechs: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  tech: state.tech,
});

export default connect(mapStateToProps, { getTechs })(TechListModal);
