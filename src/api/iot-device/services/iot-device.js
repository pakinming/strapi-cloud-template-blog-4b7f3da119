'use strict';

/**
 * iot-device service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::iot-device.iot-device');
