# Clear (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Routing ](config_route.md "Routing") / [ IMTConRoute ](imtconroute.md "IMTConRoute")/ Clear | [](imtconroute_assign.md "Assign") [](imtconroute_name.md "Name") |
| --- | --- | --- |
| --- | --- |

IMTConRoute::Clear
Clear an object.
C++
MTAPIRES IMTConRoute::Clear()  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConRoute.Clear()  
---  
Python (Manager API)
MTConRoute.Clear()  
---  
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
This method clears all fields ​​and removes embedded objects.