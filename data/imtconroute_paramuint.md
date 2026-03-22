# ParamUInt (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Routing ](config_route.md "Routing") / [ IMTConRoute ](imtconroute.md "IMTConRoute")/ ParamUInt | [](imtconroute_paramint.md "ParamInt") [](imtconroute_paramdouble.md "ParamDouble") |
| --- | --- | --- |
| --- | --- |

IMTConRoute::ParamUInt
Get the value of an additional parameter of the UINT type.
C++
UINT64 IMTConRoute::ParamUInt() const  
---  
.NET (Gateway/Manager API)
ulong CIMTConRoute.ParamUInt()  
---  
Python (Manager API)
MTConRoute.ParamUInt  
---  
Return Value
The parameter value of the UINT type.
IMTConRoute::ParamUInt
Set the value of an additional parameter of the UINT type.
C++
MTAPIRES IMTConRoute::ParamUInt( const UINT64 value // Value )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConRoute.ParamUInt( ulong value // Value )  
---  
Python (Manager API)
MTConRoute.ParamUInt  
---  
Parameters
value
[in] Parameter value of UINT type.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.