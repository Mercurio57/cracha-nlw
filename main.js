const linksSocialMedia = {
  github: 'Mercurio57',
  youtube: 'user/blackbeardiaries',
  facebook: 'blackbear',
  instagram: 'vanessa.tviana',
  twitter: 'ArianaGrande'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

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
// fetch pega os dados da url (linha 20), e o then (promise) significa "se der certo, então", response é só o nome da variável, e o .json faz com que ele convirta as informações não convertidas que o fetch traz.
//na dom, vc usa href pra subs. o link, text content pra texto e src pra imagem

getGitHubProfileInfos()
