# Mode (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Groups ](config_group.md "Groups") / [ IMTConCommTier ](imtconcommtier.md "IMTConCommTier")/ Mode | [](imtconcommtier_clear.md "Clear") [](imtconcommtier_type.md "Type") |
| --- | --- | --- |
| --- | --- |

IMTConCommTier::Mode
Gets the method of commission charging.
C++
UINT IMTConCommTier::Mode() const  
---  
.NET (Gateway/Manager API)
EnCommissionMode CIMTConCommTier.Mode()  
---  
Python (Manager API)
MTConCommTier.Mode  
---  
Return Value
One of the values of the [IMTConCommTier::EnCommissionMode](imtconcommtier_enum.htm#encommissionmode) enumeration.
IMTConCommTier::Mode
Sets the method of commission charging.
C++
MTAPIRES IMTConCommTier::Mode( const UINT mode // Commission charging method )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConCommTier.Mode( EnCommissionMode mode // Commission charging method )  
---  
Python (Manager API)
MTConCommTier.Mode  
---  
Parameters
mode
[in] To pass the method of commission charging, the [IMTConCommTier::EnCommissionMode](imtconcommtier_enum.htm#encommissionmode) enumeration is used.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.