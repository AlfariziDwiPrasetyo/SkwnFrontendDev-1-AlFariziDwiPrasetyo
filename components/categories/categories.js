$(document).ready(function () {
  // Store original content of the items
  $(".category-item").each(function () {
    $(this).data("original-html", $(this).html());
  });

  const livingRoomDetails = `
                <h3>Living Room</h3>
                <p>Enjoy a great living room aesthetics with your family. Designs created for increased comfortability.</p>`;

  function resetToOriginal(element) {
    const originalHtml = element.data("original-html");
    const title = $(originalHtml).filter("h3").text();
    element.html(`<h3>${title}</h3>`).removeClass("active-custom");
  }

  $(".category-item").on("click", function () {
    const $this = $(this);

    if ($this.hasClass("active-custom")) {
      return;
    }

    // Reset all other items to their original state
    $(".category-item")
      .not(this)
      .each(function () {
        resetToOriginal($(this));
      });

    // Set the clicked item to active state
    const title = $this.find("h3").text();
    if (title === "Living Room") {
      $this.html(livingRoomDetails);
    } else {
      $this.html(`
                        <h3>${title}</h3>
                        <p>Details for ${title} will be displayed here. Update this content as needed.</p>
                    `);
    }

    $this.addClass("active-custom");
  });
});
