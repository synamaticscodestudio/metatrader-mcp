# MessengerCreate (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Messengers ](imtadminapi_config_messenger.md "Messengers")/ MessengerCreate | [](imtadminapi_config_messenger.md "Messengers") [](imtadminapi_messengercountrycreate.md "MessengerCountryCreate") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::MessengerCreate
Create a messenger configuration object.
C++
IMTConMessenger* IMTAdminAPI::MessengerCreate()  
---  
.NET
CIMTConMessenger CIMTAdminAPI.MessengerCreate()  
---  
Return Value
Return the pointer to a created object implementing the [IMTConMessenger](imtconmessenger.md "IMTConMessenger") interface. Null is returned in case of failure.
Note
The created object must be destroyed by calling the [IMTConMessenger::Release](imtconmessenger_release.md "Release") method of this object.