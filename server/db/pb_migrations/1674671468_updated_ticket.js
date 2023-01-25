migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mlsd76dendjjomp")

  // remove
  collection.schema.removeField("q8hxsa31")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mlsd76dendjjomp")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "q8hxsa31",
    "name": "buyer_address_id",
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
})
