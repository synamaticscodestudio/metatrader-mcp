# ParamVolume (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Routing ](config_route.md "Routing") / [ IMTConRoute ](imtconroute.md "IMTConRoute")/ ParamVolume | [](imtconroute_parammoney.md "ParamMoney") [](imtconroute_paramvolumeext.md "ParamVolumeExt") |
| --- | --- | --- |
| --- | --- |

IMTConRoute::ParamVolume
Gets the value of an additional parameter that expresses the volume.
C++
UINT64 IMTConRoute::ParamVolume() const  
---  
.NET (Gateway/Manager API)
ulong CIMTConRoute.ParamVolume()  
---  
Python (Manager API)
MTConRoute.ParamVolume  
---  
Return Value
A value in the UINT64 format (one unit corresponds to 1/10000 lot, for example, 10500 means 1.05 lots).
Note
The method operates with [the standard volume accuracy](features.htm#volume) (4 decimal places). For extended volume accuracy, use the [IMTConRoute::ParamVolumeExt](imtconroute_paramvolumeext.md "ParamVolumeExt") method.
IMTConRoute::ParamVolume
Sets the value of an additional parameter that expresses the volume.
C++
MTAPIRES IMTConRoute::ParamVolume( const UINT64 value // Value )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConRoute.ParamVolume( ulong value // Value )  
---  
Python (Manager API)
MTConRoute.ParamVolume  
---  
Parameters
value
[in] A value in the UINT64 format (one unit corresponds to 1/10000 lot, for example, 10500 means 1.05 lots).
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
The method operates with [the standard volume accuracy](features.htm#volume) (4 decimal places). For extended volume accuracy, use the [IMTConRoute::ParamVolumeExt](imtconroute_paramvolumeext.md "ParamVolumeExt") method.