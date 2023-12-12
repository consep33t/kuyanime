export const getAnimeResponse = async (resource, query, retryCount = 0) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`);
    if (response.status === 429) {
      const retryAfter = response.headers.get('Retry-After') || 5;
      await new Promise((resolve) => setTimeout(resolve, retryAfter * 1000));

      if (retryCount < 3) {
        return getAnimeResponse(resource, query, retryCount + 1);
      } else {
        throw new Error('Maximum retries exceeded');
      }
    }

    const anime = await response.json();
    return anime;
  } catch (error) {
    throw new Error('Failed to fetch anime data: ' + error.message);
  }
};
