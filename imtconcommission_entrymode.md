# EntryMode (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Groups ](config_group.md "Groups") / [ IMTConCommission ](imtconcommission.md "IMTConCommission")/ EntryMode | [](imtconcommission_chargemode.md "ChargeMode") [](imtconcommission_actionmode.md "ActionMode") |
| --- | --- | --- |
| --- | --- |

IMTConCommission::EntryMode
Get the commission calculation mode depending on the deal direction.
C++
UINT IMTConCommission::EntryMode() const  
---  
.NET (Gateway/Manager API)
EnCommChargeMode CIMTConCommission.EntryMode()  
---  
Python (Manager API)
MTConCommission.EntryMode  
---  
Return Value
A value from the [IMTConCommission::EnCommEntryMode](imtconcommission_enum.htm#encommentrymode) enumeration.
Note
The mode is only used for instantly charged commissions ([IMTConCommission::COMM_CHARGE_INSTANT](imtconcommission_enum.htm#encommchargemode)).
IMTConCommission::EntryMode
Set commission calculation mode depending on the deal direction.
C++
MTAPIRES IMTConCommission::EntryMode( const UINT  mode // Commission charging mode )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConCommission.EntryMode( EnCommChargeMode mode // Charging mode )  
---  
Python (Manager API)
MTConCommission.EntryMode  
---  
Parameters
mode
[in] Commission charging mode depending on the direction of deals. The [IMTConCommission::EnCommEntryMode](imtconcommission_enum.htm#encommentrymode) enumeration is used to pass the mode of commission charging.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.
Note
The mode is only used for instantly charged commissions ([IMTConCommission::COMM_CHARGE_INSTANT](imtconcommission_enum.htm#encommchargemode)).