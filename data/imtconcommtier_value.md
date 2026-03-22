# Value (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Groups ](config_group.md "Groups") / [ IMTConCommTier ](imtconcommtier.md "IMTConCommTier")/ Value | [](imtconcommtier_type.md "Type") [](imtconcommtier_minimal.md "Minimal") |
| --- | --- | --- |
| --- | --- |

IMTConCommTier::Value
Get the amount of commission.
C++
double IMTConCommTier::Value() const  
---  
.NET (Gateway/Manager API)
double CIMTConCommTier.Value()  
---  
Python (Manager API)
MTConCommTier.Value  
---  
Return Value
Commission amount. Commission units depend on the charging method, which can be obtained using [IMTConCommTier::Mode](imtconcommtier_mode.md "Mode").
IMTConCommTier::Value
Set the amount of commission.
C++
MTAPIRES IMTConCommTier::Value( const double value // Commission amount )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConCommTier.Value( double value // Commission amount )  
---  
Python (Manager API)
MTConCommTier.Value  
---  
Parameters
value
[in] Commission amount. Commission units depend on the charging method, which can be obtained using [IMTConCommTier::Mode](imtconcommtier_mode.md "Mode").
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.