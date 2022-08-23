const $ = document.querySelector.bind(document),
  $$ = document.querySelectorAll.bind(document)
const app = {
  handleEvents: function() {
    const cursor = $("#cursor")
    let mouseX = 0,
      mouseY = 0,
      ballX = 0,
      ballY = 0,
      speed = 0.2

    function animate() {
      let distX = mouseX - ballX
      let distY = mouseY - ballY

      ballX = ballX + distX * speed
      ballY = ballY + distY * speed

      cursor.style.left = ballX + "px"
      cursor.style.top = ballY + "px"

      requestAnimationFrame(animate)
    }
    animate()

document.addEventListener("mousemove", function(event){
  mouseX = event.pageX;
  mouseY = event.pageY;
})
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
