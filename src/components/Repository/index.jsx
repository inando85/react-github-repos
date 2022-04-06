import "./style.css";

function Repository(props) {
  return (
    <section className="repository">
      {props.repositories.map((repository, index) => (
        <div className="repository-card" key={index}>
          <div className="owner">
            <img
              src={repository.owner.avatar_url}
              alt={`Avatar ${repository.owner.login}`}
              className="avatar"
            />
            <span className="login">{repository.owner.login}</span>
          </div>
          <div className="repo-infos">
            <a href={repository.html_url} className="repo-link" target="_blank">
              Acessar Repositório
            </a>
            <p className="id">
              ID: <span className="content">{repository.id}</span>
            </p>
            <p className="repo-name">
              Name: <span className="content">{repository.name}</span>
            </p>
            <p className="project-language">
              Language: <span className="content">{repository.language}</span>
            </p>
            <p className="created-at">
              Created At:{" "}
              <span className="content">{repository.created_at}</span>
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Repository;
