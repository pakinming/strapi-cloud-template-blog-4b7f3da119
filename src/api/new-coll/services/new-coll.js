'use strict';

/**
 * new-coll service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::new-coll.new-coll');
