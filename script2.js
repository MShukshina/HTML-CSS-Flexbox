function fetchRepositories(){
        fetch('https://api.github.com/search/repositories?q=angular&per_page=10&page=1')
        .then((res) => res.json())
        .then(res => {
            console.log(res)

            var listRepositories = res.items.map(i => ({name:i.name, svn_url: i.svn_url}));

            var content = document.getElementById('content');
            for (var i=0; i< listRepositories.length; i++)
            {
                insertLink(i, listRepositories[i], content);
            }
        })
}

function insertLink(i, repository, content){
    var newP = document.createElement('p');
    newP.className="p p-success";
    newP.id = i;

    content.appendChild(newP);

    var per = document.getElementById(i);
    
    var newA = document.createElement('a');
    newA.innerHTML = repository.name;
    newA.href = repository.svn_url;
    newA.className="a a-success";
    newA.target = "_blank";
    
    per.appendChild(newA);
}
