# DealerConfirmCreate (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Trade Activity ](imtmanagerapi_trade_operations.md "Trading Functions") / [ Dealing ](imtmanagerapi_dealing.md "Dealing")/ DealerConfirmCreate | [](imtmanagerapi_dealing.md "Dealing") [](imtmanagerapi_dealerunsubscribe.md "DealerUnsubscribe") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::DealerConfirmCreate
Create request confirmation interface object.
C++
IMTConfirm* IMTManagerAPI::DealerConfirmCreate()  
---  
.NET
CIMTConfirm CIMTManagerAPI.DealerConfirmCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTConfirm](imtconfirm.md "IMTConfirm") interface. In case of failure, it returns NULL.
Note
The created object must be destroyed by calling the [IMTConfirm::Release](imtconfirm_release.md "Release") method of this object.