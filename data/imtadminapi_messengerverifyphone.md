# MessengerVerifyPhone (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Messengers ](imtadminapi_config_messenger.md "Messengers")/ MessengerVerifyPhone | [](imtadminapi_messengerget.md "MessengerGet") [](imtadminapi_messengersend.md "MessengerSend") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::MessengerVerifyPhone
Verify the validity of a passed phone number based on local phone number formation rules.
MTAPIRES IMTAdminAPI::MessengerVerifyPhone ( LPCWSTR phone_number // phone number )  
---  
.NET
MTRetCode CIMTAdminAPI.MessengerVerifyPhone( string phone_number // phone number )  
---  
Python
AdminAPI.MessengerVerifyPhone( phone_number # phone number )  
---  
Parameters
phone_number
[in] Verified phone number. The phone number should be passed in the international format: +[country code] [phone number].
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.