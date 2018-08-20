import React, { Component } from 'react';
import isEmpty from '../../validation/is-empty';

class ProfileHeader extends Component {
  render() {
    const { profile } = this.props;

    return (
      <div>
        <section className="hero is-light is-fullheight">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">{profile.handle}</h1>
              <h2 className="subtitle">{profile.status}</h2>
              <h2 className="subtitle">
                <div className="level">
                  <div className="level-right">
                    <div className="level-item">
                      {isEmpty(profile.website) ? null : (
                        <a
                          className="text-white p-2"
                          href={profile.website}
                          target="_blank"
                        >
                          <i className="fas fa-globe fa-2x" />
                        </a>
                      )}
                    </div>
                    <div className="level-item">
                      {isEmpty(
                        profile.social && profile.social.twitter
                      ) ? null : (
                        <a
                          className="text-white p-2"
                          href={profile.social.twitter}
                          target="_blank"
                        >
                          <i className="fab fa-twitter fa-2x" />
                        </a>
                      )}
                    </div>
                    <div className="level-item">
                      {isEmpty(
                        profile.social && profile.social.facebook
                      ) ? null : (
                        <a
                          className="text-white p-2"
                          href={profile.social.facebook}
                          target="_blank"
                        >
                          <i className="fab fa-facebook fa-2x" />
                        </a>
                      )}
                    </div>
                    <div className="level-item">
                      {isEmpty(
                        profile.social && profile.social.instagram
                      ) ? null : (
                        <a
                          className="text-white p-2"
                          href={profile.social.instagram}
                          target="_blank"
                        >
                          <i className="fab fa-instagram fa-2x" />
                        </a>
                      )}
                    </div>
                    <div className="level-item">
                      {isEmpty(
                        profile.social && profile.social.linkedin
                      ) ? null : (
                        <a
                          className="text-white p-2"
                          href={profile.social.linkedin}
                          target="_blank"
                        >
                          <i className="fab fa-linkedin fa-2x" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </h2>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default ProfileHeader;
