# Get Multiple (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Users ](webapi_users.md "Users")/ Get Multiple | [](webapi_user_external_get.md "Get by External Account") [](webapi_user_pass_check.md "Check Password") |
| --- | --- | --- |
| --- | --- |

Get Multiple Users
The request allows receiving information related to multiple users, based on a list of logins or groups.
Request format
GET /api/user/get_batch?login=logins GET /api/user/get_batch?group=groups POST /api/user/get_batch?login=logins POST /api/user/get_batch?group=groups  
---  
Response format
{ "retcode" : "code description", "answer" : [ user description ] }  
---  
Example
//--- request to the server GET /api/user/get_batch?login=764636,764637 //--- server response { "retcode" : "0 Done", "answer" : [ { "Login": "764636", "Group": "demo\\\forex", "CertSerialNumber": "0", "Rights": "6627", "MQID": "F5986B14", "Registration": "1527173711", "LastAccess": "1527173713", "LastPassChange": "1527173711", ... }, { "Login": "764637", "Group": "demo\\\forex", "CertSerialNumber": "0", "Rights": "6627", "MQID": "H5926B36", "Registration": "1527186511", "LastAccess": "1527186513", "LastPassChange": "1527186511", ... }, ] }  
---  
Request Parameters
  * login — list of user logins data of which you want to receive data. A commas separated list.
  * group — the list of groups, for users from which you want to receive data. A commas separated list.

Response Parameters
  * retcode — if successful, the command returns [the response code ](retcodes_successful.md "Successful completion") 0\. Otherwise, an error code is returned.
  * answer — array of user descriptions in JSON format. The full description of passed client parameters is available under the ["Data structure"](webapi_user_data_structure.md "Data Structure") section.

Note
  * The user data that can be obtained depends on access permissions of a manager account that is used for Web client connection. If the "Access to personal data of accounts" permission is absent", [some of the fields are not filled](webapi_preparing.htm#private_info) in the server response.
  * Only one of the parameters can be used in the request. Multiple lists are not allowed.
  * Please pay attention to the [ApiData property](webapi_user_data_structure.htm#apidata) use specifics. The following values are returned for each of the array elements (which are always 16):

  * The required fields AppID and ID, which only contain their values.
  * Fields ValueInt, ValueUInt and ValueDouble containing the corresponding presentation of the same binary value, which was written to the ApiData cell (via any type of API).
