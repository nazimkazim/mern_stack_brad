import React, { Component } from 'react';
import Moment from 'react-moment';

class ProfileCreds extends Component {
  render() {
    const { experience, education } = this.props;

    const expItems = experience.map(exp => (
      <li key={exp._id} className="list-group-item">
        <h4>{exp.company}</h4>
        <p>
          <Moment format="YYYY/MM/DD">{exp.from}</Moment> -
          {exp.to === null ? (
            ' Now'
          ) : (
            <Moment format="YYYY/MM/DD">{exp.to}</Moment>
          )}
        </p>
        <p>
          <strong>Position:</strong>
          {exp.title}
        </p>
        <p>
          {exp.location === '' ? null : (
            <span>
              <strong>Location:</strong>
              {exp.location}
            </span>
          )}
        </p>
        <p>
          {exp.location === '' ? null : (
            <span>
              <strong>Description:</strong>
              {exp.description}
            </span>
          )}
        </p>
      </li>
    ));

    const eduItems = education.map(edu => (
      <li key={edu._id} className="list-group-item">
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
            <div className="column is-half">
              <h3 className="has-text-centered">Experience</h3>
              {expItems.length > 0 ? (
                <ul className="list-group">{expItems}</ul>
              ) : (
                <p className="text-center">No experience listed</p>
              )}
            </div>
          </div>
        </div>
        <div className="column is-6">
          <div className="columns is-centered" style={{ padding: 20 }}>
            <div className="column is-half">
              <h3 className="has-text-centered">Education</h3>
              {eduItems.length > 0 ? (
                <ul className="list-group">{eduItems}</ul>
              ) : (
                <p className="text-center">No education listed</p>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileCreds;
