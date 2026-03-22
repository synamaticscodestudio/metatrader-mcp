# ChargeMode (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Groups ](config_group.md "Groups") / [ IMTConCommission ](imtconcommission.md "IMTConCommission")/ ChargeMode | [](imtconcommission_rangemode.md "RangeMode") [](imtconcommission_entrymode.md "EntryMode") |
| --- | --- | --- |
| --- | --- |

IMTConCommission::ChargeMode
Get the time of commission charging.
C++
UINT IMTConCommission::ChargeMode() const  
---  
.NET (Gateway/Manager API)
EnCommChargeMode CIMTConCommission.ChargeMode()  
---  
Python (Manager API)
MTConCommission.ChargeMode  
---  
Return Value
A value of the [IMTConCommission::EnCommChargeMode](imtconcommission_enum.htm#encommchargemode) enumeration.
IMTConCommission::ChargeMode
Set the time of commission charging.
C++
MTAPIRES IMTConCommission::ChargeMode( const UINT  mode // Charging mode )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConCommission.ChargeMode( EnCommChargeMode mode // Charging mode )  
---  
Python (Manager API)
MTConCommission.ChargeMode  
---  
Parameters
mode
[in] Tome of commission charging. The [IMTConCommission::EnCommChargeMode](imtconcommission_enum.htm#encommchargemode) enumeration is used to pass the mode of commission charging.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.