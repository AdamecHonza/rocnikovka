migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mlsd76dendjjomp")

  // remove
  collection.schema.removeField("nsxmxlv2")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "9hmceuv6",
    "name": "ticket_code",
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
  const collection = dao.findCollectionByNameOrId("mlsd76dendjjomp")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nsxmxlv2",
    "name": "available",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "9hmceuv6",
    "name": "ticket_code",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  return dao.saveCollection(collection)
})
