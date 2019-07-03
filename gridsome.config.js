// This is where project configuration and installed plugin options are located.
// Learn more: https://gridsome.org/docs/config

module.exports = {
  siteName: "Obinna Nnodim",
  siteUrl: `https://www.itsobinna.com`,
  titleTemplate: "%s",
  siteDescription: "Designer, Producer, Developer, Entrepreneur, Investor",
  plugins: [
    // AIRTABLE
    {
          use: '~/src/sources/products',
          options: {
            apiKey: 'keycmtF508Q0vsTio',
            base: 'appbTkVyyIJeeOrg8',
          },
    },
    // DATA FOR: `/projects`
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
    // DATA FOR: `/services`
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "services/**/*.md",
        typeName: "ServicesPost",
        resolveAbsolutePaths: true,
        remark: {
          externalLinksTarget: "_blank",
          externalLinksRel: ["nofollow", "noopener", "noreferrer"]
        }
      }
    },
    // DATA FOR: `/journal`
    // TODO: change this to gems
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
