migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nn81hjzn8v3doal")

  collection.name = "addresses"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nn81hjzn8v3doal")

  collection.name = "address"

  return dao.saveCollection(collection)
})
