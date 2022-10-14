function Search(dados, query, keys) {
  return dados.filter((dado) =>
    keys.some((key) => dado[key]?.toLowerCase().includes(query))
  );
}

export default Search;
