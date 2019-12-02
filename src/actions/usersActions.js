export function fetchUsers() {
  return dispatch => {
    dispatch({ type: "LOADING_USERS" });
    return (
      fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        // .then(users => console.log(users));
        .then(users => dispatch({ type: "FETCH_USERS", payload: users }))
    );
  };
}
