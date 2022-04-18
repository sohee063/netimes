let news = [];
let menus = document.querySelectorAll(".menus button")
menus.forEach((menu)=>menu.addEventListener("click", (event)=>getNewsByTopic(event) ));


const getLatestNews = async() =>{

    let url = new URL(`https://api.newscatcherapi.com/v2/latest_headlines?countries=KR&topic=sport&page_size=10`)
    let header = new Headers({'x-api-key':'c0W4hUqTSQarVzUEC0GcrB80uYxPmI9jcExWZpNYuw4'})
    let response = await fetch(url,{headers:header})
    let data = await response.json()
    news = data.articles
    console.log(news)
    

    render()
}

const getNewsByTopic = async(event) =>{
    
    let topic = event.target.textContent.toLowerCase()
    let url = new URL(`https://api.newscatcherapi.com/v2/latest_headlines?countries=KR&topic=${topic}&page_size=10`)
    let header = new Headers({'x-api-key':'c0W4hUqTSQarVzUEC0GcrB80uYxPmI9jcExWZpNYuw4'})
    let response = await fetch(url,{headers:header})
    let data = await response.json();
    news=data.articles

    render()
}


const render=()=>{
    let newsHTML = '';
    newsHTML = news.map((item)=>{
        return `<div class="row news">
        <div class="col-lg-4">
          <img
            class="news-img-size"
            src="${item.media}"
          />
        </div>
        <div class="col-lg-8">
          <h2>${item.title}</h2>
          <p>${
              item.summary == null || item.summary==""
              ? "내용없음"
              :item.summary.length>200
              ?item.summary.substring(0,200)+"..."
              :item.summary
          }</p>
          <div>${item.rights}${item.published_date}</div>
        </div>
      </div>`
    }).join('')


    document.getElementById("news-board").innerHTML=newsHTML
}

getLatestNews()


const openNav = () => {
    document.getElementById("mySidenav").style.width = "200px";
  };
  
  const closeNav = () => {
    document.getElementById("mySidenav").style.width = "0";
  };

 