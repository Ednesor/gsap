// gsap.set(".imagen, .superman", {transformOrigin: "50% 50%"});
// gsap.to(".imagen, .superman", {duration: 20, rotation: 360});

// var myObject = {rotation: 0};

// gsap.to(myObject, {duration: 20, rotation: 360, onUpdate: function(){
//     console.log(Math.round(myObject.rotation * 100 / 360))
// }})

// gsap.from(".imagen", {duration: 1.5, opacity: 0, scale: 0.3, ease: "back"});
// gsap.from(".circle", {duration: 1, opacity: 0, y: 150, stagger: 0.25});
// gsap.from(".circle", {duration: 1, opacity: 0, y: () => Math.random() * 400 -200, stagger: 0.25})
// gsap.from(".circle", {duration: 1, opacity: 0, y: "random(-200, 200)", stagger: 0.25})

var tl = gsap.timeline();
tl.from(".imagen", {duration: 1.5, opacity: 0, scale: 0.3, ease: "back"});
tl.to(".imagen", {duration: 1, rotation: 360});
tl.from(".circle", {duration: 1, opacity: 0, y: 150, stagger: 0.25}, "+=1");