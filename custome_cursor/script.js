var main = document.querySelector("#main")
var cursor = document.querySelector("#cursor")

main.addEventListener("mousemove", function(dets){
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y,
        ease: "back.inOut(1.7)",
        duration:1 //smooth move
    })
})