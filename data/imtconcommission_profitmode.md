# ProfitMode (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Groups ](config_group.md "Groups") / [ IMTConCommission ](imtconcommission.md "IMTConCommission")/ ProfitMode | [](imtconcommission_actionmode.md "ActionMode") [](imtconcommission_reasonflags.md "ReasonFlags") |
| --- | --- | --- |
| --- | --- |

IMTConCommission::ProfitMode
Get commission calculation mode depending on the deal profit.
C++
UINT IMTConCommission::ProfitMode() const  
---  
.NET (Gateway/Manager API)
EnCommChargeMode CIMTConCommission.ProfitMode()  
---  
Python (Manager API)
MTConCommission.ProfitMode  
---  
Return Value
A value from the [IMTConCommission::EnCommProfitMode](imtconcommission_enum.htm#encommprofitmode) enumeration.
Note
The mode is only used for instantly charged commissions ([IMTConCommission::COMM_CHARGE_INSTANT](imtconcommission_enum.htm#encommchargemode)).
IMTConCommission::ProfitMode
Set commission calculation mode depending on the deal profit.
C++
MTAPIRES IMTConCommission::ProfitMode( const UINT  mode // Commission mode )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConCommission.ProfitMode( EnCommChargeMode mode // Commission mode )  
---  
Python (Manager API)
MTConCommission.ProfitMode  
---  
Parameters
mode
[in] Commission mode depending on the deal profit. The [IMTConCommission::EnCommProfitMode](imtconcommission_enum.htm#encommprofitmode) enumeration is used to pass the commission mode.
Return Value
An indication of success is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred and the corresponding code is returned.
Note
The mode is only used for instantly charged commissions ([IMTConCommission::COMM_CHARGE_INSTANT](imtconcommission_enum.htm#encommchargemode)).