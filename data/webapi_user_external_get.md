# Get by External Account (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Users ](webapi_users.md "Users")/ Get by External Account | [](webapi_user_get.md "Get by Login") [](webapi_user_get_batch.md "Get Multiple") |
| --- | --- | --- |
| --- | --- |

Get User by External Account
The request allows receiving information about a user based on his or her external traddng system (exchange) account.
Request format
GET /api/user/get_external?account=account&gateway=identifier POST /api/user/get_external?account=account&gateway=identifier  
---  
Response format
{ "retcode" : "code description", "answer" : { description } }  
---  
Example
//--- request to the server GET /api/user/get_external?account=36611 //--- server response { "retcode" : "0 Done", "answer" : { "Login": "764636", "Group": "demo\\\forex", "CertSerialNumber": "0", "Rights": "6627", "MQID": "F5986B14", "Registration": "1527173711", "LastAccess": "1527173713", "LastPassChange": "1527173711", ... } }  
---  
Request Parameters
  * account — user account number in an external trading system.
  * gateway — gateway ID via which connection to the external system is performed. An optional parameter.

Response Parameters
  * retcode — if successful, the command returns [the response code ](retcodes_successful.md "Successful completion") 0\. Otherwise, an error code is returned.
  * answer — user parameters in JSON format. The full description of passed client parameters is available under the ["Data structure"](webapi_user_data_structure.md "Data Structure") section.

Note
  * The external system account and the gateway ID to which the account belongs, are stored in the ["TradeAccount" field](webapi_user_data_structure.md "Data Structure").
  * Information about a client that can be obtained depends on access permissions of a manager account that is used for connection of the Web client. If the "Access to personal data of accounts" permission is absent", [some of the fields are not filled](webapi_preparing.htm#private_info) in the server response.
