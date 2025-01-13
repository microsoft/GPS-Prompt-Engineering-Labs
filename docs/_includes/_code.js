function codeCopy() {
  $("pre code").each(function () {
    var button = $("<button>")
      .attr("type", "button")
      .attr("title", "Copy")
      .addClass("copy-button")
      .text("📋");
    $(this).parent().prepend(button);
  });

  $(".copy-button").click(function () {
    let btn = $(this);
    var code = $(this).siblings("code").text();
    var position = $(this).offset();

    navigator.clipboard.writeText(code).then(
      function () {
        btn.text("✅");
        setTimeout(() => btn.text("📋"), 1800);
      },
      function () {
        // failure
        alert("Failed to copy text");
      }
    );
  });
}

$(document).ready(function() {
  codeCopy();
});