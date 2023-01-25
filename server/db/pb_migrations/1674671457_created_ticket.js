migrate((db) => {
  const collection = new Collection({
    "id": "mlsd76dendjjomp",
    "created": "2023-01-25 18:30:57.209Z",
    "updated": "2023-01-25 18:30:57.209Z",
    "name": "ticket",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "bpc0l2tb",
        "name": "conter_id",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "collectionId": "4oy83xoq3e65knn",
          "cascadeDelete": false
        }
      },
      {
        "system": false,
        "id": "jvqq2jyc",
        "name": "first_name",
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
        "id": "nqwrhtar",
        "name": "last_name",
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
        "id": "9hmceuv6",
        "name": "ticket_code",
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
        "id": "n0ritwap",
        "name": "email",
        "type": "email",
        "required": false,
        "unique": false,
        "options": {
          "exceptDomains": null,
          "onlyDomains": null
        }
      },
      {
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
  const collection = dao.findCollectionByNameOrId("mlsd76dendjjomp");

  return dao.deleteCollection(collection);
})
