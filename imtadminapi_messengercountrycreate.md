# MessengerCountryCreate (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Messengers ](imtadminapi_config_messenger.md "Messengers")/ MessengerCountryCreate | [](imtadminapi_messengercreate.md "MessengerCreate") [](imtadminapi_messengergroupcreate.md "MessengerGroupCreate") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::MessengerCountryCreate
Create an object of a country for which the messenger will be used.
C++
IMTConMessengerCountry* IMTAdminAPI::MessengerCountryCreate()  
---  
.NET
CIMTConMessengerCountry CIMTAdminAPI.MessengerCountryCreate()  
---  
Return Value
The method returns a pointer to the created object that implements the [IMTConMessengerCountry](imtconmessengercountry.md "IMTConMessengerCountry") interface. Null is returned in case of failure.
Note
The created object must be destroyed by calling the [IMTConMessengerCountry::Release](imtconmessengercountry_release.md "Release") method of this object.