export default function Searchbar() {
  function search(formData) {
    const query = formData.get("query");
    alert(`You searched for ${query}`);
  }
  return (
    <form id="searchbar" action={search}>
      <input name="query" />
      <button type="submit">Search</button>
    </form>
  );
}

//this is a really neat way to get a submit.
//trick is to get the search query out of this and into the DB string for the unsplash api
