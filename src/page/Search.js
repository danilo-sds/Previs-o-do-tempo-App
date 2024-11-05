import "../App.css";

function Search() {
  function searchInput() {
    let currentValue = document.querySelector("input[name=search").value;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${currentValue}&appid=4d8fb5b93d4af21d66a2948710284366&units=metric`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const { main, name, sys, weather } = data;
        if (sys !== undefined) console.log(sys);
        if (weather !== undefined) console.log(weather[0]["description"]);
      });
  }

  return (
    <div className="search">
      <h2>Digite a cidade que você quer saber a previsão</h2>
      <form onSubmit={(e) => searchInput(e)}>
        <input
          onKeyUp={searchInput}
          type="text"
          name="search"
          id="search"
          placeholder="Digite o nome da cidade..."
        />
        <input type="submit" value="Pesquise por cidade!" />
      </form>
    </div>
  );
}

export default Search;
