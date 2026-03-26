function params(a, b){
    document.write("Number of parameters:" +arguments.length+ "<br>");
    for(let i=0; i< arguments.length; i++)
    {
        document.write(arguments[i]+ "<br>");
    }
    document.writeln("<br>");
}

params("Nivedita");
params("Shannu","Pavan");
params("Shannu","Pavan","Gagan");