# ReasonFlags (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Groups ](config_group.md "Groups") / [ IMTConCommission ](imtconcommission.md "IMTConCommission")/ ReasonFlags | [](imtconcommission_profitmode.md "ProfitMode") [](imtconcommission_turnovercurrency.md "TurnoverCurrency") |
| --- | --- | --- |
| --- | --- |

IMTConCommission::ReasonFlags
Get commission calculation mode depending on the reason for the deal execution.
C++
UINT IMTConCommission::ReasonFlags() const  
---  
.NET (Gateway/Manager API)
EnCommChargeMode CIMTConCommission.ReasonFlags()  
---  
Python (Manager API)
MTConCommission.ReasonFlags  
---  
Return Value
A value from the [IMTConCommission::EnCommReasonFlags](imtconcommission_enum.htm#encommreasonflags) enumeration.
Note
The mode is only used for instantly charged commissions ([IMTConCommission::COMM_CHARGE_INSTANT](imtconcommission_enum.htm#encommchargemode)).
IMTConCommission::ReasonFlags
Set commission calculation mode depending on the reason for the deal execution.
C++
MTAPIRES IMTConCommission::ReasonFlags( const UINT  flags // Commission mode )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConCommission.ReasonFlags( EnCommChargeMode flags // Commission mode )  
---  
Python (Manager API)
MTConCommission.ReasonFlags  
---  
Parameters
flags
[in] Commission calculation mode (flags) depending on the reason for the deal execution. The [IMTConCommission::EnCommReasonFlags](imtconcommission_enum.htm#encommreasonflags) enumeration is used to pass the commission mode.
Return Value
An indication of success is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred and the corresponding code is returned.
Note
The mode is only used for instantly charged commissions ([IMTConCommission::COMM_CHARGE_INSTANT](imtconcommission_enum.htm#encommchargemode)).