const date = new Date();
module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert('tools', [
    {
      id: 1,
      title: 'Notion',
      link: 'https://notion.so',
      description:
          'All in one tool to organize teams and ideas. Write, plan, collaborate, and get organized. ',
      tags: [
        'organization',
        'planning',
        'collaboration',
        'writing',
        'calendar',
      ],
      created_at: date,
      updated_at: date,
    },
    {
      id: 2,
      title: 'json-server',
      link: 'https://github.com/typicode/json-server',
      description:
          'Fake REST API based on a json schema. Useful for mocking and creating APIs for front-end devs to consume in coding challenges.',
      tags: ['api', 'json', 'schema', 'node', 'github', 'rest'],
      created_at: date,
      updated_at: date,
    },
    {
      id: 3,
      title: 'fastify',
      link: 'https://www.fastify.io/',
      description:
          'Extremely fast and simple, low-overhead web framework for NodeJS. Supports HTTP2.',
      tags: ['web', 'framework', 'node', 'http2', 'https', 'localhost'],
      created_at: date,
      updated_at: date,
    },
  ]),

  down: (queryInterface) => queryInterface.bulkDelete('tools', null, {}),
};
