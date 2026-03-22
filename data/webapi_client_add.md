# Add (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Clients ](webapi_client.md "Clients")/ Add | [](webapi_client_data_structure.md "Data Structure") [](webapi_client_update.md "Update") |
| --- | --- | --- |
| --- | --- |

Add Client
The request allows creating a client on the server.
Request Format
POST /api/client/add [ One or more client descriptions in JSON format ]  
---  
Response Format
[ { "id" : "identifier", "retcode" : "code description", }, { "id" : "identifier", "retcode" : "code description", }, ... ]  
---  
Example
//--- request to the server POST /api/client/add [ { "PersonName" : "John", "PersonLastName" : "Smith" "ClientType" : "1", "ClientStatus" : "700", "AssignedManager" : "1000" }, { "PersonName" : "Mary", "PersonLastName" : "Anne" "ClientType" : "1", "ClientStatus" : "700", "AssignedManager" : "1200" } ] //--- server response [ { "id" : "1278", "retcode" : "0 Done", }, { "id" : "1279", "retcode" : "0 Done", }, ... ]  
---  
Request Parameters
The request has no parameters. The description of the client to be created is passed in the JSON body of the request.
There are no mandatory fields, any data set can be passed. The complete description of the possible user parameters is provided in the ["Data structure"](webapi_client_data_structure.md "Data Structure") section.
The JSON description of the client record passed when creating is the same as the description returned by the server. For example;
{ "ClientType" : "1", "ClientStatus" : "700", "ClientExternalID" : "", "AssignedManager" : "0", "Comment" : "automatically generated on startup", ... }  
---  
When creating a client, a check is performed to make sure that the PersonName or ContactEmail parameters are unique for the client database on the server.  
---  
Response Parameters
  * id — created client identifier.
  * retcode — if successful, the command returns [the response code](retcodes_successful.md "Successful completion") 0\. Otherwise, an error code is returned.

Note
  * A client can only be added to the database on the server, to which the API application is connected.
  * When creating a client, the sever automatically assigns a unique identifier to this client ([RecordID](webapi_client_data_structure.md "Data Structure")). The identifier cannot be set manually.
