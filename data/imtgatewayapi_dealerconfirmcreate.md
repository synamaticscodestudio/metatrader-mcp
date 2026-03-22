# DealerConfirmCreate (MetaTrader5SDK)

|  | [ Gateway API ](gatewayapi.md "Gateway API") / [ Main Interface ](imtgatewayapi.md "Main Interface") / [ Processing Trade Requests ](imtgatewayapi_dealing.md "Processing Trade Requests")/ DealerConfirmCreate | [](imtgatewayapi_dealing.md "Processing Trade Requests") [](imtgatewayapi_dealerexecutioncreate.md "DealerExecutionCreate") |
| --- | --- | --- |
| --- | --- |

IMTGatewayAPI::DealerConfirmCreate
Create request confirmation interface object.
C++
IMTConfirm* IMTGatewayAPI::DealerConfirmCreate()  
---  
.NET
CIMTConfirm CIMTGatewayAPI.DealerConfirmCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTConfirm](imtconfirm.md "IMTConfirm") interface. In case of failure, it returns NULL.
Note
The created object must be destroyed by calling the [IMTConfirm::Release](imtconfirm_release.md "Release") method of this object.