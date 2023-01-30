migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4oy83xoq3e65knn")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dvygxpff",
    "name": "interpret",
    "type": "text",
    "required": true,
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

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dvygxpff",
    "name": "band",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
