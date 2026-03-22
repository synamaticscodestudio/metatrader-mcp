# FeeSuccessHWM (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Funds and ETF ](config_funds.md "Funds and ETF") / [ IMTConFund ](imtconfund.md "IMTConFund")/ FeeSuccessHWM | [](imtconfund_feesuccessvalue.md "FeeSuccessValue") [](imtconfund_feesuccesshurdlerate.md "FeeSuccessHurdleRate") |
| --- | --- | --- |
| --- | --- |

IMTConFund::FeeSuccessHWM
Get the period for which the excess of the hurdle rate is determined when assessing the fund management success.
C++
UINT IMTConFund::FeeSuccessHWM() const  
---  
.NET (Gateway/Manager API)
uint CIMTConFund.FeeSuccessHWM()  
---  
Return Value
Period as a value of the [IMTConFund::EnFeeSuccessHWMType](imtconfund_enum.htm#enfeesuccesshwmtype) enumeration value.
IMTConFund::FeeSuccessHWM
Set the period for which the excess of the hurdle rate is determined when assessing the fund management success.
C++
MTAPIRES IMTConFund::FeeSuccessHWM( const UINT mode // Period )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConFund.FeeSuccessHWM( uint mode // Period )  
---  
Parameters
mode
[in] Period as the [IMTConFund::EnFeeSuccessHWMType](imtconfund_enum.htm#enfeesuccesshwmtype) enumeration value.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.