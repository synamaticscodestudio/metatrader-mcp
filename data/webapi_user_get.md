# Get by Login (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Users ](webapi_users.md "Users")/ Get by Login | [](webapi_user_delete.md "Delete") [](webapi_user_external_get.md "Get by External Account") |
| --- | --- | --- |
| --- | --- |

Getting a User by Login
This request allows to get information about a client by the login.
Request format
GET /api/user/get?login=login POST /api/user/get?login=login  
---  
Response format
{ "retcode" : "code description", "answer" : { description } }  
---  
Example
//--- request to the server GET /api/user/get?login=764636 //--- server response { "retcode" : "0 Done", "answer" : { "Login": "764636", "Group": "demo\\\forex", "CertSerialNumber": "0", "Rights": "6627", "MQID": "F5986B14", "Registration": "1527173711", "LastAccess": "1527173713", "LastPassChange": "1527173711", ... } }  
---  
Request Parameters
  * login — the login of an account which should be obtained.

Response Parameters
  * retcode — if successful, the command returns [a response code](retcodes_successful.md "Successful completion") 0\. Otherwise, it will return an error code.
  * answer — user parameters in JSON format. The complete description of the passed client parameters is given in the ["Data structure"](webapi_user_data_structure.md "Data Structure") section.

Note
Information about a user that can be obtained depends on access permissions of a manager account that is used for connection of the Web client. If the "Access to personal data of accounts" permission is absent", [some of the fields are not filled](webapi_preparing.htm#private_info) in the server response.
Please pay attention to the [ApiData property](webapi_user_data_structure.htm#apidata) use specifics. The following values are returned for each of the array elements (which are always 16):
  * The required fields AppID and ID, which only contain their values.
  * Fields ValueInt, ValueUInt and ValueDouble containing the corresponding presentation of the same binary value, which was written to the ApiData cell (via any type of API).
