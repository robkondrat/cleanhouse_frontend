export default function SignOut() {
  function signout() {
    localStorage.removeItem("userId");
    localStorage.removeItem("jwt");
  } 
  return (
    <button type="button" onClick={signout}><a href="/signin">Sign Out</a></button>
  )
}