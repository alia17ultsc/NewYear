var snowflakeNum = 0;


function createSnowflake(){
    snowflakeNum+=1;
    var snowflake=document.createElement("div");   
     var snowflakeDiameter=Math.random() * 6 + 20;
    if(snowflakeNum%2==0)
    {
    snowflake.classList.add("snowflake");
    }
    else{
        snowflake.classList.add("snowfall");
        snowflakeDiameter=Math.random() * 6 + 3;
    }

    snowflake.style.width=`${snowflakeDiameter}px`;
    snowflake.style.height=`${snowflakeDiameter}px`;
    snowflake.style.left=`${Math.random()*99 + 1}vw`;
    var body = document.getElementsByTagName("body")[0];
    body.appendChild(snowflake);

    setTimeout(()=>{
        snowflake.remove();
    }, 7000 );


    snowflake.animate([
    {
        transform : `translateY(0)`
    },
    {
        transform : `translateY(100vh)`
    }
    ],
    {
        duration: 7000 +  Math.random()*3000,
        fill:"forwards", 
        easing:'linear'
    }
);

}


setInterval(createSnowflake, 300);

