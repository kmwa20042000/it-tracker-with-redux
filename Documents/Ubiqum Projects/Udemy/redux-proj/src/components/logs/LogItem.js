import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { deleteLog, setCurrent } from '../../store/actions/logAction';
import M from 'materialize-css/dist/js/materialize.min.js';

const LogItem = ({ log, deleteLog, setCurrent }) => {
  const { message, id, date, tech, attention } = log;

  const onDelete = () => {
    deleteLog(log.id);
    M.toast({ html: `Log Deleted` });
  };

  return (
    <li className='collection-item'>
      <div>
        <a
          href='#edit-log-modal'
          className={`modal-trigger ${
            attention ? 'red-text' : 'teal-text  teal-lighten-1'
          }`}
          onClick={() => setCurrent(log)}
        >
          {message}
        </a>
        <br />
        <span className='blue-text text-darken-5'>
          <span className='black-text'>ID #{id} Last updated by</span>
          <span> {tech}</span> on <Moment format='MMMM D, YYYY'>{date}</Moment>
        </span>
        <a href='#!' onClick={onDelete} className='secondary-content'>
          <i className='material-icons red-text'>delete</i>
        </a>
      </div>
    </li>
  );
};

LogItem.propTypes = {
  log: PropTypes.object.isRequired,
  setCurrent: PropTypes.func.isRequired,
};

export default connect(null, { deleteLog, setCurrent })(LogItem);
