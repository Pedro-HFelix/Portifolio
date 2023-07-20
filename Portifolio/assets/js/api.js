
async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/Pedro-HFelix/Portifolio/main/js-developer-portfolio/data/profile.json?token=GHSAT0AAAAAACDCKC4THVC7WZFQO23Z4WWQZFZTXEA';
    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}
