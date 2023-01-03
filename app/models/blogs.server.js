export async function getBlogs() {
  const URL_GUITARS = `${process.env.API_URL}/blogs?populate=thumbnail`;
  const response = await fetch(URL_GUITARS);
  return await response.json();
}

export async function getBlogByUrl(url) {
  const response = await fetch(`${process.env.API_URL}/blogs?filters[url]=${url}&populate=thumbnail`);
  return await response.json();

}