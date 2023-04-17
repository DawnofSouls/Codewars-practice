function domainName(url){
    //your code here
    let String = '';
    if (url.startsWith('https://www.')){
        String = url.split("https://www.").join(" ");
        StringCut = String.split("").reverse().lastIndexOf(".");
        String = String.slice(0 , -(StringCut + 1)).trimStart().trimEnd();
    } else if (url.startsWith('http://www.')){
        String = url.split("http://www.").join(" ");
        StringCut = String.split("").reverse().lastIndexOf(".");
        String = String.slice(0 , -(StringCut + 1)).trimStart().trimEnd();
    } else if (url.startsWith('https://')) {
        String = url.split("https://").join(" ");
        StringCut = String.split("").reverse().lastIndexOf(".");
        String = String.slice(0 , -(StringCut + 1)).trimStart().trimEnd();
    } else if (url.startsWith('http://')){
        String = url.split("http://").join(" ");
        StringCut = String.split("").reverse().lastIndexOf(".");
        String = String.slice(0 , -(StringCut + 1)).trimStart().trimEnd();
    } else if (url.startsWith('www.')){
        String = url.split("www.").join(" ");
        StringCut = String.split("").reverse().lastIndexOf(".");
        String = String.slice(0 , -(StringCut + 1)).trimStart().trimEnd();
    }else {
        String = url;
        StringCut = String.split("").reverse().lastIndexOf(".");
        String = String.slice(0 , -(StringCut + 1)).trimStart().trimEnd();
    }
    return String;
    }

  console.log(domainName("https://youtube.com"));
  console.log(domainName("http://google.co.jp"));
  console.log(domainName('fguixggjknypklvdw.tv/error'));
  console.log(domainName('http://www.0ss3qcq-e6d0.info'));

