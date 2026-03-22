# Unbind Account (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Clients ](webapi_client.md "Clients")/ Unbind Account | [](webapi_client_user_add.md "Bind Account") [](webapi_client_user_logins.md "Get Accounts") |
| --- | --- | --- |
| --- | --- |

Unbind an Account from a Client
The request allows unbinding a trading account from a client.
Request Format
GET /api/client/user/delete?client=identifier&user=account POST /api/client/user/delete { [ {"user": "account number", "client": "client identifier"}, {"user": "account number", "client": "client identifier"}, ... ] }  
---  
Response Format
{ "retcode" : "code description", "answer" : [ response code, response code, ... ] }  
---  
Example
//--- request to the server GET /api/client/user/delete [ {"user": "3018855", "client": "1032"}, {"user": "3018856", "client": "1032"} ] } //--- server response { "retcode" : "0 Done", "answer" : [ 0, 3 ] }  
---  
Request Parameters
  * client — the ID of the client from whom the account should be unbound.
  * user — the login of the account which should be unbound from the client.

To perform group unbinding operations, pass account numbers and customer identifiers in the POST request body. Do not indicate parameters in the string, as they have higher priority: if parameters are specified, the request body is ignored.
Response Parameters
  * retcode — if successful, the command returns [the response code](retcodes_successful.md "Successful completion") 0\. Otherwise, an error code is returned.
  * answer — array of response codes related to the unbinding of each of the specified accounts.

Note
The request does not delete the trading account. It unbinds the account from the client.