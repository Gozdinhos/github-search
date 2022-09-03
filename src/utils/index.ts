export const getDefaultTheme = () =>{
  return localStorage.getItem("github-search-theme") === "light" ? "light" : "dark"
}