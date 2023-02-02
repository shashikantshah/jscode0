$(document).ready(function () {
    if (document.cookie.length != 0) {
        var cookiesArray = document.cookie.split("; ");
        var link;
        var url;
        var search_params;
        for (var i = 0; i < cookiesArray.length; i++) 
        {
            var nameValueArray = cookiesArray[i].split("=");
            if (nameValueArray[0] == "PG_Site_Language") {
                link = window.location.href;
                url = new URL(link);  
                url.search = '';
                search_params = url.searchParams;
                search_params.set('sl', nameValueArray[1]);
            }    
        }
        var links = document.getElementsByClassName("lang");
        for (var i = 0, l = links.length; i < l; i++) {
                links[i].href = links[i].href.split('?sl=')[0];
        }
        for (var i = 0, l = links.length; i < l; i++) {
            var linkValue = links[i].href;
            if (linkValue.match(/tab/)) {
                var newhref = links[i].href + "&" + search_params;
                links[i].href = links[i].href.replace(links[i].href, newhref);
            } else if (linkValue.match(/#/)) {
                var HashUrl = new URL(linkValue);
                var search_Hash = HashUrl.hash;
                HashUrl.hash = '';
                var UrlHashRemoved = HashUrl.toString();
                var newhref = UrlHashRemoved + "?" + search_params + search_Hash;
                links[i].href = links[i].href.replace(links[i].href, newhref);
                console.log(links[i].href);
            }else {
                var newhref = links[i].href + "?" + search_params;
                links[i].href = links[i].href.replace(links[i].href, newhref);
            }
        }
    }
});
        //links[i].href = links[i].href.replace("?sl=GB", " ");