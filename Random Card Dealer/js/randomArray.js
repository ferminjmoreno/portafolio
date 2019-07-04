function generateRandomArray()
{
    var auxArray = ["A lonely comedian burned my car in front of the office",
                    "A lonely merchant kicked my car near the toilet",
                    "A lonely jogger kicked my sandwich on the street",
                    "A slow merchant threw my computer on the street",
                    "A two headed pinecone yelled at my sandwich in my house"];
    var who  = ['the dog','my granma', 'his turtle','my bird'];
    var indexWho = Math.floor(Math.random() * 4);
    var what = ['eat','pissed','crushed','broked'];
    var indexWhat = Math.floor(Math.random() * 4);
    var when = ['before the class','right in time','when I finished','during my lunch','while I was praying'];    
    var indexWhen = Math.floor(Math.random() * 4);
    var randomLength = Math.floor(Math.random() * 4);
	document.getElementById("demo").innerHTML = who[indexWho]+" "+what[indexWhat]+" "+when[indexWhen];	
}
