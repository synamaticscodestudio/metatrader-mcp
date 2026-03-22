# Type (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Groups ](config_group.md "Groups") / [ IMTConCommTier ](imtconcommtier.md "IMTConCommTier")/ Type | [](imtconcommtier_mode.md "Mode") [](imtconcommtier_value.md "Value") |
| --- | --- | --- |
| --- | --- |

IMTConCommTier::Type
Get the type of commission charging.
C++
UINT IMTConCommTier::Type() const  
---  
.NET (Gateway/Manager API)
EnCommissionVolumeType CIMTConCommTier.Type()  
---  
Python (Manager API)
MTConCommTier.Type  
---  
Return Value
A value from the [IMTConCommTier::EnCommissionVolumeType](imtconcommtier_enum.htm#encommissionvolumetype) enumeration.
IMTConCommTier::Type
Set the type of commission charging.
C++
MTAPIRES IMTConCommTier::Type( const UINT type // Type of commission charging )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConCommTier.Type( EnCommissionVolumeType type // Type of commission charging )  
---  
Python (Manager API)
MTConCommTier.Type  
---  
Parameters
type
[in] The [IMTConCommTier::EnCommissionVolumeType](imtconcommtier_enum.htm#encommissionvolumetype) enumeration is used to pass the type of commission charging.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.