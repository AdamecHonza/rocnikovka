migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mlsd76dendjjomp")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "3xdxtb8y",
    "name": "ticket_number",
    "type": "text",
    "required": false,
    "unique": true,
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

  // update
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
})
