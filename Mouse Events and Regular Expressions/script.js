var i=0;
var j=0;
var d=0;
var h=0;
var s=0;
function stepover()
{
    if(i==0)
    {
        document.getElementById("switch").src = "1.jpg";
            i=1;
    }
    else
    {
        document.getElementById("switch").src = "2.jpg";
            i=0;
    }
}
function football()
{             
    if(j==0)
    {
        document.getElementById("ball").src = "4.jpg";
            j=1;
    }
    else
    {
        document.getElementById("ball").src = "3.jpg";
            j=0;
    }
}
function fifa()
{
    if(d==0)
    {
        document.getElementById("run").src = "5.jpg";
            d=1;
    }
    else if(d==1)
    {
        document.getElementById("run").src = "6.jpg";
            d=0;
    }
                
}
function worldcup()
{
    if(h==0)
    {
        document.getElementById("world").src="7.jpg";
            h=1;
    }

    else
    {
        document.getElementById("world").src="8.jpg";
            h=0;
    }

}

function chop()
{
    if(s==0)

    {
        document.getElementById("skill").src="10.jpg";
            s=1;
    }
    else
    {
        document.getElementById("skill").src="9.jpg";
            s=0;
    }
}