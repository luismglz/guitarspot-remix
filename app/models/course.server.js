export async function getCourse() {
  const URL_COURSE = `${process.env.API_URL}/course?populate=thumbnail`;
  const response = await fetch(URL_COURSE);
  return await response.json();
}