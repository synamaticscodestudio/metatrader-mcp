# ActionMode (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Groups ](config_group.md "Groups") / [ IMTConCommission ](imtconcommission.md "IMTConCommission")/ ActionMode | [](imtconcommission_entrymode.md "EntryMode") [](imtconcommission_profitmode.md "ProfitMode") |
| --- | --- | --- |
| --- | --- |

IMTConCommission::ActionMode
Get the commission calculation mode depending on the deal type.
C++
UINT IMTConCommission::ActionMode() const  
---  
.NET (Gateway/Manager API)
EnCommChargeMode CIMTConCommission.ActionMode()  
---  
Python (Manager API)
MTConCommission.ActionMode  
---  
Return Value
A value from the [IMTConCommission::EnCommActionMode](imtconcommission_enum.htm#encommactionmode) enumeration.
Note
The mode is only used for instantly charged commissions ([IMTConCommission::COMM_CHARGE_INSTANT](imtconcommission_enum.htm#encommchargemode)).
IMTConCommission::ActionMode
Set the commission mode depending on the deal type.
C++
MTAPIRES IMTConCommission::ActionMode( const UINT  mode // Commission mode )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConCommission.ActionMode( EnCommChargeMode mode // Commission mode )  
---  
Python (Manager API)
MTConCommission.ActionMode  
---  
Parameters
mode
[in] Commission mode depending on deal type. The commission mode is passed using the [IMTConCommission::EnCommActionMode](imtconcommission_enum.htm#encommactionmode) enumeration.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, a relevant error code is returned.
Note
The mode is only used for instantly charged commissions ([IMTConCommission::COMM_CHARGE_INSTANT](imtconcommission_enum.htm#encommchargemode)).