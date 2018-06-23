// Retrieve the absolute room URL.
function getRoomURL() {
  return location.protocol + "//" + location.host + (location.path || "") + "?room=" + getRoom();
}
