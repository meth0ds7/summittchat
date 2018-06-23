// Determine the room name and public URL for this chat session.
function getRoom() {
  var query = location.search && location.search.split("?")[1];

  if (query) {
    return (location.search && decodeURIComponent(query.split("=")[1]));
  }

  return okta.tokenManager.get("idToken").claims.email;
}
