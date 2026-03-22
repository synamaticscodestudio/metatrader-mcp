# MessengerGroupCreate (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Messengers ](imtadminapi_config_messenger.md "Messengers")/ MessengerGroupCreate | [](imtadminapi_messengercountrycreate.md "MessengerCountryCreate") [](imtadminapi_messengertemplatecreate.md "MessengerTemplateCreate") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::MessengerGroupCreate
Create an object of an account group for which the messenger will be used.
C++
IMTConMessengerGroup* IMTAdminAPI::MessengerGroupCreate()  
---  
.NET
CIMTConMessengerGroup CIMTAdminAPI.MessengerGroupCreate()  
---  
Return Value
The method returns a pointer to the created object that implements the [IMTConMessengerGroup](imtconmessengergroup.md "IMTConMessengerGroup") interface. Null is returned in case of failure.
Note
The created object must be destroyed by calling the [IMTConMessengerGroup::Release](imtconmessengergroup_release.md "Release") method of this object.