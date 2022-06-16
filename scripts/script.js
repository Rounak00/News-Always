axios.get("https://newsapi.org/v2/everything?q=tesla&from=2022-05-16&sortBy=publishedAt&apiKey=8f9def69ea364e31972df34d0a3921ec")
.then(function(response){
    createListItem(response);
})
.catch(function(error){
    alert(`Error - ${error} `);
});


//create list item
//add to dom

function createListItem(response){
  response.data.articles.forEach(element => {
    let vi=document.createElement("li");
    vi.setAttribute("class", "list-group-item");
    vi.innerHTML= element.author;
    document.querySelector(".list-group").append(vi);
  });
}