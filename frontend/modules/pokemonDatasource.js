export async function fetchPokemon() {
  // TriggerWarning: Ne jamais mettre dans un projet de production des liens d'API, ou de BDD, ou de clé, etc.
  // En dur dans le code, toujours passer par des variables d'environnement
  const response = await fetch("http://localhost:3000/pokememon");
  return response.json();
}
