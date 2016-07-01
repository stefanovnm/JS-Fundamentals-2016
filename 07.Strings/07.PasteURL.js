function solve(args) {
    var input = args[0];
    
    console.log(extractURL(input));

    function extractURL(url) {
        var protocol = '',
            server = '',
            resource = '',
            indexProtocol = url.indexOf('://'),
            indexServer = url.indexOf('/', indexProtocol + 3);

        protocol = url.substr(0, indexProtocol);
        server = url.substring(indexProtocol + 3, indexServer);
        resource = url.substr(indexServer)


        return 'protocol: ' + protocol + '\nserver: ' + server + '\nresource: ' + resource;
    }
}