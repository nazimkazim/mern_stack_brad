import React, { Component } from 'react';
import Moment from 'react-moment';

class ProfileCreds extends Component {
  render() {
    const { experience, education } = this.props;

    const expItems = experience.map(exp => (
      <li key={exp._id} style={{ marginBottom: 10 }}>
        <h4 className="tag is-5 subtitle">{exp.company}</h4>
        <ul className="menu-list" style={{ padding: 15 }}>
          <li className="is-size-5 has-text-success">
            <Moment format="YYYY/MM/DD">{exp.from}</Moment> -
            {exp.to === null ? (
              ' Now'
            ) : (
              <Moment format="YYYY/MM/DD">{exp.to}</Moment>
            )}
          </li>
          <li className="is-uppercase has-text-weight-semibold has-text-grey-light is-4">
            {exp.title}
          </li>

          <li className="has-text-info is-uppercase">
            {exp.location === '' ? null : <span>{exp.location}</span>}
          </li>
          <li>{exp.location === '' ? null : <span>{exp.description}</span>}</li>
        </ul>
      </li>
    ));

    const eduItems = education.map(edu => (
      <li key={edu._id}>
        <h4>{edu.school}</h4>
        <p>
          <Moment format="YYYY/MM/DD">{edu.from}</Moment> -
          {edu.to === null ? (
            ' Now'
          ) : (
            <Moment format="YYYY/MM/DD">{edu.to}</Moment>
          )}
        </p>
        <p>
          <strong>Degree:</strong>
          {edu.degree}
        </p>
        <p>
          <strong>Field of study:</strong>
          {edu.fieldofstudy}
        </p>
        <p>
          {edu.location === '' ? null : (
            <span>
              <strong>Description:</strong>
              {edu.description}
            </span>
          )}
        </p>
      </li>
    ));
    return (
      <div className="columns">
        <div className="column is-6">
          <div className="columns is-centered" style={{ padding: 20 }}>
            <div className="column is-three-quarters">
              <h3 className="has-text-centered">Experience</h3>
              <div className="menu">
                {expItems.length > 0 ? (
                  <ul className="menu-list">
                    <li>{expItems}</li>
                  </ul>
                ) : (
                  <p className="has-text-centered">No experience listed</p>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="column is-6">
          <div className="columns is-centered" style={{ padding: 20 }}>
            <div className="column is-half">
              <h3 className="has-text-centered">Education</h3>
              {eduItems.length > 0 ? (
                <ul className="menu-list">{eduItems}</ul>
              ) : (
                <p className="has-text-centered">No education listed</p>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileCreds;
