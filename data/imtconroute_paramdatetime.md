# ParamDatetime (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Routing ](config_route.md "Routing") / [ IMTConRoute ](imtconroute.md "IMTConRoute")/ ParamDatetime | [](imtconroute_paramvolumeext.md "ParamVolumeExt") [](imtconroute_paramleverage.md "ParamLeverage") |
| --- | --- | --- |
| --- | --- |

IMTConRoute::ParamDatetime
Get the value of an additional parameter that expresses date and time.
C++
INT64 IMTConRoute::ParamDatetime() const  
---  
.NET (Gateway/Manager API)
long CIMTConRoute.ParamDatetime()  
---  
Python (Manager API)
MTConRoute.ParamDatetime  
---  
Return Value
Date and time in seconds that have elapsed since 01.01.1970.
IMTConRoute::ParamDatetime
Set the value of an additional parameter that expresses date and time.
C++
MTAPIRES IMTConRoute::ParamDatetime( const INT64 value // Value )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConRoute.ParamDatetime( long value // Value )  
---  
Python (Manager API)
MTConRoute.ParamDatetime  
---  
Parameters
value
[in] Date and time in seconds that have elapsed since 01.01.1970.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.