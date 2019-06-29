// This is where project configuration and installed plugin options are located.
// Learn more: https://gridsome.org/docs/config

module.exports = {
  siteName: "Obinna Nnodim",
  siteUrl: `https://www.itsobinna.com`,
  titleTemplate: "%s",
  siteDescription: "Designer, Producer, Developer, Entrepreneur, Investor",
  plugins: [
    // TAILWIND CSS
    // {
    //   use: 'gridsome-plugin-tailwindcss',
    //   options: {
    //   tailwindConfig: './gridsome.config.js',
    //     purgeConfig: {},
    //     presetEnvConfig: {},
    //     shouldPurge: true,
    //     shouldImport: true,
    //     shouldTimeTravel: true,
    //   }
    // },
    // 
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "projects/**/*.md",
        typeName: "ProjectPost",
        resolveAbsolutePaths: true,
        remark: {
          externalLinksTarget: "_blank",
          externalLinksRel: ["nofollow", "noopener", "noreferrer"]
        }
      }
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "journal/**/*.md",
        typeName: "JournalPost",
        resolveAbsolutePaths: true,
        remark: {
          externalLinksTarget: "_blank",
          externalLinksRel: ["nofollow", "noopener", "noreferrer"]
        }
      }
    },
    // Google Analytics
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-118672950-1'
      }
    }
  ],
  transformers: {
    remark: {
      plugins: ["@gridsome/remark-prismjs"]
    }
  }
};
