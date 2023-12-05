/**
 * Defines the text card router
 * 
 * @type {ROUTER}
 * The purpose of this component is to provide a route
 * for retrieving a text card entry.
 */

const textRouter = require("express").Router()
const controller = require("./textCard.controller")
const methodNotAllowed = require('../../errors/methodNotAllowed')

textRouter.route("/").get(controller.getTextCard).all(methodNotAllowed)

module.exports = textRouter