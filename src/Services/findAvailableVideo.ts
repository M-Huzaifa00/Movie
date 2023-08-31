function findAvailableVideo(videoKeys: string[]) {
  const promises = videoKeys.map((videoKey) => {
    const videoUrl = `https://www.youtube.com/embed/${videoKey}`;

    return new Promise((resolve) => {
      const iframe = document.createElement("iframe");
      iframe.src = videoUrl;
      iframe.style.display = "none";

      iframe.onload = () => {
        resolve(videoKey);
      };

      iframe.onerror = () => {
        resolve(null);
      };

      document.body.appendChild(iframe);
    });
  });

  return Promise.race(promises);
}

export const getVideoSource = (videoKeys: string[]) => {
  findAvailableVideo(videoKeys)
    .then((availableVideoKey) => {
      if (availableVideoKey) {
        const videoUrl = `https://www.youtube.com/embed/${availableVideoKey}`;
        return videoUrl;
      } else {
        return null;
      }
    })
    .catch((error) => {
      throw error;
    });
};
