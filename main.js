let news = []

const getLatestNews = async() =>{
    let url = new URL(`https://api.newscatcherapi.com/v2/latest_headlines?countries=KR&topic=sport&page_size=10`)
    let header = new Headers({'x-api-key':'c0W4hUqTSQarVzUEC0GcrB80uYxPmI9jcExWZpNYuw4'})

    let response = await fetch(url,{headers:header})
    let data = await response.json()
    news = data.articles
    console.log(news)



}

getLatestNews()

const openNav = () => {
    document.getElementById("mySidenav").style.width = "200px";
  };
  
  const closeNav = () => {
    document.getElementById("mySidenav").style.width = "0";
  };