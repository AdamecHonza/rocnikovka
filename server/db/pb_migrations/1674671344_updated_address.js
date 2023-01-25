migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nn81hjzn8v3doal")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fbhjbiry",
    "name": "field",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "collectionId": "4oy83xoq3e65knn",
      "cascadeDelete": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nn81hjzn8v3doal")

  // remove
  collection.schema.removeField("fbhjbiry")

  return dao.saveCollection(collection)
})
