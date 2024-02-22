module.exports = {
  ci: {
    collect: {
      startServerCommand: "npm start",
      numberOfRuns: 3,
      url: [
        "http://localhost:3000/",
        "http://localhost:3000/about",
        "http://localhost:3000/blog",
        "http://localhost:3000/feature",
        "http://localhost:3000/product",
        "http://localhost:3000/testimonial",
      ],
    },
    assert: {
      assertions: {
        "categories:performance": ["warn", { minScore: 0.99 }],
        "categories:accessibility": ["warn", { minScore: 0.99 }],
        "categories:best-practices": ["warn", { minScore: 0.99 }],
        "categories:seo": ["warn", { minScore: 0.99 }],
        "categories:pwa": "off",
      },
    },
    upload: {
      target: "temporary-public-storage",
    },
  },
};
