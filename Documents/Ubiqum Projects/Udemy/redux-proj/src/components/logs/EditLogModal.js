import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { updateLog } from '../../store/actions/logAction';
import M from 'materialize-css/dist/js/materialize.min.js';

const EditLogModal = ({ current, updateLog }) => {
  const [message, setMessage] = useState('');
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState('');
  useEffect(() => {
    if (current) {
      setMessage(current.message);
      setAttention(current.attention);
      setTech(current.tech);
    }
  }, [current]);

  const onsubmit = () => {
    if (message === '' || tech === '') {
      M.toast({ html: 'Error, Enter a message and tech' });
    } else {
      const newLog = {
        id: current.id,
        message,
        tech,
        attention,
        date: new Date(),
      };
      updateLog(newLog);
      M.toast({ html: 'Log Updated' });
      setMessage('');
      setAttention(false);
      setTech('');
    }
  };

  return (
    <div id='edit-log-modal' className='modal' style={modalStyle}>
      <div className='modal-content'>
        <h4>Edit System Log</h4>
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='message'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
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
              <option value='Kazu Gucci'>Kazu Gucci</option>
              <option value='Gucci Mane'>Gucci Mane</option>
              <option value='Clararita'>Clararita</option>
              <option value='John Wilson'>John Wilson</option>
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

const modalStyle = {
  width: '75%',
  height: '75%',
};
EditLogModal.propTypes = {
  current: PropTypes.object,
  updateLog: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  current: state.log.current,
});
export default connect(mapStateToProps, { updateLog })(EditLogModal);
