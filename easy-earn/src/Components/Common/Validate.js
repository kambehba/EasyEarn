export default function validatePlayerName(values) {
  let errors = {};
  if (!values.playerName) {
    errors.playerName = "Player Name is Required";
  }

  return errors;
}
