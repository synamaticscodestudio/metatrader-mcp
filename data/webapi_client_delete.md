# Delete (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Clients ](webapi_client.md "Clients")/ Delete | [](webapi_client_update.md "Update") [](webapi_client_get.md "Get") |
| --- | --- | --- |
| --- | --- |

Delete Client
The request allows deleting a client from the server.
Request Format
GET /api/client/delete?id=list of IDs POST /api/client/delete?id=list of IDs  
---  
Response Format
[ { "id" : "identifier", "retcode" : "code description", }, { "id" : "identifier", "retcode" : "code description", }, ... ]  
---  
Example
//--- request to the server GET /api/client/delete?id=1278,1279 //--- server response [ { "id" : "1278", "retcode" : "0 Done", }, { "id" : "1279", "retcode" : "0 Done", }, ... ]  
---  
Request Parameters
  * id — IDs of clients to be deleted. Specified as a comma separated list.

Response Parameters
  * id — deleted client ID.
  * retcode — if successful, the command returns [the response code](retcodes_successful.md "Successful completion") 0\. Otherwise, an error code is returned.

Note
A client can only be deleted from the applications connected to the trade server, on which the client was created. For all other applications, the response code [12001](retcodes_api.md "API") is returned. If the object is not found, the response code [13](retcodes_common.md "Common errors") is returned.