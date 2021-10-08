/**
 * @author Ben Siebert <ben@mctzock.de>
 * @copyright (c) 2018-2021 Ben Siebert. All rights reserved.
 */

process.env.URL_PUB_PATH = "./url-public";

const urlServer = require('./module/urlshorter');
const sampleApp = require('./module/sampleApp');

module.exports = {
    urlServer,
    sampleApp
}