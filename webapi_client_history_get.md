# Get Change History (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Clients ](webapi_client.md "Clients")/ Get Change History | [](webapi_client_get.md "Get") [](webapi_client_ids.md "Get Identifiers") |
| --- | --- | --- |
| --- | --- |

Get the History of Client Changes
The request allows receiving the history of client record changes in the specified period of time.
Request Format
GET /api/client/history/get?id=identifier&from=date&to=date&author=login POST /api/client/history/get?id=identifier&from=date&to=date&author=login  
---  
Response Format
{ "retcode" : "code description", "answer" : [ { client state description }, { client state description }, ... ] }  
---  
Example
//--- request to the server GET /api/client/history/get?id=1032&from=1552395829&to=1584104703 //--- server response { "retcode" : "0 Done", "answer" : [ { "RecordID" : "1278", "PersonName" : "John", "PersonLastName" : "Smith" "ClientType" : "1", "ClientStatus" : "700", "AssignedManager" : "1000" ... }, { "RecordID" : "1279", "PersonName" : "Mary", "PersonLastName" : "Anne" "ClientType" : "2", "ClientStatus" : "600", "AssignedManager" : "1200" }, ... ] }  
---  
Request Parameters
  * id — the ID of the client whose history of changes you wish to get.
  * from — the beginning of the period for which you wish to get the history of client changes. The date is specified in seconds since 01.01.1970.
  * to — the end of the period for which you wish to get the history of client changes. The date is specified in seconds since 01.01.1970.
  * author — the login of the manager account by whom the client was changed. It is used as a filter. An optional parameter. If the author is not specified or is equal to zero, changes made by any manager will be returned.

Response Parameters
  * retcode — if successful, the command returns [the response code](retcodes_successful.md "Successful completion") 0\. Otherwise, an error code is returned.
  * answer — an array of client states in JSON format. The complete description of passed parameters is available under the ["Data structure"](webapi_client_data_structure.md "Data Structure") section.

Note
The request returns an array of client descriptions: all the client states after changes by the specified author in the specified time period.