migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4oy83xoq3e65knn")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gowwcuek",
    "name": "address_id",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "collectionId": "nn81hjzn8v3doal",
      "cascadeDelete": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4oy83xoq3e65knn")

  // remove
  collection.schema.removeField("gowwcuek")

  return dao.saveCollection(collection)
})
