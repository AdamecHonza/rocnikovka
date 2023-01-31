migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mlsd76dendjjomp")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ssruuesm",
    "name": "first_name",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dtvoagqz",
    "name": "last_name",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "3rr9fnp9",
    "name": "email",
    "type": "email",
    "required": false,
    "unique": false,
    "options": {
      "exceptDomains": null,
      "onlyDomains": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mlsd76dendjjomp")

  // remove
  collection.schema.removeField("ssruuesm")

  // remove
  collection.schema.removeField("dtvoagqz")

  // remove
  collection.schema.removeField("3rr9fnp9")

  return dao.saveCollection(collection)
})
