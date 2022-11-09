const getTokens = async () => {
  const response = await fetch('https://opentdb.com/api_token.php?command=request');
  const tokensAPI = await response.json();
  console.log(tokensAPI);
  return tokensAPI;
};

export default getTokens;
