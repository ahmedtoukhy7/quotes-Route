

var qoutesContent = [{content:"“Be yourself; everyone else is already taken.”", name :"― Oscar Wilde",img:"1.jpg"},
{content:"“So many books, so little time.”",name:"― Frank Zappa",img:"2.jpg"},
{content:"“It is better to be hated for what you are than to be loved for what you are not.”",name:"― Andre Gide, Autumn Leaves",img:"3.jpg"},
{content:"“The person, be it gentleman or lady, who has not pleasure in a good novel, must be intolerably stupid.”",name:"― Jane Austen, Northanger Abbey",img:"4.jpg"},
{content:"“It is our choices, Harry, that show what we truly are, far more than our abilities.”",name:"― J.K. Rowling, Harry Potter and the Chamber of Secrets",img:"5.jpg"},
{content:"“There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.”",name:"― Albert Einstein",img:"6.jpg"},
{content:"“Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.”",name:"― H. Jackson Brown Jr., P.S. I Love You",img:"7.jpg"},
{content:"“Fairy tales are more than true: not because they tell us that dragons exist, but because they tell us that dragons can be beaten.”",name:"― Neil Gaiman, Coraline",img:"8.jpg"},
{content:"“A room without books is like a body without a soul.”",name:"― Marcus Tullius Cicero",img:"9.jpg"},
{content:"“You only live once, but if you do it right, once is enough.”",name:"― Mae West",img:"10.jpg"},
{content:"“We are all in the gutter, but some of us are looking at the stars.”",name:"― Oscar Wilde, Lady Windermere's Fan",img:"1.jpg"},
{content:"“Life is what happens to us while we are making other plans.”",name:"― Allen Saunders",img:"12.jpg"},
{content:"“Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present.”",name:"― Bill Keane",img:"13.jpg"},
{content:"“It is not a lack of love, but a lack of friendship that makes unhappy marriages.”",name:"― Friedrich Nietzsche",img:"14.jpg"},
{content:"“The opposite of love is not hate, it's indifference. The opposite of art is not ugliness, it's indifference. The opposite of faith is not heresy, it's indifference. And the opposite of life is not death, it's indifference.”",name:"― Elie Wiesel",img:"14.jpg"},
{content:"“If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.”",name:"― J.K. Rowling, Harry Potter and the Goblet of Fire",img:"5.jpg"}]



var click =document.getElementById("click")
var Content =document.getElementById("content")
var Name =document.getElementById("name")
var image =document.getElementById("image")

var arr=[]
function newquote (){
    // var res = qoutesContent[Math.floor(Math.random() * qoutesContent.length)]
    // var newrandom=Math.floor(Math.random()*5)

    // Content.innerHTML=res.content
    // Name.innerHTML=res.name

    var random =Math.floor(Math.random() * qoutesContent.length)
    var newRandom=Math.floor(Math.random() * 5)
    //console.log(newRandom)

    arr.push(random)

    if(arr[arr.length - 1] === arr[arr.length - 2] && random > 8){
       

        random-=newRandom
        console.log(random)
    }
    else if(arr[arr.length - 1] === arr[arr.length - 2] && random <= 8){
        random+=newRandom
        console.log(random)
    }
    Content.innerHTML=qoutesContent[random].content
     Name.innerHTML=qoutesContent[random].name
     image.src=`images/${qoutesContent[random].img}`
     console.log(qoutesContent[random].img)
     console.log(image.src)
}


