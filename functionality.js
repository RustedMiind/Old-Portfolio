// Projects data variable
var projectData = [
    {
        "itemName":"Crowdfund",
        "done":80,
        "imgUrl":"https://cdn.discordapp.com/attachments/689278978716205163/880463102817230858/Crowdfund.JPG",
        "openTab":"https://semiotic-karma-304519.web.app",
        "itemDescription":"That was a challenge on FrontendMentor.com so i accepted it and here it is"
    },{
        "itemName":"Calculator",
        "done":100,
        "imgUrl":"https://cdn.discordapp.com/attachments/689278978716205163/880828330729930822/unknown.png",
        "openTab":"https://calculator-rustedmind.web.app/",
        "itemDescription":"Simple Calculator fully built with vanilla JS , 3 hours taken to finish it."
    },{
        "itemName":"Fake Chat Messenger",
        "done":90,
        "imgUrl":"https://cdn.discordapp.com/attachments/689278978716205163/889493182088376400/unknown.png",
        "openTab":"https://fake-chat-rustedmind.web.app/",
        "itemDescription":"Simple Chat That you can include the user name and his image and use some commands to react with site."
    },{
        "itemName":"Rusteefy",
        "done":20,
        "imgUrl":"https://cdn.discordapp.com/attachments/689278978716205163/907759092238520420/unknown.png",
        "openTab":"https://rusteefy.web.app/",
        "itemDescription":"Music cloud app designed and coded by me \"Still not ready to work\""
    }
]

// Function that shows 1 project in the html site
let showProjects = (parentId, title, img, disc, linkURL) =>{
    document.getElementById(parentId).innerHTML+=`
    <div class="project-item">
        <div class="img"
        style="background-image: url(${img});"
        ></div>
        <div class="text-section">
            <div class="titles">
                <h3>${title}</h3>
                <h4>${disc}</h4>
            </div>
            <a href="${linkURL}" target="_blank">
            <button class="view-project">View Project</button>
            </a>
        </div>
    </div>
    `
}

// Function That Separate title to many <span> Chars

let SeparateTitle = (Id) => {
    let text = document.getElementById(Id).innerText;
    document.getElementById(Id).innerHTML="";
    for(let i = 0 ; i < text.length ; i++){
        document.getElementById(Id).innerHTML+=`<span class="span-char">${text[i]}</span>`;
    }
}

let titlePress = (className, classAdd, class2Add, transitionBetween, action2Delay ,btnId)=>{
    if(
        !document.getElementsByClassName(className)[0].classList.contains(class2Add)
        &&
        !document.getElementsByClassName(className)[(document.getElementsByClassName(className).length-1)].classList.contains(class2Add)
    ){
        // console.log(document.getElementsByClassName(className)[0].classList.contains(class2Add))
        for(let i = 0 ; i <= document.getElementsByClassName(className).length ; i++){
            //Add the first two classes
            setTimeout(function(){
                document.getElementsByClassName(className)[i]
                .classList.add(classAdd); 
                document.getElementsByClassName(className)[i]
                .classList.add(classAdd+"-perm")
            },i*transitionBetween)
            // remove the first class after time period
            setTimeout(function(){
                document.getElementsByClassName(className)[i]
                .classList.remove(classAdd)
            },(200+(transitionBetween*i)))
        }
        setTimeout(function(){
            for(let i = 0 ; i <= document.getElementsByClassName(className).length ; i++){
                setTimeout(function(){
                    document.getElementsByClassName(className)[i]
                    .classList.add(class2Add)
                },(transitionBetween/2)*i)}
                
            document.getElementById(btnId).innerText="Bro Chill !!!"
        },action2Delay)
    
    }

    else if(
        document.getElementsByClassName(className)[0].classList.contains(class2Add)
        &&
        document.getElementsByClassName(className)[(document.getElementsByClassName(className).length-1)].classList.contains(class2Add)
    ){
        for(let i = 0 ; i <= document.getElementsByClassName(className).length ; i++){
            document.getElementsByClassName(className)[i]
                .classList.remove(classAdd); 
            document.getElementsByClassName(className)[i]
                .classList.remove(classAdd+"-perm")
            document.getElementsByClassName(className)[i]
                .classList.remove(class2Add)
            document.getElementById(btnId).innerText="Light it up"
        }
    }
}

let onHover = (img,itemThatChangesBG) => {
    itemThatChangesBG.style.backgroundImage = `url(${img})`;
    console.log(`Event listener  did it`)
}
