# Set OTP Key (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Users ](webapi_users.md "Users")/ Set OTP Key | [](webapi_user_otp_secret_get.md "Get OTP Key") [](webapi_user_external_sync.md "Sync with External System") |
| --- | --- | --- |
| --- | --- |

Set an OTP key
The request allows setting a secret key which links the trading account and a one-time password generator.
Request Format
GET /api/user/otp_secret/set?login=login&otp_secret=key POST /api/user/otp_secret/set { "Login" : "login", "OtpSecret" : "key" }  
---  
Response Format
{ "retcode" : "code description" }  
---  
Example
//--- request to the server POST /api/user/otp_secret/set { "Login" : "61232", "OtpSecret" : "1234899311914576" } //--- server response { "retcode" : "0 Done" }  
---  
Request Parameters
  * login — the login of the user for whom you want to set the OTP key.
  * otp_secret or OtpSecret — OTP secret key. For security reasons, it is not recommended to pass the key in the request parameters — instead, pass it in an additional body as OtpSecret.

  * Client description can be passed in the command parameters, in an additional body in the JSON format, or both at once. A description passed in an additional body has higher priority.

  * We strongly urge you against passing passwords in the command parameters since request addresses may be logged/cached by intermediary network devices the request passes through on its way from the client to the server. Always send passwords in an additional request body.

  
---  
Response Parameters
  * retcode — if successful, the command returns [the response code](retcodes_successful.md "Successful completion") 0\. Otherwise, an error code is returned.

Note
To use the request, we need the [IMTConManager::RIGHT_ACC_MANAGER](imtconmanager_enum.htm#enmanagerrights) permission.
The key is a link between the account and the [one-time password generator](https://support.metaquotes.net/ru/docs/mt5/platform/administrator/getting_started/server_connect/otp) it is bound to. The key is represented by a sequence of 16 characters generated based on the data about the device the MetaTrader 5 mobile platform is installed on. Fur further information about the secret key please read the [MetaTrader 5 Administrator Documentation](https://support.metaquotes.net/ru/docs/mt5/platform/administration/admin_accounts/account_edit#security).