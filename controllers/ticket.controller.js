const getTickets = (req, res) => {
  res.json({
    message: "Get Tickets",
    search: req.query.search,
    page: req.query.page,
  });
};

const getTicketsDetail = (req, res) => {
  const id = Number(req.params.id);
  if (Number.isNaN(id)) {
    return res.status(400).json({
      message: "ID must be a number",
    });
  }

  res.json({
    message: "Get Ticket detail",
    id: id,
  });
};

const createTickets = (req, res) => {
  const title = req.body.title;
  const description = req.body.description;

  res.status(201).json({
    message: "Create ticket!",
    title: title,
    description: description,
  });
};

module.exports = {
    getTickets,
    getTicketsDetail,
    createTickets
}