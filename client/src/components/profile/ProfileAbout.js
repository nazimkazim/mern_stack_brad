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
      <section class="hero is-medium is-primary is-bold">
        <div class="hero-body">
          <div class="container">
            <h1 class="title has-text-centered">Biography</h1>
            <h2 class="subtitle is-5 has-text-weight-light has-text-grey-lighter">
              {isEmpty(profile.bio) ? null : <span>{profile.bio}</span>}
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
