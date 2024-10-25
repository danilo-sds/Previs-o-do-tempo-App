import "../App.css";

function Search() {
  function searchInput() {
    let currentValue = document.querySelector("input[name=search").value;
    alert(currentValue);
  }

  return (
    <div className="search">
      <h2>Digite a cidade que você quer saber a previsão</h2>
      <input
        onKeyUp={searchInput}
        type="text"
        name="search"
        id="search"
        placeholder="Digite o nome da cidade..."
      />
    </div>
  );
}

export default Search;
