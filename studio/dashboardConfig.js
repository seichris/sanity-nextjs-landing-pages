export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '61d044d80b7920403c85026c',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-5xmjzghr',
                  apiId: 'd5c2f93d-739c-457a-882f-3374a3490211'
                },
                {
                  buildHookId: '61d044d7bd5723bb8e2daf0a',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-dkeferuh',
                  apiId: '6a825aea-3071-49f9-92cd-9df8c539180c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/seichris/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-dkeferuh.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
