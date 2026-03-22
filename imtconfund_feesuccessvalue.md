# FeeSuccessValue (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Funds and ETF ](config_funds.md "Funds and ETF") / [ IMTConFund ](imtconfund.md "IMTConFund")/ FeeSuccessValue | [](imtconfund_feesuccessmode.md "FeeSuccessMode") [](imtconfund_feesuccesshwm.md "FeeSuccessHWM") |
| --- | --- | --- |
| --- | --- |

IMTConFund::FeeSuccessValue
Get the success fee amount.
C++
double IMTConFund::FeeSuccessValue() const  
---  
.NET (Gateway/Manager API)
double CIMTConFund.FeeSuccessValue()  
---  
Return Value
Success fee as a percentage of the total returns for the current period or of the profit above the Hurdle Rate (determined by the [IMTConFund::FeeSuccessCalc](imtconfund_feesuccesscalc.md "FeeSuccessCalc") property). 
IMTConFund::FeeSuccessValue
Set the success fee amount.
C++
MTAPIRES IMTConFund::FeeSuccessValue( const double value // Fee )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConFund.FeeSuccessValue( double value // Fee )  
---  
Parameters
value
[in] Success fee as a percentage of the total returns for the current period or of the profit above the Hurdle Rate (determined by the [IMTConFund::FeeSuccessCalc](imtconfund_feesuccesscalc.md "FeeSuccessCalc") property).
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.