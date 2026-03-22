# DealerDelete (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Routing ](config_route.md "Routing") / [ IMTConRoute ](imtconroute.md "IMTConRoute")/ DealerDelete | [](imtconroute_dealerupdate.md "DealerUpdate") [](imtconroute_dealerclear.md "DealerClear") |
| --- | --- | --- |
| --- | --- |

IMTConRoute::DealerDelete
Delete an entry of a dealer to whom requests under the conditions of this rule will be sent for processing.
C++
MTAPIRES IMTConRoute::DealerDelete( const UINT pos // Position of a dealer entry )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConRoute.DealerDelete( uint pos // Position of a dealer entry )  
---  
Python (Manager API)
MTConRoute.DealerDelete( pos # Position of a dealer entry )  
---  
Parameters
pos
[in] Position of a dealer entry in the list, starting with 0.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.