const request = require('supertest');
const app = require('../index');

const appUrl = '/tools';

describe('Post Endpoints', () => {
  it('should create a new post', async () => {
    const response = await request(app)
      .post(appUrl)
      .send({
        id: 1,
        title: 'Insomnia',
        description:
          "Debug APIs like a human, not a robot. Finally, a REST client you'll love",
        link: 'https://insomnia.rest/',
        tags: ['javascript', 'electron', 'api'],
      });
    expect(response.statusCode).toEqual(201);
    expect(response.body).toMatchObject({
      id: 1,
      title: 'Insomnia',
      description:
        "Debug APIs like a human, not a robot. Finally, a REST client you'll love",
      link: 'https://insomnia.rest/',
      tags: ['javascript', 'electron', 'api'],
    });
  });

  it('should be able to list the projects', async () => {
    await request(app)
      .post(appUrl)
      .send({
        id: 2,
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
      });

    const response = await request(app).get(appUrl);

    expect(response.statusCode).toEqual(200);
    expect(response.body).toEqual(
      expect.arrayContaining([
        {
          id: 2,
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
        },
        {
          description:
            "Debug APIs like a human, not a robot. Finally, a REST client you'll love",
          id: 1,
          link: 'https://insomnia.rest/',
          tags: ['javascript', 'electron', 'api'],
          title: 'Insomnia',
        },
      ]),
    );
  });

  it('Should be able to delete a tool', async () => {
    const response = await request(app).delete(`${appUrl}/1`);
    expect(response.statusCode).toEqual(204);
  });

  it('Should not be able to delete a tool', async () => {
    const response = await request(app).delete(`${appUrl}/10`);
    expect(response.statusCode).toEqual(404);
    expect(response.body).toMatchObject({ error: 'tool not found! ' });
  });

  it('Should be able to find tool by tag', async () => {
    const response = await request(app)
      .get('/tools?q=organization')
      .set({ searchtag: 'true' });

    expect(response.statusCode).toEqual(200);
    expect(response.body).toEqual(
      expect.arrayContaining([
        {
          description:
            'All in one tool to organize teams and ideas. Write, plan, collaborate, and get organized. ',
          id: 2,
          link: 'https://notion.so',
          tags: [
            'organization',
            'planning',
            'collaboration',
            'writing',
            'calendar',
          ],
          title: 'Notion',
        },
      ]),
    );
  });

  it('Should be able to find tool by title', async () => {
    const response = await request(app).get('/tools?q=Notion');

    expect(response.statusCode).toEqual(200);
    expect(response.body).toEqual([
      {
        description:
          'All in one tool to organize teams and ideas. Write, plan, collaborate, and get organized. ',
        id: 2,
        link: 'https://notion.so',
        tags: [
          'organization',
          'planning',
          'collaboration',
          'writing',
          'calendar',
        ],
        title: 'Notion',
      },
    ]);
  });
});
