const initilizeAutoTyping =()=>{

    var options = {
        strings: ['Developer', 'YouTuber', 'Learner', 'FreeLancer'],
        typeSpeed: 100,
        backSpeed : 60,
        loop : true
    };
    
    var aa = new window.Typed('.typing-1', options);
    var aa = new window.Typed('.typing-2', options);

    var options = {
        strings: ['Javascript', 'HTML', 'CSS', 'React JS', 'Redux', 'Axios', 'Redux-Form', 'React Router', 'Material UI', 'Node JS', 'Express JS', 'CORS', 'User Auth', 'JWT'],
        typeSpeed: 100,
        backSpeed : 60,
        loop : true
    };
    
    var aa = new window.Typed('.typing-3', options);
      
}

export default initilizeAutoTyping;