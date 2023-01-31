migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mlsd76dendjjomp")

  // remove
  collection.schema.removeField("9hmceuv6")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "3xdxtb8y",
    "name": "ticket_code",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": "[0-9 ]+"
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mlsd76dendjjomp")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "9hmceuv6",
    "name": "ticket_code",
    "type": "number",
    "required": false,
    "unique": true,
    "options": {
      "min": null,
      "max": null
    }
  }))

  // remove
  collection.schema.removeField("3xdxtb8y")

  return dao.saveCollection(collection)
})
