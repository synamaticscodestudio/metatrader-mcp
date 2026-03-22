# MessengerVerifyPhone (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Users ](imtmanagerapi_user.md "User Functions")/ MessengerVerifyPhone | [](imtmanagerapi_emailsend.md "EmailSend") [](imtmanagerapi_messengersend.md "MessengerSend") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::MessengerVerifyPhone
Verify the validity of a passed phone number based on local phone number formation rules.
MTAPIRES IMTManagerAPI::MessengerVerifyPhone ( LPCWSTR phone_number // phone number )  
---  
.NET
MTRetCode CIMTManagerAPI.MessengerVerifyPhone( string phone_number // phone number )  
---  
Python
ManagerAPI.MessengerVerifyPhone( phone_number # phone number )  
---  
Parameters
phone_number
[in] Verified phone number. The phone number should be passed in the international format: +[country code] [phone number].
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.