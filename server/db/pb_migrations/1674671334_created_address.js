migrate((db) => {
  const collection = new Collection({
    "id": "nn81hjzn8v3doal",
    "created": "2023-01-25 18:28:54.448Z",
    "updated": "2023-01-25 18:28:54.448Z",
    "name": "address",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "dsnha5zp",
        "name": "city",
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
        "id": "2qp7diza",
        "name": "state",
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
        "id": "zal8acyl",
        "name": "postal_code",
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
        "id": "77mqekcs",
        "name": "street",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
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
  const collection = dao.findCollectionByNameOrId("nn81hjzn8v3doal");

  return dao.deleteCollection(collection);
})
