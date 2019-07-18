Extract the domain name from a URL

Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

domainName("http://github.com/carbonfive/raygun") == "github" 
domainName("http://www.zombie-bites.com") == "zombie-bites"
domainName("https://www.cnet.com") == "cnet"

//mine
function domainName(url){
  //your code here
  console.log(url);
  url = url.replace("https://www.", "");
  url = url.replace("https://", "");
  url = url.replace("http://www.", "");
  url = url.replace("http://", "");
  url = url.replace("www.", "");
  urlArray = url.split("");
  let domain = [];
  let end = false;

  for (var i = 0; i < urlArray.length; i++)
  {
    if(urlArray[i] == ".")  
    {
      break;
    }
    else
    {
      domain.push(urlArray[i]);
    }
  }
  return domain.join("");
}
//end mine

//best
function domainName(url){
  url = url.replace("https://", '');
  url = url.replace("http://", '');
  url = url.replace("www.", '');
  return url.split('.')[0];
};

function domainName(url){
  return url.match(/(?:http(?:s)?:\/\/)?(?:w{3}\.)?([^\.]+)/i)[1];
}

function domainName(url){
  return url.replace(/(https?:\/\/)?(www\.)?/, '').split('.')[0]
}
//end best