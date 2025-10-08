function loadComponent(containerId, componentPath) {
  $("#" + containerId).load(`${componentPath}.html`, function () {
    $("<link>")
      .attr({
        rel: "stylesheet",
        type: "text/css",
        href: `${componentPath}.css`,
      })
      .appendTo("head");

    $.getScript(`${componentPath}.js`);
  });
}

loadComponent("navbar-container", "components/navbar/navbar");
loadComponent("jumbotron-container", "components/jumbotron/jumbotron");
loadComponent(
  "why-choose-us-container",
  "components/why-choose-us/why-choose-us"
);
loadComponent("brands-container", "components/brands/brands");
loadComponent("categories-container", "components/categories/categories");
loadComponent("products-container", "components/products/products");
loadComponent("deals-container", "components/deals/deals");
loadComponent("footer-container", "components/footer/footer");
