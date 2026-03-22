# MessengerVerifyPhone (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Messengers ](serverapi_config_messenger.md "Messengers")/ MessengerVerifyPhone | [](imtserverapi_messengerget.md "MessengerGet") [](imtserverapi_messengersend.md "MessengerSend") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::MessengerVerifyPhone
Verify the validity of a passed phone number based on local phone number formation rules.
MTAPIRES IMTServerAPI::MessengerVerifyPhone ( LPCWSTR phone_number // phone number )  
---  
Parameters
phone_number
[in] Verified phone number. The phone number should be passed in the international format: +[country code] [phone number].
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.