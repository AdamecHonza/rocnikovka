migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4oy83xoq3e65knn")

  collection.name = "concerts"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4oy83xoq3e65knn")

  collection.name = "concert"

  return dao.saveCollection(collection)
})
