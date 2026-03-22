# DealerClear (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Routing ](config_route.md "Routing") / [ IMTConRoute ](imtconroute.md "IMTConRoute")/ DealerClear | [](imtconroute_dealerdelete.md "DealerDelete") [](imtconroute_dealershift.md "DealerShift") |
| --- | --- | --- |
| --- | --- |

IMTConRoute::DealerClear
Clear the list of dealers to whom requests under the conditions of this rule will be sent for processing.
C++
MTAPIRES IMTConRoute::DealerClear()  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConRoute.DealerClear()  
---  
Python (Manager API)
MTConRoute.DealerClear()  
---  
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
This method clears the entire list of dealers in a rule.