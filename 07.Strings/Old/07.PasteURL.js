/*
 Problem 7. Parse URL

 Write a script that parses an URL address given in the format: [protocol]://[server]/[resource] and extracts from it the [protocol], [server] and [resource] elements.
 Return the elements in a JSON object.

 Example:
 URL 	                                                    result
 http://telerikacademy.com/Courses/Courses/Details/239 	    protocol: http,
                                                            server: telerikacademy.com
                                                            resource: /Courses/Courses/Details/239
 */
console.log('Task 7:');
function extractURL(url){
    var protocol='',
        server='',
        resource='',
        indexProtocol=url.indexOf('://'),
        indexServer = url.indexOf('/',indexProtocol+3);

    protocol=url.substr(0,indexProtocol);
    server=url.substring(indexProtocol+3,indexServer);
    resource=url.substr(indexServer)


    return 'protocol: '+protocol+ '\nserver:   '+server+'\nresource: '+resource;
}
var URL = 'http://telerikacademy.com/Courses/Courses/Details/239';
console.log(URL);
console.log(extractURL(URL));
console.log(' ');