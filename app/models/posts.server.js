export async function getPosts() {
  const URL_GUITARS = `${process.env.API_URL}/blogs?populate=thumbnail`;
  const response = await fetch(URL_GUITARS);
  return await response.json();
}