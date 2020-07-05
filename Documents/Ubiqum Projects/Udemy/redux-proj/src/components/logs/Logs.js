import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import LogItem from './LogItem';
import Preloader from '../layout/Preloader';
import PropTypes from 'prop-types';
import { getLogs } from '../../store/actions/logAction';
//                   brought in from mapStateToProps which is the initial state below
// when bringing in action, action becomes a prop

const Logs = ({ log: { logs, loading }, getLogs }) => {
  useEffect(() => {
    getLogs();
    // eslint-disable-next-line
  }, []);

  if (loading || logs === null) {
    return <Preloader />;
  }
  return (
    <div>
      <ul className='collection with-header'>
        <li className='collection-header'>
          <h4 className='center'>System Logs</h4>
        </li>
        {!loading && logs.length === 0 ? (
          <p className='center'>Nothing to show... add some!</p>
        ) : (
          logs.map((log) => <LogItem log={log} key={log.id} />)
        )}
      </ul>
    </div>
  );
};

Logs.propTypes = {
  log: PropTypes.object.isRequired,
  getLogs: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  //from root reducer file, index.js -> initialState defined in logReducer
  log: state.log,
});
//react-redux, takes in 2 things, the initial state & action
export default connect(mapStateToProps, { getLogs })(Logs);

/*
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(false);
*/
/*
  const getLogs = async () => {
    setLoading(true);
    const res = await fetch('/logs');
    const data = await res.json();
    console.log(data);
    setLogs(data);
    setLoading(false);
  };
  
  if (loading) {
    return <Preloader />;
  }
  */
