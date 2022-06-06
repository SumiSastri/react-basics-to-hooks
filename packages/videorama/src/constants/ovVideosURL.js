const ovVideosURL = () => `https://orangevalleycaa.org/api/videos`;
export const fetchUser = () => fetch(ovVideosURL).then((data) => data.json());
