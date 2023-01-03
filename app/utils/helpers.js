export const formatDate = date => {
  const dateObject = new Date(date);
  const dateSettings = {
    year: 'numeric',
    month: 'long',
    day: '2-digit'
  }

  return dateObject.toLocaleDateString('en-US', dateSettings)
}