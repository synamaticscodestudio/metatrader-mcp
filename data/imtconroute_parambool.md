# ParamBool (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Routing ](config_route.md "Routing") / [ IMTConRoute ](imtconroute.md "IMTConRoute")/ ParamBool | [](imtconroute_paramleverage.md "ParamLeverage") [](imtconroute_paramtime.md "ParamTime") |
| --- | --- | --- |
| --- | --- |

IMTConRoute::ParamBool
Get the value of an additional parameter of the bool type.
C++
bool IMTConRoute::ParamBool() const  
---  
.NET (Gateway/Manager API)
bool CIMTConRoute.ParamBool()  
---  
Python (Manager API)
MTConRoute.ParamBool  
---  
Return Value
Can be true or false.
IMTConRoute::ParamBool
Set the value of an additional parameter of the bool type.
C++
MTAPIRES IMTConRoute::ParamBool( const bool value // Value )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConRoute.ParamBool( bool value // Value )  
---  
Python (Manager API)
MTConRoute.ParamBool  
---  
Parameters
value
[in] True or false.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.