migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4oy83xoq3e65knn")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jwlyhw4j",
    "name": "description",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4oy83xoq3e65knn")

  // remove
  collection.schema.removeField("jwlyhw4j")

  return dao.saveCollection(collection)
})
