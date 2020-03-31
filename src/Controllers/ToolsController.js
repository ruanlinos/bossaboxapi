const Sequelize = require('sequelize');
const Tool = require('../models/Tool');

const { Op } = Sequelize;

module.exports = {
  async index(request, response) {
    const { tag } = request.query;
    try {
      if (!tag) {
        const tools = await Tool.findAll();
        return response.status(200).json(tools);
      }
      const tools = await Tool.findAll({
        where: { tags: { [Op.contains]: [tag] } },
      });
      return response.json(tools);
    } catch (error) {
      return response.status(404).json(error.message);
    }
  },

  async store(request, response) {
    const {
      title, description, link, tags,
    } = request.body;

    try {
      const tool = await Tool.create({
        title,
        description,
        link,
        tags,
      });
      return response.status(201).json(tool);
    } catch (error) {
      return response.status(400);
    }
  },

  async update(request, response) {
    const { id } = request.params;
    const data = request.body;

    try {
      const tool = await Tool.findByPk(id);
      if (!tool) {
        return response.status(404).json({ error: 'tool not found! ' });
      }
      await Tool.update(data, { where: { id } });

      return response.status(204).send();
    } catch (error) {
      return response.status(500);
    }
  },

  async delete(request, response) {
    const { id } = request.params;

    try {
      const tool = await Tool.findByPk(id);

      if (!tool) {
        return response.status(404).json({ error: 'tool not found! ' });
      }

      await Tool.destroy({ where: { id } });
      return response.status(204).send();
    } catch (error) {
      return response.status(500);
    }
  },
};
