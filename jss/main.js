const articles = [
    {
       "title": "Kdo jsme",
       "text": "orem ipsum dolor sit, amet consectetur adipisicing elit. Odio harum fugit assumenda dolore deleniti eos laborum ducimus suscipit delectus vel quo repellat optio provident atque impedit, quisquam, quos magni qui.Tempora doloribus nam similique, suscipit voluptate earum aspernatur quasi, ducimus, blanditiis eligendi inventore sit expedita nisi dolorem illo asperiores voluptatem commodi nesciunt molestias eius impedit? Quas dolorum cupiditate ad odio.Animi dolores incidunt iure consequuntur iusto officiis eum. Rerum, aperiam cupiditate fuga saepe sunt qui soluta temporibus nul"
 
    },
    {
       "title": "Jak to funguje?",
       "text": "San Ignacio Miní byl jednou z mnoha misí založených v roce 1610..."
    },
    {
       "title": "Kontakt ",
       "text": "Hřbitov La Recoleta je hřbitov v Buenos Aires. Obsahuje hroby slavných lidí..."
    }
 ];
 
 $("#navBox").linkUnderlineAnim({
      "speed": 250,    
      "color":"#FFFFFF",        
      "thickness": 2,            
      "distance": 20         
    });
    

$(document).ready(function () {
 articles.forEach((articleTitle) => {
    $("#navBox").append(`<li><a>${articleTitle.title}</a></li>`);
 });

 function fillArticleCard(articleName) {
    let article = articles.find(item => { return item.title === articleName });
    $("#textBox").text(article.text);
 }

 $("#navBox li:first").addClass('active');
 fillArticleCard(articles[0].title);

 $("#navBox li").on("click", function () {
    $("#navBox li").removeClass("active");
    $(this).addClass("active");
    let article = $(this).text();
    $("#textBox").fadeOut("fast", function () {
       fillArticleCard(article);
    });
    $("#textBox").fadeIn("fast");
 });
});
