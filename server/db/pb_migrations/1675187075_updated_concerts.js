migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4oy83xoq3e65knn")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mihxxzsw",
    "name": "ticket_secret",
    "type": "number",
    "required": false,
    "unique": true,
    "options": {
      "min": null,
      "max": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4oy83xoq3e65knn")

  // remove
  collection.schema.removeField("mihxxzsw")

  return dao.saveCollection(collection)
})
