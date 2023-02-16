let api_key="AIzaSyDoVPxD9uKAwLZVK2xgRk_pKC6f9757Q4w";

// async function getData(){

// }
let appenddata=document.getElementById('appenddata');
let getData = async()=>{
    try{
        let query=document.getElementById("query").value;
        let res=await fetch(`https://youtube.googleapis.com/youtube/v3/search?q=${query}&key=${api_key}&part=snippet&maxResults=30`)
        let {items}=await res.json()
        let array_of_video=items;
        console.log(array_of_video);
        appendvide(array_of_video)

    }catch(err){
        console.log(err)
    }
}


let appendvide = (data) => {
    appenddata.innerText=null;
    data.forEach(({snippet:{title},id:{videoId},snippet:{thumbnails:{high:{url}}}}) => {
        
        console.log(title,videoId)
        let div=document.createElement('div')
        let ifeame=document.createElement('iframe')
        ifeame.src=`https://www.youtube.com/embed/${videoId}`;
        ifeame.width='100%'
        ifeame.height="100%"
        ifeame.allow='fullscreen'
        let titl=document.createElement('h4')
        titl.innerText=title
        let img=document.createElement('iframe')
        img.src=url;
        img.width='100%'
        img.height="100%"
        div.append(img,titl)
        appenddata.append(div)
        let data={
            snippet:title,
            videoId:videoId
        }
        div.onclick=()=>{
            localStorage.setItem("click_video",JSON.stringify(data))

        }
        
    });
}