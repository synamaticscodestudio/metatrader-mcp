# Add Comment (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Clients ](webapi_client.md "Clients")/ Add Comment | [](webapi_document_history_get.md "Get Document History") [](webapi_comment_update.md "Update Comment") |
| --- | --- | --- |
| --- | --- |

Add a Comment to a Document or Client
The request allows adding a comment to a client record or to a document.
Request Format
POST /api/comment/add [ One or more comment descriptions in JSON format ]  
---  
Response Format
[ { "id" : "identifier", "retcode" : "code description", }, { "id" : "identifier", "retcode" : "code description", }, ... ]  
---  
Example
//--- request to the server POST /api/comment/add [ { "RelatedClient" : "1032",  "Flags" : "0", "Text" : "<font face=\"Tahoma\">Called client, no answer<\/font>", "CommentType" : "2" }, { "RelatedClient" : "1032",  "Flags" : "0", "Text" : "<font face=\"Tahoma\">Called client, ready to proceed with registration<\/font>", "CommentType" : "2" } ] //--- server response [ { "id" : "1278", "retcode" : "0 Done", }, { "id" : "1279", "retcode" : "0 Done", }, ... ]  
---  
Request Parameters
The request has no parameters. The description of the comment to be created is passed in the JSON body of the request.
The mandatory field is "RelatedClient" or "RelatedDocument", based on which the comment is bound to a client record or to a document. The complete description of the possible user parameters is provided in the ["Data structure"](webapi_client_data_structure.htm#comment) section.
The JSON description of the document passed when creating is the same as the description returned by the server. For example;
{ "RelatedClient" : "1032",  "Flags" : "0", "Text" : "<font face=\"Tahoma\">Called client, no answer<\/font>", "CommentType" : "2" ... }  
---  
Response Parameters
  * id — created comment identifier.
  * retcode — if successful, the command returns [the response code](retcodes_successful.md "Successful completion") 0\. Otherwise, an error code is returned.

Note
A comment can only be added from the applications connected to the trading server on which the client was created. For all other applications, the response code [12001](retcodes_api.md "API") is returned. If the client is not found, the response code [13](retcodes_common.md "Common errors") is returned.