const { db } = require("../helpers/dbConnector");

// const { id } = req.params;
// const concertData = await db((pb) => {
//   return pb.collection("concerts").getOne(id);
// });
// const adressData = await db((pb) => {
//   return pb.collection("addresses").getOne(concertData.address_id);
// });
// delete concertData.address_id
// concertData.address = adressData
// res.status(200).json(concertData);

exports.getConcerts = async (req, res) => {
  const concertsData = await db((pb) => {
    return pb.collection("concerts").getList();
  });
  for (const concert of concertsData?.items) {
    const addressData = await db((pb) => {
      return pb.collection("addresses").getOne(concert.address_id);
    });
    delete concert.address_id;
    concert.address = addressData;
  }
  res.status(200).json(concertsData);
};

exports.createConcert = async (req, res) => {
  const data = req.body;
  const result = await db((pb) => {
    return pb.collection("concerts").create(data);
  });
  res.status(200).json(result);
};

exports.deleteConcerts = async (req, res) => {
  const { id } = req.body;
  const allConcertsData = await db((pb) => {
    return pb.collection("concerts").getList();
  });
  const dbResponse = await db((pb) => {
    const results = [];
    allConcertsData.items.forEach((concert) => {
      results.push(pb.collection("concerts").delete(concert.id));
    });
    return results;
  });
  res.status(200).json(dbResponse);
};

exports.getConcertById = async (req, res) => {
  const { id } = req.params;
  const concertData = await db((pb) => {
    return pb.collection("concerts").getOne(id);
  });
  const adressData = await db((pb) => {
    return pb.collection("addresses").getOne(concertData.address_id);
  });
  delete concertData.address_id;
  concertData.address = adressData;
  res.status(200).json(concertData);
};

exports.getConcertSearch = async (req, res) => {};

exports.updateConcert = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  const result = await db((pb) => {
    return pb.collection("concerts").update(id, data);
  });
  res.status(200).json(result);
};

exports.deleteConcert = async (req, res) => {
  const { id } = req.params;
  const result = await db((pb) => {
    return pb.collection("concerts").delete(id);
  });
  res.status(200).json(result);
};
