migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mlsd76dendjjomp")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bpc0l2tb",
    "name": "concert_id",
    "type": "relation",
    "required": true,
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
  const collection = dao.findCollectionByNameOrId("mlsd76dendjjomp")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bpc0l2tb",
    "name": "concert_id",
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
})
