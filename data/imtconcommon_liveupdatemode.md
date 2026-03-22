# LiveUpdateMode (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Common ](config_common.md "Common") / [ IMTConCommon ](imtconcommon.md "IMTConCommon")/ LiveUpdateMode | [](imtconcommon_limitsymbols.md "LimitSymbols") [](imtconcommon_totalusers.md "TotalUsers") |
| --- | --- | --- |
| --- | --- |

IMTConCommon::LiveUpdateMode
Get the update mode of the components of the trading platform.
C++
UINT IMTConCommon::LiveUpdateMode() const  
---  
.NET (Gateway/Manager API)
EnUpdateMode CIMTConCommon.LiveUpdateMode()  
---  
Python (Manager API)
MTConCommon.LiveUpdateMode  
---  
Return Value
If successful, returns one of the values of [IMTConCommon::EnUpdateMode](imtconcommon_enum.md "Enumerations"). Otherwise, it returns NULL.
IMTConCommon::LiveUpdateMode
Set the mode of update of the trading platform.
C++
MTAPIRES IMTConCommon::LiveUpdateMode( const UINT mode // Update mode )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConCommon.LiveUpdateMode( EnUpdateMode mode // Update mode )  
---  
Python (Manager API)
MTConCommon.LiveUpdateMode  
---  
Parameters
mode
[in] The [IMTConCommon::EnUpdateMode](imtconcommon_enum.md "Enumerations") enumeration is used to pass the mode.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.