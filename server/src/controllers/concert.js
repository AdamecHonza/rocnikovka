const { db } = require("../helpers/dbConnector");
const { randomTicketSecret } = require("../helpers/random");

exports.getConcerts = async (req, res) => {
  const concertsGetResponse = await db((pb) => {
    return pb.collection("concerts").getList(1,50);
  }); 
  console.log(concertsGetResponse)

  if (concertsGetResponse?.status)
    return res
      .status(concertsGetResponse.status)
      .json(concertsGetResponse.data);

  for (const concert of (concertsGetResponse?.items || [])) {
    const addressData = await db((pb) => {
      return pb.collection("addresses").getOne(concert.address_id);
    });
    delete concert.address_id;
    concert.address = addressData;
  }
  res.status(200).json(concertsGetResponse);
};

exports.createConcert = async (req, res) => {
  const data = req.body;
  data.ticket_secret = randomTicketSecret();
  const concertCreateResponse = await db((pb) => {
    return pb.collection("concerts").create(data);
  });
  if (concertCreateResponse?.status)
    return res
      .status(concertCreateResponse.status)
      .json(concertCreateResponse.data);

  res.status(200).json({
    name: concertCreateResponse.name,
    interpret: concertCreateResponse.interpret,
    description: concertCreateResponse.description,
    datetime: concertCreateResponse.datetime,
    ticket_secret: concertCreateResponse.ticket_secret,
    picutre: concertCreateResponse.picture,
    capacity: concertCreateResponse.capacity,
  });
};

exports.deleteConcerts = async (req, res) => {
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
  const concertGetReponse = await db((pb) => {
    return pb.collection("concerts").getOne(id);
  });
  const addressGetResponse = await db((pb) => {
    return pb.collection("addresses").getOne(concertGetReponse.address_id);
  });
  delete concertGetReponse.address_id;
  concertGetReponse.address = addressGetResponse;
  res.status(200).json(concertGetReponse);
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

exports.getAvailableTickets = async (req, res) => {
  const { id } = req.params;
  const concertGetReponse = await db((pb) => {
    return pb.collection("concerts").getOne(id);
  });
  const ticketsGetReponse = await db((pb) => {
    return pb.collection("tickets").getList(1,1000,{filter: `concert_id = '${id}'`})
  })

  res.status(200).json({
    available: concertGetReponse.capacity - (ticketsGetReponse.totalItems | 0)
  });

}

exports.getBoughtTickets = async (req, res) => {
  const { id } = req.params;
  const concertGetReponse = await db((pb) => {
    return pb.collection("concerts").getOne(id);
  });
  const ticketsGetReponse = await db((pb) => {
    return pb.collection("tickets").getList(1,1000,{filter: `concert_id = '${id}'`})
  })
  const tickets = ticketsGetReponse.items.map((ticket) => ({
    first_name: ticket.first_name,
    last_name: ticket.last_name,
    email: ticket.email,
    ticket_code: `${concertGetReponse.ticket_secret} ${ticket.ticket_number}`
  }))

  res.status(200).json({
    concert: concertGetReponse,
    tickets: {
      length: ticketsGetReponse.totalItems,
      items: tickets
    }
  });
};
