export async function getGuitars(){
  const URL_GUITARS = `${process.env.API_URL}/guitars?populate=image`;
  const response = await fetch(URL_GUITARS);
  return await response.json();
}

export async function getGuitarByUrl(url){
  const response = await fetch(`${process.env.API_URL}/guitars?filters[url]=${url}&populate=image`);
  return await response.json();

}