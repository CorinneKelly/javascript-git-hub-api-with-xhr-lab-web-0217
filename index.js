let username

function getRepositories() {
  const req = new XMLHttpRequest()
  username = document.getElementById('username').value
  req.open("GET", 'https://api.github.com/users/' + username +'/repos')
  req.send()
}

function getCommits(element) {
  name = element.dataset.repository
  const req = new XMLHttpRequest()
  req.addEventListener("load", displayCommits);
  req.open("GET", 'https://api.github.com/repos/' + username + '/' + name + '/commits')
  req.send()
}

function displayCommits() {
  const commits = JSON.parse(this.responseText)
  const commitsList = `<ul>${commits.map(commit => '<li><strong>' + commit.author.login + commit.commit.author.name + '</strong> - ' + commit.commit.message + '</li>').join('')}</ul>`
  document.getElementById("details").innerHTML = commitsList
}

function getBranches(element) {
	name = element.dataset.repository
  const req = new XMLHttpRequest()
  req.addEventListener("load", displayBranches);
  req.open("GET", 'https://api.github.com/repos/' + username + '/' + name + '/branches')
  req.send()
}

function displayBranches(){
	const branches = JSON.parse(this.responseText)
  const branchesList = `<ul>${branches.map(branch => '<li><strong>' + branch.name  + '</strong> - '  + '</li>').join('')}</ul>`
  document.getElementById("details").innerHTML = branchesList
}

function displayRepositories(){
	const repos = JSON.parse(this.responseText)
  const reposList = `<ul>${repos.map(repo => '<li><strong>' + repo.html_url  + '</strong> - '  + '</li>').join('')}</ul>`
  document.getElementById("repositories").innerHTML = reposList
}

