function index(req, res) {
  res.json({
    message: "Food App",
    documentation_url: "https://github.com/chyktgw/project-1",
    base_url: "WIP",
    endpoints: [
      {method: "GET", path: "/api/", description: "List of restaurants"}
    ]
    [
      {method: "GET", path: "/api/restaraunt", description: "List of restaurants"}
    ]
    [
    {method: "GET", path: "/api/rewviews", description: "reviews"}
  ]

  });
}

module.exports.index = index;
