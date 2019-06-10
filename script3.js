function fetchRepositories(content){
    var text = document.getElementById('name');
    fetch('https://api.github.com/search/repositories?q='+ text.value +'&per_page=10&page=1')
        .then(res => res.json())
        .then(res => {
            console.log(res)

            var listRepositories = res.items.map(i => ({name:i.name, svn_url: i.svn_url}));

            listRepositories.forEach(function(item, index){
                insertLink(index, item, content);
             });
        })
}

function insertLink(i, repository, content){
    var newP = document.createElement('p');
    newP.className="p p-success";
    newP.id = i;

    content.appendChild(newP);

    var p = document.getElementById(i);

    var newA = document.createElement('a');
    newA.innerHTML = repository.name;
    newA.href = repository.svn_url;
    newA.className="a a-success";
    newA.target = "_blank";

    p.appendChild(newA);
}

function updateLinks(flag){
    if (flag){
        var content = document.getElementById('content');
        enableSVG();
        clearLinks(content);
        fetchRepositories(content);
        disableSVG();
    }
}

function clearLinks(content){
    content.innerHTML = '';
}

function enableSVG(){
    var enSVG = document.getElementById('enSVG');
    enSVG.style.display = "";
}

function disableSVG(){
    var enSVG = document.getElementById('enSVG');
    enSVG.style.display = "none";
}

function getFlagEnter(){
    if (event.keyCode == 13)
        return true;
    else return false;
}
