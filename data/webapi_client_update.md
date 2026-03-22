# Update (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Clients ](webapi_client.md "Clients")/ Update | [](webapi_client_add.md "Add") [](webapi_client_delete.md "Delete") |
| --- | --- | --- |
| --- | --- |

Client Update
The request allows updating client data on the server.
Request Format
POST /api/client/update [ One or more client descriptions in JSON format ]  
---  
Response Format
[ { "id" : "identifier", "retcode" : "code description", }, { "id" : "identifier", "retcode" : "code description", }, ... ]  
---  
Example
//--- request to the server POST /api/client/update [ { "RecordID" : "1278", "PersonName" : "John", "PersonLastName" : "Smith" "ClientType" : "1", "ClientStatus" : "700", "AssignedManager" : "1000" }, { "RecordID" : "1279", "PersonName" : "Mary", "PersonLastName" : "Anne" "ClientType" : "1", "ClientStatus" : "700", "AssignedManager" : "1200" } ] //--- server response [ { "id" : "1278", "retcode" : "0 Done", }, { "id" : "1279", "retcode" : "0 Done", }, ... ]  
---  
Request Parameters
The request has no parameters. The description of the client data to be updated is passed in the JSON body of the request.
The RecordID field is mandatory. The client record is determined by this field. The set of fields to be updated can be any. The complete description of the possible user parameters is provided in the ["Data structure"](webapi_client_data_structure.md "Data Structure") section.
The JSON description of the client record passed when updating is the same as the description returned by the server. For example;
{ "ClientType" : "1", "ClientStatus" : "700", "ClientExternalID" : "", "AssignedManager" : "0", "Comment" : "automatically generated on startup", ... }  
---  
Response Parameters
  * id — updated client ID.
  * retcode — if successful, the command returns [the response code](retcodes_successful.md "Successful completion") 0\. Otherwise, an error code is returned.

Note
A client can only be updated from the applications connected to the trade server, on which the client was created. For all other applications, the response code [12001](retcodes_api.md "API") is returned. If the object is not found, the response code [13](retcodes_common.md "Common errors") is returned.