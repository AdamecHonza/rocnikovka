migrate((db) => {
  const collection = new Collection({
    "id": "4oy83xoq3e65knn",
    "created": "2023-01-25 18:23:52.136Z",
    "updated": "2023-01-25 18:23:52.136Z",
    "name": "concert",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "sdxvoa73",
        "name": "name",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "dvygxpff",
        "name": "band",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "htsr54b8",
        "name": "capacity",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      },
      {
        "system": false,
        "id": "czioo5iw",
        "name": "picture",
        "type": "file",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "maxSize": 5242880,
          "mimeTypes": [
            "image/apng",
            "image/avif",
            "image/gif",
            "image/jpeg",
            "image/png"
          ],
          "thumbs": []
        }
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("4oy83xoq3e65knn");

  return dao.deleteCollection(collection);
})
