<div className="card-image">
  <figure className="image is-128x128">
    <img className="is-rounded" src={profile.user.avatar} alt="" />
  </figure>
</div>

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
