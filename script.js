const $ = document.querySelector.bind(document),
  $$ = document.querySelectorAll.bind(document)
const app = {
  handleEvents: function() {
    document.onmousemove = (e) => {
      $("#cursor").style.top = e.clientY + "px"
      $("#cursor").style.left = e.clientX + "px"
    }
    const toggle = $('.toggle')
    const sidebar = $('.sidebar')
    toggle.onclick = () => {
        toggle.classList.toggle('active')
        sidebar.classList.toggle('active')
    }
  },
  start: function(){
    this.handleEvents()
  }
}
app.start()
