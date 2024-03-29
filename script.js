const LinksSocialMedia = {
  github: 'guiacreis',
  youtube: 'channel/UCRckMXwc4w_k8yblgvjUFsA',
  facebook: 'guiireis04',
  twitter: 'Tslayers1',
  instagram: 'guiacreis'
}

function ChangeSocialMediasLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}

ChangeSocialMediasLinks()

function getGitHubProfilesInfo() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfilesInfo()
