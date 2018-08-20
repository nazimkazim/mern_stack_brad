import React, { Component } from 'react';
import PropTypes from 'prop-types';
import isEmpty from '../../validation/is-empty';

class ProfileAbout extends Component {
  render() {
    const { profile } = this.props;

    // Get first name
    const firstName = profile.user.name.trim().split(' ')[0];

    // Skill list
    const skills = profile.skills.map((skill, index) => (
      <div className="tag is-info is-large">
        <p key={index} className="heading">
          {skill}
        </p>
      </div>
    ));
    return (
      <section className="hero is-medium is-primary is-bold">
        <div className="hero-body">
          <div className="container">
            <h2
              className="has-text-centered title is-4 has-text-weight-light"
              style={{ paddingTop: 15, paddingBottom: 15 }}
            >
              Biography
            </h2>
            <article className="media">
              <figure className="media-left">
                <p className="image is-64x64">
                  <img className="is-rounded" src={profile.user.avatar} />
                </p>
              </figure>
              <div className="media-content">
                <div className="content">
                  <p>{profile.bio}</p>
                </div>
              </div>
            </article>
            <h2
              className="has-text-centered title is-4 has-text-weight-light"
              style={{ paddingTop: 15, paddingBottom: 15 }}
            >
              Tools & Technology I use at work
            </h2>
            <nav class="level is-mobile">
              <div class="level-item has-text-centered">
                <div className="tags">{skills}</div>
              </div>
            </nav>
          </div>
        </div>
      </section>
    );
  }
}

ProfileAbout.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileAbout;
