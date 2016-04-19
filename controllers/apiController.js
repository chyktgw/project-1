function index(req, res) {
  res.json({
    message: "Food App",
    documentation_url: "https://github.com/chyktgw/project-1",
    base_url: "WIP",
    endpoints: [
      {method: "GET", path: "/api/", description: "Endpoints"},
      //list of restaurants
      {method: "GET", path: "/api/food", description: "list of restaurants"},
      //GET one specific Restaurant info to edit
      {method: "GET", path: "/api/food/foodId", description: "show one specific"},
      //PUT update restaurant info
      {method: "PUT", path: "/api/food/foodId", description: "update restaurant info"},
      //CREATE review
      {method: "POST", path: "/api/reviews", description: "post review"},
      //DELETE review
      {method: "DELETE", path: "/api/reviews/reviewsId", description: "delete reviews"}
    ]
  });
}

module.exports.index = index;
