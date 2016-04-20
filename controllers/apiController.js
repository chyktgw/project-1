function index(req, res) {
  res.json({
    message: "Food App",
    documentation_url: "https://github.com/chyktgw/project-1",
    base_url: "WIP",
    endpoints: [
      {method: "GET", path: "/api/", description: "Endpoints"},
      //list of restaurants
      {method: "GET", path: "/api/restaurant", description: "list of restaurants"},
      //GET one specific Restaurant info to edit
      {method: "GET", path: "/api/restaurant/:id", description: "show one specific"},
      //CREATE restaurant
      {method: "POST", path: "/api/restaurant/", description: "show one specific"},
      //PUT update restaurant info
      {method: "PUT", path: "/api/restaurant/:id", description: "update restaurant info"},
      //CREATE review
      {method: "POST", path: "/api/restaurant/:id/reviews", description: "post review"},
      //DELETE review
      {method: "DELETE", path: "/api/reviews/:id", description: "delete reviews"}
    ]
  });
}

module.exports.index = index;
