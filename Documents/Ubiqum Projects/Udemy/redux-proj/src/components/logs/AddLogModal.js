import React, { useState } from 'react';
import TechSelectionOption from '../techs/TechSelectionOption';
import M from 'materialize-css/dist/js/materialize.min.js';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addLog } from '../../store/actions/logAction';

const AddLogModel = ({ addLog }) => {
  //Component level state since it is a form
  const [message, setMessage] = useState('');
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState('');

  const onsubmit = () => {
    if (message === '' || tech === '') {
      M.toast({ html: 'Error, Enter a message and tech' });
    } else {
      const newLog = {
        message,
        attention,
        tech,
        date: new Date(),
      };
      addLog(newLog);
    }
    M.toast({ html: `Log added by ${tech}` });
    setMessage('');
    setAttention('');
    setTech('');
  };

  return (
    <div id='add-log-modal' className='modal' style={modalStyle}>
      <div className='modal-content'>
        <h4>Create System Log</h4>
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='message'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
            <label htmlFor='message' className='active'>
              Log Messgage
            </label>
          </div>
        </div>

        <div className='row'>
          <div className='input-field'>
            <select
              name='tech'
              value={tech}
              className='browser-default'
              onChange={(e) => setTech(e.target.value)}
              required
            >
              <option value='' disabled>
                Select
              </option>
              <TechSelectionOption />
            </select>
          </div>
        </div>

        <div className='row'>
          <div className='input-field'>
            <p>
              <label>
                <input
                  type='checkbox'
                  className='filled-in'
                  checked={attention}
                  value={attention}
                  onChange={(e) => setAttention(!attention)}
                />
                <span>Needs attention</span>
              </label>
            </p>
          </div>
        </div>

        <div className='modal-footer'>
          <a
            href='#!'
            onClick={onsubmit}
            className='modal-close waves-effect waves-green btn-flat'
          >
            Enter
          </a>
        </div>
      </div>
    </div>
  );
};
AddLogModel.propTypes = {
  addLog: PropTypes.func.isRequired,
};
const modalStyle = {
  width: '75%',
  height: '75%',
};

export default connect(null, { addLog })(AddLogModel);
