migrate((db) => {
  const collection = new Collection({
    "id": "24iukcmj6ga9uop",
    "created": "2023-01-31 17:41:50.102Z",
    "updated": "2023-01-31 17:41:50.102Z",
    "name": "ticket_owner",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "wpardj11",
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
        "id": "drpjgbqq",
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
        "id": "gmnmiz6x",
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
        "id": "qi7rrblx",
        "name": "ticket_id",
        "type": "relation",
        "required": false,
        "unique": true,
        "options": {
          "maxSelect": 1,
          "collectionId": "mlsd76dendjjomp",
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
  const collection = dao.findCollectionByNameOrId("24iukcmj6ga9uop");

  return dao.deleteCollection(collection);
})
