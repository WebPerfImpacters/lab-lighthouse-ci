module.exports = {
  ci: {
    collect: {
      startServerCommand: "npm start",
      numberOfRuns: 1,
      url: [
        "http://localhost:3000/",
        "http://localhost:3000/about",
        "http://localhost:3000/blog",
        "http://localhost:3000/feature",
        "http://localhost:3000/product",
        "http://localhost:3000/testimonial",
      ],
    },
    upload: {
      target: "temporary-public-storage",
    },
  },
};
