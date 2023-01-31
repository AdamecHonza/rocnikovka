migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("24iukcmj6ga9uop")

  collection.name = "ticket_owners"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("24iukcmj6ga9uop")

  collection.name = "ticket_owner"

  return dao.saveCollection(collection)
})
