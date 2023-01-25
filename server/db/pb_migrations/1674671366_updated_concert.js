migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4oy83xoq3e65knn")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "crzk91fz",
    "name": "datetime",
    "type": "date",
    "required": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4oy83xoq3e65knn")

  // remove
  collection.schema.removeField("crzk91fz")

  return dao.saveCollection(collection)
})
