export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d12149643f95707547eb5d2',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-odrdkmsd',
                  apiId: 'c7a955bf-66ab-48f2-9bf8-8734623f41af'
                },
                {
                  buildHookId: '5d1214961c8cc0eb460ac0bc',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-acvh4yey',
                  apiId: 'b4022439-15ea-4292-a1db-c3628308300b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/muffelburger/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-acvh4yey.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
