module.exports = {
  ci: {
    collect: {
      startServerCommand: "npm start",
      numberOfRuns: 3,
      url: ["https://www.biznagafest.com/"],
    },
    assert: {
      assertions: {
        "categories:performance": ["warn", { minScore: 0.8 }],
        "categories:accessibility": ["warn", { minScore: 0.8 }],
        "categories:best-practices": ["warn", { minScore: 0.8 }],
        "categories:seo": ["warn", { minScore: 0.8 }],
        "categories.pwa": "off",
      },
    },
    upload: {
      target: "temporary-public-storage",
    },
  },
};
