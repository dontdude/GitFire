import React, { useState, useEffect } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

// https://api.github.com/users/dontdude/repos
const UserRepos = ({ repos_url }) => {
  const [repos, setRepos] = useState([]);

  const fetchRepos = async () => {
    const response = await fetch(repos_url);       //fetch method in NEXTjs 
    const data = await response.json();
    setRepos(data);
  };

  useEffect(() => {
    fetchRepos();
  }, [repos_url]);      //new or changed repo url will call fetchRepos

  return (
    <ListGroup>
      {repos.map(repo => (                //mapping through all the repos
        <ListGroupItem key={repo.id}>
          <div className="text-primary"><a href={repo.clone_url}>{repo.name}</a></div>
          <div className="text-secondary">{repo.language}</div>
          <div className="text-info">{repo.description}</div>
          <div className="text-secondary">Forks : {repo.forks_count} &nbsp;&nbsp; Stars : {repo.stargazers_count}</div>
        </ListGroupItem>
      ))}
    </ListGroup>
  );
};

export default UserRepos;
