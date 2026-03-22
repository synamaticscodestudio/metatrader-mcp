# Get OTP Key (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Users ](webapi_users.md "Users")/ Get OTP Key | [](webapi_user_cert_confirm.md "Confirm Certificate") [](webapi_user_otp_secret_set.md "Set OTP Key") |
| --- | --- | --- |
| --- | --- |

Get an OTP key
The request allows receiving a secret key which links the trading account and a one-time password generator.
Request Format
GET /api/user/otp_secret/get?login=login POST /api/user/otp_secret/get?login=login  
---  
Response Format
{ "retcode" : "code description", "answer" : { "OTP_SECRET" : "key" } }  
---  
Example
//--- request to the server GET /api/user/otp_secret/get?login=61232 //--- server response { "retcode" : "0 Done", "answer" : { "OTP_SECRET" : "1230987"} }  
---  
Request Parameters
  * login — the login of the user whose OTP key you want to receive.

Response Parameters
  * retcode — if successful, the command returns [the response code](retcodes_successful.md "Successful completion") 0\. Otherwise, an error code is returned.
  * OTP_SECRET — OTP secret key.

Note
To use the request, we need the [IMTConManager::RIGHT_ACC_MANAGER](imtconmanager_enum.htm#enmanagerrights) permission.
The key is a link between the account and the [one-time password generator](https://support.metaquotes.net/ru/docs/mt5/platform/administrator/getting_started/server_connect/otp) it is bound to. The key is represented by a sequence of 16 characters generated based on the data about the device the MetaTrader 5 mobile platform is installed on. Fur further information about the secret key please read the [MetaTrader 5 Administrator Documentation](https://support.metaquotes.net/ru/docs/mt5/platform/administration/admin_accounts/account_edit#security).