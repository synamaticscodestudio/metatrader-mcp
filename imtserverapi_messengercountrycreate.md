# MessengerCountryCreate (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Messengers ](serverapi_config_messenger.md "Messengers")/ MessengerCountryCreate | [](imtserverapi_messengercreate.md "MessengerCreate") [](imtserverapi_messengergroupcreate.md "MessengerGroupCreate") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::MessengerCountryCreate
Create an object of a country for which the messenger will be used.
IMTConMessengerCountry* IMTServerAPI::MessengerCountryCreate()  
---  
Return Value
The method returns a pointer to the created object that implements the [IMTConMessengerCountry](imtconmessengercountry.md "IMTConMessengerCountry") interface. Null is returned in case of failure.
Note
The created object must be destroyed by calling the [IMTConMessengerCountry::Release](imtconmessengercountry_release.md "Release") method of this object.