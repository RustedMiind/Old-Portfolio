// Add Projects to the HTML page
// parentId, title, img, disc, linkURL
for(let i = 0 ; i < projectData.length ; i++){
    showProjects("projects-section",
    projectData[i].itemName,
    projectData[i].imgUrl,
    projectData[i].itemDescription,
    projectData[i].openTab)
};

// Manage Dynamic Title

// separate title chars
SeparateTitle('main-title');

// Title effects on pressing button
// (className, classAdd, class2Add, transitionBetween, action2Delay , btnId)
document.getElementById('light-it-up').addEventListener('click',function(){
    
titlePress('span-char' , 'change-size' , 'change-color' , 150 , 1500 , "light-it-up")
})

// Hover effect for each project
for(let i = 0 ; i < document.getElementsByClassName("project-item").length ; i++){
    document.getElementsByClassName("project-item")[i].addEventListener('mouseover',function(){
        onHover(projectData[i].imgUrl,document.getElementById('background'))
        document.getElementById('background').classList.add('background-hover')
    })
    document.getElementsByClassName("project-item")[i].addEventListener('mouseout',function(){
        onHover('/img/4.jpg',document.getElementById('background'))
        document.getElementById('background').classList.remove('background-hover')
    })
    console.log(`Event Listener${i} is ready`)
}
