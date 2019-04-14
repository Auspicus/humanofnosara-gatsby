const url = (url, language) => {
  if (!language)
    language = ''
  
  language = `/${language}`

  return `${language}${url}`
}