# MarginRateInitial (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Floating Margin ](config_leverage.md "Floating Margin") / [ IMTConLeverageTier ](imtconleveragetier.md "IMTConLeverageTier")/ MarginRateInitial | [](imtconleveragetier_rangeto.md "RangeTo") [](imtconleveragetier_marginratemaintenance.md "MarginRateMaintenance") |
| --- | --- | --- |
| --- | --- |

IMTConLeverageTier::MarginRateInitial
Get the initial margin rate for a level in a floating margin rule.
C++
double IMTConLeverageTier::MarginRateInitial() const  
---  
.NET (Gateway/Manager API)
double CIMTConLeverageTier.MarginRateInitial()  
---  
Python (Manager API)
MTConLeverageTier.MarginRateInitial  
---  
Return Value
Margin rate.
Note
The resulting initial margin calculated in accordance with the [instrument calculation type](imtconsymbol_calcmode.md "CalcMode") is multiplied by this rate.
IMTConLeverageTier::MarginRateInitial
Set the initial margin rate for a level in a floating margin rule.
C++
MTAPIRES IMTConLeverageTier::MarginRateInitial( const double value // Margin rate )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConLeverageTier.MarginRateInitial( double value // Margin rate )  
---  
Python (Manager API)
MTConLeverageTier.MarginRateInitial  
---  
Parameters
margin_rate
[in] Margin rate.
Return Value
An indication of a successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The resulting initial margin calculated in accordance with the [instrument calculation type](imtconsymbol_calcmode.md "CalcMode") is multiplied by this rate.