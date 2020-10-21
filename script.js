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
      "<p>First of all, the front end is faster and a lot more stylish.</p>";
  }
  if (news == 2) {
    next.innerHTML =
      "<p>Next, I changed the code so that the site is completely, 100%, static!</p>";
  }
  if (news == 3) {
    next.innerHTML =
      "<p>You can now download an HTML file and submit it. It might even get featured on the site!</p>";
  }
  if (news == 4) {
    next.innerHTML =
      "<p>We now have a support email: support@learn-code.me!</p>";
  }
  if (news == 5) {
    next.innerHTML =
      "<p>Any accepted projects will be put in a gallery. We are currently rolling out more of our UI, so get ready!</p>";
  }
  if (news == 6) {
    next.innerHTML =
      "<p>Finally, give me your <a href='https://support.glitch.com/t/the-blockly-html-code-editor-learn-code-domain-released/25935?u=alt' target='_blank'>feedback</a>!</p>";
    document.getElementById('next-button').innerHTML = "Complete!"
  }
  if (news == 7) {
    document.getElementById('news').style.display = 'none';
  }
  news++;
};
