# Get (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Clients ](webapi_client.md "Clients")/ Get | [](webapi_client_delete.md "Delete") [](webapi_client_history_get.md "Get Change History") |
| --- | --- | --- |
| --- | --- |

Get Client Information
The request allows receiving client information by ID.
Request Format
GET /api/client/get?id=list of IDs&group=groups POST /api/client/get?id=list of IDs&group=groups  
---  
Response Format
{ "retcode" : "code description", "answer" : [ { client description }, { client description }, ... ] }  
---  
Example
//--- request to the server GET /api/client/get?id=1278,1279 //--- server response { "retcode" : "0 Done", "answer" : [ { "RecordID" : "1278", "PersonName" : "John", "PersonLastName" : "Smith" "ClientType" : "1", "ClientStatus" : "700", "AssignedManager" : "1000" ... }, { "RecordID" : "1279", "PersonName" : "Mary", "PersonLastName" : "Anne" "ClientType" : "1", "ClientStatus" : "700", "AssignedManager" : "1200" }, ... ] }  
---  
Request Parameters
  * id — IDs of clients, data on which you wish to obtain. Specified as a comma separated list.
  * group — an optional parameter for filtering results by the preferred group ([TradingGroup](webapi_client_data_structure.md "Data Structure")) specified for the client. You can specify one group, several groups (comma separated) or a group mask. The mask is specified using "*" (any value) and "!" (exception). For example: "demo*,!demoforex" - all groups with the names beginning with 'demo', except for the group demoforex. The following clients are returned when filter by groups is used:

  * Clients for whom TradingGroup is specified and this group corresponds to the request mask
  * Clients for whom TradingGroup is not specified, but there is at least one [bound account](webapi_client_user_add.md "Bind Account") from the requested group
  * Clients for whom TradingGroup is not specified and there are no bound accounts (to prevent the clients from being lost)

Response Parameters
  * retcode — if successful, the command returns [the response code](retcodes_successful.md "Successful completion") 0\. Otherwise, an error code is returned.
  * answer — array of client descriptions in JSON format. The complete description of passed parameters is available under the ["Data structure"](webapi_client_data_structure.md "Data Structure") section.
