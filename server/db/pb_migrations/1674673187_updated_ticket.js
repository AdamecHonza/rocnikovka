migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mlsd76dendjjomp")

  collection.name = "tickets"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mlsd76dendjjomp")

  collection.name = "ticket"

  return dao.saveCollection(collection)
})
