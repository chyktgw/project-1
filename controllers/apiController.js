function index(req, res) {
  res.json({
    message: "Food App",
    documentation_url: "https://github.com/chyktgw/project-1",
    base_url: "WIP",
    endpoints: [
      {method: "GET", path: "/api", description: "Describes available endpoints"}
    ]
  });
}

module.exports.index = index;
