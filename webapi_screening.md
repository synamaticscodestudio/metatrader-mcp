# Escape Character (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API")/ Escaping Special Characters | [](webapi_rest_authentication.md "Authentication") [](webapi_pings.md "Connection Maintenance") |
| --- | --- | --- |
| --- | --- |

Escape Character
When using special characters = (equal), | (vertical bar), \ (backslash) and linefeed, the escape character \ (backslash) should be used before them. 
If \ (backslash) is not followed by any of the special characters mentioned above, it is processed as is.  
---  
The below table shows examples of how the escape sequences are handled on the trade server.
| Sent character | Character recognized by the server |
| --- | --- |
| --- | --- |
| \= | = |
| \ |  |  |
| \\(linefeed) | (linefeed) |
| \\\ | \ |

Examples:
| //--- As a result of the request, the user name will be changed to John | Smith /api/user/update?login=1000&name=John\ | Smith //--- when requesting a group using the /api/group/get command, the path to the group can be specified in two ways: /api/group/get?group=manager\administrators /api/group/get?group==manager\\\administrators |
| --- | --- | --- |

---  
When using PHP, the forward slashes in the JSON body of the request must be escaped twice:
$result=$request->Post('/api/user/update?login=10098', '{  "Group" : "demo\\\\\\\demoforex" }');  
---  
If you use spaces in request URLs, replace them with %20. For example:
GET /api/user/add?name=John%20Smith&pass_main=1Rp0#jahr&pass_investor=lOp3$qnm&group=demo&leverage=100  
---