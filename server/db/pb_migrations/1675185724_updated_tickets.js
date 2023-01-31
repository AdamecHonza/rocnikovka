migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mlsd76dendjjomp")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nsxmxlv2",
    "name": "availabe",
    "type": "bool",
    "required": true,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mlsd76dendjjomp")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nsxmxlv2",
    "name": "availabe",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
})
