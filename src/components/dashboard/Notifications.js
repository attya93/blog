import React from 'react'
import moment from 'moment';

const Notifications = (props) => {
    const { notify } = props;

    return (
        <div className="section">
            <div className='card z-depth-0'>
                <div className="card-content">
                    <span className="card-title">Notifications</span>
                    <ul className="notifiactions">
                        {notify && notify.map(item => {
                            return <li key={item.id}>
                                <span className="pink-text">{item.auth}</span>
                                <span> {item.title}</span>
                                <div className="grey-text note-date">
                                    {moment(item.time.toDate()).fromNow()}
                                </div>
                            </li>
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Notifications