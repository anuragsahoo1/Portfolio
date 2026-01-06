const images = import.meta.glob("./assets/**/*", {
  eager: true,
  import: "default",
});

export const getImageUrl = (path) => {
  return images[`./assets/${path}`];
};