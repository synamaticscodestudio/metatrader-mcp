# FeeSuccessHurdleRate (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Funds and ETF ](config_funds.md "Funds and ETF") / [ IMTConFund ](imtconfund.md "IMTConFund")/ FeeSuccessHurdleRate | [](imtconfund_feesuccesshwm.md "FeeSuccessHWM") [](imtconfund_statecurrentinvestors.md "StateCurrentInvestors") |
| --- | --- | --- |
| --- | --- |

IMTConFund::FeeSuccessHurdleRate
Get the hurdle rate.
C++
double IMTConFund::FeeSuccessHurdleRate() const  
---  
.NET (Gateway/Manager API)
double CIMTConFund.FeeSuccessHurdleRate()  
---  
Return Value
Hurdle rate as an annual percentage.
IMTConFund::FeeSuccessHurdleRate
Set the hurdle rate.
C++
MTAPIRES IMTConFund::FeeSuccessHurdleRate( const double rate // Hurdle rate )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConFund.FeeSuccessHurdleRate( double rate // Hurdle rate )  
---  
Parameters
rate
[in] Hurdle rate as an annual percentage.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.