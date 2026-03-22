# DealerExecutionCreate (MetaTrader5SDK)

|  | [ Gateway API ](gatewayapi.md "Gateway API") / [ Main Interface ](imtgatewayapi.md "Main Interface") / [ Processing Trade Requests ](imtgatewayapi_dealing.md "Processing Trade Requests")/ DealerExecutionCreate | [](imtgatewayapi_dealerconfirmcreate.md "DealerConfirmCreate") [](imtgatewayapi_dealerstart.md "DealerStart") |
| --- | --- | --- |
| --- | --- |

IMTGatewayAPI::DealerExecutionCreate
Create trade execution method of this object.
C++
IMTExecution* IMTGatewayAPI::DealerExecutionCreate()  
---  
.NET
CIMTExecution CIMTGatewayAPI.DealerExecutionCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTExecution](imtexecution.md "IMTExecution") interface. In case of failure, it returns NULL.
Note
It returns a pointer to the created object that implements the [IMTExecution::Release](imtexecution_release.md "Release") method of this project.