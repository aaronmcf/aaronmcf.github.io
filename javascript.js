/**
 * Created by AaronMcf on 05/10/2016.
 */


function log(name, entryDate, content)      //object
{
    this.logName = name;                    //properties
    this.logContent = content;
    this.logEntryDate = entryDate;
}


function checkContent(content)              //checking if content is present in text area
{
    return Boolean(content);
}


function createLog()
{
    var passwordCheck = "placementlogs123";
    var attempt = 3;

    do
    {
        var password = prompt("Please enter password to continue:");
        if(password == null)
        {
            return;
        }
        else
        {
            if (passwordCheck == password)
            {
                if (document.getElementById("textarea") == null)
                {
                    alert("Cannot find text box");
                }

                else
                {
                    var title = document.getElementById("form6").value;
                    var date = document.getElementById("form7").value;
                    var content = document.getElementById("textarea").value;
                    var hasContent = checkContent(content);

                    if (hasContent)
                    {
                        var logEntry = new log(title, date, content);

                        localStorage.setItem(title, JSON.stringify(logEntry));

                        var retrieveLog = JSON.parse(localStorage.getItem(title));
                        document.getElementById("output1").innerText = retrieveLog.logName;
                        document.getElementById("output2").innerText = retrieveLog.logEntryDate;
                        document.getElementById("output3").innerText = retrieveLog.logContent;
                    }

                    else
                    {
                        alert("Oops! No log content has been entered");
                    }
                }
            }

            else
            {
                attempt--;
                alert("Incorrect password. You have " + attempt + " attempts left.");

                if (attempt == 0)
                {
                    document.getElementById("postEntryBtn").disabled = true;
                    window.location.href = "index.html";
                }
            }
        }

    }while(attempt !== 0);

}//function createLog




//***************** scroll to top button in my logs page **********************//
jQuery(document).ready(function($)
{
    var offset = 300,
        offset_opacity = 1200,
        scroll_top_duration = 700,
        $back_to_top = $('.cd-top');

    $(window).scroll(function()
    {
        ( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');

        if( $(this).scrollTop() > offset_opacity )
        {
            $back_to_top.addClass('cd-fade-out');
        }
    });

    $back_to_top.on('click', function(event)
    {
        event.preventDefault();
        $('body,html').animate({
                scrollTop: 0 ,
            }, scroll_top_duration
        );
    });fd
});