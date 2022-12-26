export async function getGuitars(){
  const URL_GUITARS = `${process.env.API_URL}/guitars?populate=image`;
  const response = await fetch(URL_GUITARS);
  return await response.json();
}