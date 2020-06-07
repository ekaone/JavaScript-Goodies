const posts = {
  "mountain-view": {
    name: "Everest",
    height: 8848
  },
  "building-world": {
    name: "Burj Khalifa",
    height: 828
  }
};

const slugs = Object.entries(posts).map(([slug, { name, height }]) => {
  return slug;
});
