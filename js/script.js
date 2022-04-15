$(document).ready(function() {

    //sets the comments section to hidden
    $(".artIcons:eq(0)").after($("<br>"),$("<div>").attr({class:"comment-1-disp"}).html("<h3>Comments<h3>").hide());
    $(".artIcons:eq(1)").after($("<br>"),$("<div>").attr({class:"comment-2-disp"}).html("<h3>Comments<h3>").hide());
    $(".artIcons:eq(2)").after($("<br>"),$("<div>").attr({class:"comment-3-disp"}).html("<h3>Comments<h3>").hide());
    $(".artIcons:eq(3)").after($("<br>"),$("<div>").attr({class:"comment-4-disp"}).html("<h3>Comments<h3>").hide());

    // animates the top banner headings
    $(".story-band a").mouseover(function(){
        $(this).animate({fontSize:"2em"}, "slow")
    });
    $(".story-band a").mouseleave(function(){
        $(this).animate({fontSize:"0em"}, "slow")
    });

    //Home page article visiblity controls
    $(".toggle-1").click(function(){
       $("#article-1").slideToggle();
       $(this).find($("i")).toggleClass("bi bi-chevron-compact-up").toggleClass("bi bi-chevron-compact-down");
    });  

    $("[href='#article-1']").click(function(){
        $("#article-1 ").show();
        $(".toggle-1").find($("i")).toggleClass("bi bi-chevron-compact-up").toggleClass("bi bi-chevron-compact-down");
    });

    $(".toggle-2").click(function(){
        $("#article-2").slideToggle();
        $(this).find($("i")).toggleClass("bi bi-chevron-compact-up").toggleClass("bi bi-chevron-compact-down");
    });

    $("[href='#article-2']").click(function(){
        $("#article-2 ").show();
        $(".toggle-2").find($("i")).toggleClass("bi bi-chevron-compact-up").toggleClass("bi bi-chevron-compact-down");
    });
    
    $(".toggle-3").click(function(){
        $("#article-3 ").slideToggle();
        $(this).find($("i")).toggleClass("bi bi-chevron-compact-up").toggleClass("bi bi-chevron-compact-down");
    });
    
    $("[href='#article-3']").click(function(){
        $("#article-3 ").show();
        $(".toggle-3").find($("i")).toggleClass("bi bi-chevron-compact-up").toggleClass("bi bi-chevron-compact-down");
    });

    $(".toggle-4").click(function(){
        $("#article-4 ").slideToggle();
        $(this).find($("i")).toggleClass("bi bi-chevron-compact-up").toggleClass("bi bi-chevron-compact-down");
    });
    
    $("[href='#article-4']").click(function(){
        $("#article-4 ").show();
        $(".toggle-4").find($("i")).toggleClass("bi bi-chevron-compact-up").toggleClass("bi bi-chevron-compact-down");
    });

    //home page like, comment and save controls
    $(".bi-hand-thumbs-up").click(function(){
        $(this).toggleClass("bi bi-hand-thumbs-up").toggleClass("bi bi-hand-thumbs-up-fill");
    });

    //sets the titles of the buttons
    $(".like").attr("title", "Like");
    $(".comment").attr("title", "Comment");
    $(".save").attr("title", "Save");

    //comment form 1
    $(".comment-1").parent().after($("<br>"),$("<div>").attr({class:"comment-1-form"}));
    $(".comment-1-form").append($("<textarea>").attr({class:"comment-1-input form-control", placeholder:"Add comment", rows:"3"}));
    $(".comment-1-form").append($("<button>").attr({class:"btn btn-secondary comment-1-btn", type:"button"}).html("Add"));
    $(".comment-1-form").hide();

    $(".comment-1").click(function(){
        $(".comment-1-form").slideToggle();     
    });

    //comment form 2
    $('.comment-2').parent().after($("<br>"),$("<div>").attr({class:"comment-2-form"}));
    $(".comment-2-form").append($("<textarea>").attr({class:"comment-2-input form-control", placeholder:"Add comment", rows:"3"}));
    $(".comment-2-form").append($("<button>").attr({class:"btn btn-secondary comment-2-btn", type:"button"}).html("Add"));
    $(".comment-2-form").hide();

    $(".comment-2").click(function(){
            $(".comment-2-form").slideToggle();      
    });

    //comment form 3
    $('.comment-3').parent().after($("<br>"),$("<div>").attr({class:"comment-3-form"}));
    $(".comment-3-form").append($("<textarea>").attr({class:"comment-3-input form-control", placeholder:"Add comment", rows:"3"}));
    $(".comment-3-form").append($("<button>").attr({class:"btn btn-secondary comment-3-btn", type:"button"}).html("Add"));
    $(".comment-3-form").hide();

    $(".comment-3").click(function(){
            $(".comment-3-form").slideToggle();      
    });

    //comment form 4
    $(".comment-4").parent().after($("<br>"),$("<div>").attr({class:"comment-4-form"}));
    $(".comment-4-form").append($("<textarea>").attr({class:"comment-4-input form-control", placeholder:"Add comment", rows:"3"}));
    $(".comment-4-form").append($("<button>").attr({class:" btn btn-secondary comment-4-btn", type:"button"}).html("Add"));
    $(".comment-4-form").hide();
    
    $(".comment-4").click(function(){
            $(".comment-4-form").slideToggle();       
    });

    // checks local storage for stored values if none they are created, else populate page with data from localstorage
    saveArt = [];
    pgLikes = [];
    artComments = [];

    if (localStorage.getItem("history") === null) {
        localStorage.setItem("saveArt", JSON.stringify(saveArt));
        localStorage.setItem("likes",JSON.stringify(pgLikes));
        localStorage.setItem("comments",JSON.stringify(artComments));
        localStorage.setItem("history", true);
    } else {
        pgLikes = JSON.parse(localStorage.getItem("likes"));
        artComments = JSON.parse(localStorage.getItem("comments"));
        
        //parsing like button values back onto page
        if(pgLikes.find(o => o.btn === 'like-2')){
            let index = pgLikes.findIndex(x => x.btn ==="like-1");
            let classVal = pgLikes[index].status;
            $("#like-1 i").attr("class", classVal);
        }

        if(pgLikes.find(o => o.btn === 'like-2')){
            let index2 = pgLikes.findIndex(x => x.btn ==="like-2");
            let classVal2 = pgLikes[index2].status;
            $("#like-2 i").attr("class", classVal2);
        }

        if(pgLikes.find(o => o.btn === 'like-3')){
            let index3 = pgLikes.findIndex(x => x.btn ==="like-3");
            let classVal3 = pgLikes[index3].status;
            $("#like-3 i").attr("class", classVal3);
        }

        if(pgLikes.find(o => o.btn === 'like-4')){
            let index4 = pgLikes.findIndex(x => x.btn ==="like-4");
            let classVal4 = pgLikes[index4].status;
            $("#like-4 i").attr("class", classVal4);
        }
        
        // parsing the comments from local storage back into page
        artComments.forEach(function(obj) {
            if(obj.article == 'comment-1-disp'){
               $(".comment-1-disp").show();
               $(".comment-1-disp").append($("<p>").attr({class:"comm-1"}).html(obj.comment));
               $(".comment-1-disp").append($("<p>").attr({class:"comm-1-date"}).html(  "-"+obj.date))   
            }
            if(obj.article == 'comment-2-disp'){
                $(".comment-2-disp").show();
                $(".comment-2-disp").append($("<p>").attr({class:"comm-1"}).html(obj.comment));
                $(".comment-2-disp").append($("<p>").attr({class:"comm-1-date"}).html(  "-"+obj.date))   
             }
             if(obj.article == 'comment-3-disp'){
                $(".comment-3-disp").show();
                $(".comment-3-disp").append($("<p>").attr({class:"comm-1"}).html(obj.comment));
                $(".comment-3-disp").append($("<p>").attr({class:"comm-1-date"}).html(  "-"+obj.date))   
             } 
             if(obj.article == 'comment-4-disp'){
                $(".comment-4-disp").show();
                $(".comment-4-disp").append($("<p>").attr({class:"comm-1"}).html(obj.comment));
                $(".comment-4-disp").append($("<p>").attr({class:"comm-1-date"}).html(  "-"+obj.date))   
             } 
        });

    }

    // Like button object constructor
    function Like(btn,status){
        this.status = status,
        this.btn = btn
    }

    // like button event functions
    // article 1
    $(".like-1").click(function(){
        pgLikes = JSON.parse(localStorage.getItem("likes")); 
        if (pgLikes.find(o => o.btn === 'like-1')){
            index = pgLikes.findIndex(obj => obj.btn == "like-1");
            pgLikes[index].status = $(this).find("i").attr('class')
            localStorage.setItem("likes",JSON.stringify(pgLikes));
        }
        else{
            let newLike = new Like(
                $(this).attr("id"),
                $(this).find("i").attr('class')
            );
            pgLikes.push(newLike);
            localStorage.setItem("likes",JSON.stringify(pgLikes));
        } 
    });
    
    // article 2
    $(".like-2").click(function(){
        pgLikes = JSON.parse(localStorage.getItem("likes")); 
        if (pgLikes.find(o => o.btn === 'like-2')){
            index = pgLikes.findIndex(obj => obj.btn == "like-2");
            pgLikes[index].status = $(this).find("i").attr('class')
            localStorage.setItem("likes",JSON.stringify(pgLikes));  
        }
        else{
            let newLike = new Like(
                $(this).attr("id"),
                $(this).find("i").attr('class')
            );
            pgLikes.push(newLike);
            localStorage.setItem("likes",JSON.stringify(pgLikes));
        }
    });

    // article 3
    $(".like-3").click(function(){
        pgLikes = JSON.parse(localStorage.getItem("likes")); 
        if (pgLikes.find(o => o.btn === 'like-3')){
            index = pgLikes.findIndex(obj => obj.btn == "like-3");
            pgLikes[index].status = $(this).find("i").attr('class')
            localStorage.setItem("likes",JSON.stringify(pgLikes));  
        }
        else{
            let newLike = new Like(
                $(this).attr("id"),
                $(this).find("i").attr('class')
            );
            pgLikes.push(newLike);
            localStorage.setItem("likes",JSON.stringify(pgLikes));
        }  
    });

    // article 4
    $(".like-4").click(function(){
        pgLikes = JSON.parse(localStorage.getItem("likes")); 
        if (pgLikes.find(o => o.btn === 'like-4')){
            index = pgLikes.findIndex(obj => obj.btn == "like-4");
            pgLikes[index].status = $(this).find("i").attr('class')
            localStorage.setItem("likes",JSON.stringify(pgLikes));
            
        }
        else{
            let newLike = new Like(
                $(this).attr("id"),
                $(this).find("i").attr('class')
            );
            pgLikes.push(newLike);
            localStorage.setItem("likes",JSON.stringify(pgLikes));
        }
        
    });

    // comments object constructor
    function Comment(comment, date, article){
        this.comment = comment,
        this.date = date,
        this.article = article
    }

    // comment button event functions
    // article 1
    $(".comment-1-btn").click(function(){
            $(".comment-1-disp").show();
            artComments = JSON.parse(localStorage.getItem("comments"));
            let comment = $('.comment-1-input').val();
            let artNum = "comment-1-disp";
            if (comment != ''){
                let commDate = new Date();
                let addComm = new Comment(
                comment,
                commDate,
                artNum
                );
                artComments.push(addComm);
                localStorage.setItem("comments",JSON.stringify(artComments))
                $(".comment-1-disp").append($("<p>").attr({class:"comm-1"}).html(comment));
                $(".comment-1-disp").append($("<p>").attr({class:"comm-1-date"}).html(  "-"+commDate))
            }    
    });

    // article 2
    $(".comment-2-btn").click(function(){
        $(".comment-2-disp").show();
        artComments = JSON.parse(localStorage.getItem("comments"));
        let comment = $('.comment-2-input').val();
        let artNum = "comment-2-disp";
        if (comment != ''){
            let commDate = new Date();
            let addComm = new Comment(
            comment,
            commDate,
            artNum
            );
            artComments.push(addComm);
            localStorage.setItem("comments",JSON.stringify(artComments))
            $(".comment-2-disp").append($("<p>").attr({class:"comm-1"}).html(comment));
            $(".comment-2-disp").append($("<p>").attr({class:"comm-1-date"}).html(  "-"+commDate))
        }
              
    });

    // article 3
    $(".comment-3-btn").click(function(){
        $(".comment-3-disp").show();
        artComments = JSON.parse(localStorage.getItem("comments"));
        let comment = $('.comment-3-input').val();
        let artNum = "comment-3-disp";
        if (comment != ''){
            let commDate = new Date();
            let addComm = new Comment(
            comment,
            commDate,
            artNum
            );
            artComments.push(addComm);
            localStorage.setItem("comments",JSON.stringify(artComments))
            $(".comment-3-disp").append($("<p>").attr({class:"comm-1"}).html(comment));
            $(".comment-3-disp").append($("<p>").attr({class:"comm-1-date"}).html(  "-"+commDate))
        }
    });

    // article 4
    $(".comment-4-btn").click(function(){
        $(".comment-4-disp").show();
        artComments = JSON.parse(localStorage.getItem("comments"));
        let comment = $('.comment-4-input').val();
        let artNum = "comment-4-disp";
        if (comment != ''){
            let commDate = new Date();
            let addComm = new Comment(
            comment,
            commDate,
            artNum
            );
            artComments.push(addComm);
            localStorage.setItem("comments",JSON.stringify(artComments));
            $(".comment-4-disp").append($("<p>").attr({class:"comm-1"}).html(comment));
            $(".comment-4-disp").append($("<p>").attr({class:"comm-1-date"}).html(  "-"+commDate));
        }
    });

    // save article object constructor
    function Save(date, article){
        this.date = date,
        this.article = article
    }

    //save article event function
    //article 1
    $(".save-1").click(function(){
        saveArt = JSON.parse(localStorage.getItem("saveArt"));
        let articleId = document.getElementById('article-1');
        let artheading = document.querySelector('.toggle-1');
        let sArticle = artheading.innerHTML + articleId.innerHTML
        let saveDate = new Date();
        let newSave = new Save(
            saveDate,
            sArticle
        );
        saveArt.push(newSave);
        localStorage.setItem("saveArt",JSON.stringify(saveArt));
    });

    //article 2
    $(".save-2").click(function(){
        saveArt = JSON.parse(localStorage.getItem("saveArt"));
        let articleId = document.getElementById('article-2');
        let artheading = document.querySelector('.toggle-2');
        let sArticle = artheading.innerHTML + articleId.innerHTML
        let saveDate = new Date();
        let newSave = new Save(
            saveDate,
            sArticle
        );
        saveArt.push(newSave);
        localStorage.setItem("saveArt",JSON.stringify(saveArt));
    });

    //article 3
    $(".save-3").click(function(){
        saveArt = JSON.parse(localStorage.getItem("saveArt"));
        let articleId = document.getElementById('article-3');
        let artheading = document.querySelector('.toggle-3');
        let sArticle = artheading.innerHTML + articleId.innerHTML
        let saveDate = new Date();
        let newSave = new Save(
            saveDate,
            sArticle
        );
        saveArt.push(newSave);
        localStorage.setItem("saveArt",JSON.stringify(saveArt));
    });

    //article 4
    $(".save-4").click(function(){
        saveArt = JSON.parse(localStorage.getItem("saveArt"));
        let articleId = document.getElementById('article-4');
        let artheading = document.querySelector('.toggle-4');
        let sArticle = artheading.innerHTML + articleId.innerHTML
        let saveDate = new Date();
        let newSave = new Save(
            saveDate,
            sArticle
        );
        saveArt.push(newSave);
        localStorage.setItem("saveArt",JSON.stringify(saveArt));
    });


});