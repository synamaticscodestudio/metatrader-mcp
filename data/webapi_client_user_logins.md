# Get Accounts (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Clients ](webapi_client.md "Clients")/ Get Accounts | [](webapi_client_user_delete.md "Unbind Account") [](webapi_document_add.md "Add Document") |
| --- | --- | --- |
| --- | --- |

Get the List of a Client's Accounts
The request allows receiving a list of accounts bound to a client record.
Request Format
GET /api/client/user/get_logins?client=identifiers POST /api/client/user/get_logins?client=identifiers  
---  
Response Format
{ "retcode" : "code description", "answer" : { "identifier" : [ list of accounts ],  "identifier" : [ list of accounts ], ...  } }  
---  
Example
//--- request to the server GET /api/client/user/get_logins?client=1032,1033 //--- server response { "retcode" : "0 Done", "answer" : { "1032" : [ 18969, 18970, 18971, 18972 ], "1033" : [ 25976, 25977, 25978 ] } }  
---  
Request Parameters
  * client — the identifier of the client whose accounts you wish to obtain. Multiple tickets can be specified as separated by commas.

Response Parameters
  * retcode — if successful, the command returns [the response code](retcodes_successful.md "Successful completion") 0\. Otherwise, an error code is returned.
  * answer — the list of account for each client specified in the report.
