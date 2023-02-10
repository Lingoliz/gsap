
let tl = gsap.timeline();

tl.fromTo('.logo',{x:-50,opacity:0},{x:0,opacity:1,duration:1.3})
tl.fromTo('nav ul',{x:50,opacity:0},{x:0,opacity:1,duration:1.3},'<') 
tl.fromTo('header .container h1',{x:-50,opacity:0},{x:0,opacity:1,duration:1.5},'<50%')

tl.fromTo('header .container p',{x:-50,opacity:0},{x:0,opacity:1,duration:1.5},'<50%')
tl.fromTo('header .container i',{y:-50,opacity:0},{y:0,opacity:1,stagger:{
    each:0.4
}},'<50%')


gsap.registerPlugin('scrollTrigger')

gsap.fromTo('header .container h1 ',{opacity:0,x:-100},{opacity:1 , x:0,duration:1.5,scrollTrigger:{
    trigger:'header .container h1',
    
    start:'top 80%',
    end:'bottom 25%',
    
    toggleActions:'play reverse play reset',
    
}})

gsap.fromTo('header .container p ',{opacity:0,x:-100},{opacity:1 , x:0,duration:1.5,scrollTrigger:{
    trigger:'header .container p',
    
    start:'top 80%',
    end:'top 10%',
    toggleActions:'play reverse play reset',
}})

gsap.fromTo('header .container li ',{opacity:0,x:-100},{opacity:1,stagger:0.3 , x:0,duration:1.5,scrollTrigger:{
    trigger:'header .container li',
    start:'top 80%',
    end:'top 10%',
    toggleActions:'play reverse play reverse',
}})


gsap.fromTo('.about h1',{opacity:0,x:-100},{opacity:1 , x:0,duration:1.5,scrollTrigger:{
    trigger:'.about h1',
    
    start:'top 90%',
    end:'top 10%',
    toggleActions:'play reverse play reverse',
}})

gsap.fromTo('.about p',{opacity:0,x:-100},{opacity:1 , x:0,duration:1.5,scrollTrigger:{
    trigger:'.about p',
    
    start:'top 90%',
    end:'top 10%',
    toggleActions:'play reverse play reverse',
}})


gsap.fromTo('.about img',{opacity:0,x:100},{opacity:1 , x:0,delay:0.5,duration:1.5,scrollTrigger:{
    trigger:'.about img',
    
    start:'top 90%',
    end:'top 10%',
    toggleActions:'play reverse play reverse',
}})

gsap.fromTo('.contact h1',{opacity:0,x:-100},{opacity:1 , x:0,duration:1.5,scrollTrigger:{
    trigger:'.contact h1',
    
    start:'top 90%',
    end:'top 10%',
    toggleActions:'play reverse play reverse',
}})

gsap.fromTo('.contact input',{opacity:0,x:-100},{stagger:0.5 ,opacity:1 , x:0,duration:1.5,scrollTrigger:{
    trigger:'.contact input',
    
    start:'top 90%',
    end:'top 10%',
    toggleActions:'play reverse play reverse',
}})
gsap.fromTo('.contact textarea',{opacity:0,x:-100},{stagger:0.5 ,opacity:1 , x:0,duration:1.5,scrollTrigger:{
    trigger:'.contact textarea',
    
    start:'top 90%',
    end:'top 10%',
    toggleActions:'play reverse play reverse',
}})

gsap.fromTo('.contact button',{opacity:0,x:100},{stagger:0.5 ,opacity:1 , x:0,duration:1.5,scrollTrigger:{
    trigger:'.contact button',
    
    start:'top 90%',
    end:'top 10%',
    toggleActions:'play reverse play reverse',
}})

