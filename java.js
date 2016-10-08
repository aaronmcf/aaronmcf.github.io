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
    if(document.getElementById("textarea") == null)
    {
        alert("Cannot find text box");
    }
    else
    {
        var title = document.getElementById("form6").value;
        var date = document.getElementById("form7").value;
        var content = document.getElementById("textarea").value;
        var hasContent = checkContent(content);

        if(hasContent)
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