var next = document.getElementById("text");
var button = document.getElementById("button");
var news = 1;
window.onload = function() {
  window.setTimeout(function() {
    document.getElementById("bg").style.opacity = "0"; // hide it
    window.setTimeout(function() {
      document.getElementById("bg").style.display = "none"; // actually let us click
    }, 1000);
  }, 1700);
}
document.getElementById("next-button").onclick = function() {
  if (news == 1) {
    next.innerHTML =
      "<p>First of all, the front end is faster and a lot more stylish. It is so beautiful now. You can also see our SVG art that I make.</p>";
  }
  if (news == 2) {
    next.innerHTML =
      "<p>Next, I changed the code so that the site is completely, 100%, static! It now runs with 99%.9% uptime, with little bugs!</p>";
  }
  if (news == 3) {
    next.innerHTML =
      "<p>You can now download an HTML file and submit it. It might even get featured on the site, and then in the Gallery! Send us a message by submitting the form!</p>";
  }
  if (news == 4) {
    next.innerHTML =
      "<p>Learn Code now has a support email: support@learn-code.me! You can also feel free to chat with us. The forum also like chats, too.</p>";
  }
  if (news == 4) {
    next.innerHTML =
      "<p>Soon, I will release download instructions for complete, 100%, full offline access. Remember, we are completely free forever, and we run on donations 😉</p>";
  }
  if (news == 5) {
    next.innerHTML =
      "<p>Any accepted projects will be put in a gallery. We are currently rolling out more of our UI, so get ready! You can also feel free to take the source.</p>";
  document.getElementById('next-button').innerHTML = "Complete!";
  }
  if (news == 6) {
    document.getElementById('news').style.display = 'none';
  }
  news++;
};
