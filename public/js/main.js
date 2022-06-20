jQuery(() => {
    $(".nav-link [href]").each(function () {
        if (this.href == window.location.href) {
            $(this).addClass("active");
        }
    });
});

function tick() {
    const element = (
      <div>
        <h2>Сейчас {new Date().toLocaleTimeString()}.</h2>
      </div>
    );
    ReactDOM.render(element, document.getElementById('curTime'));
  }
  
setInterval(tick, 1000);