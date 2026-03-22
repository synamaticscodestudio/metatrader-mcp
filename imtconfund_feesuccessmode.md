# FeeSuccessMode (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Funds and ETF ](config_funds.md "Funds and ETF") / [ IMTConFund ](imtconfund.md "IMTConFund")/ FeeSuccessMode | [](imtconfund_feesuccesscalc.md "FeeSuccessCalc") [](imtconfund_feesuccessvalue.md "FeeSuccessValue") |
| --- | --- | --- |
| --- | --- |

IMTConFund::FeeSuccessMode
Get the time for calculating the success fee in relation to the management fee charges.
C++
UINT IMTConFund::FeeSuccessMode() const  
---  
.NET (Gateway/Manager API)
uint CIMTConFund.FeeSuccessMode()  
---  
Return Value
The time for calculating the success fee in relation to the management fee charges. Passed as a value of the [IMTConFund::EnFeeSuccessModes](imtconfund_enum.htm#enfeesuccessmodes) enumeration.
IMTConFund::FeeSuccessMode
Set the time for calculating the success fee in relation to the management fee charges.
C++
MTAPIRES IMTConFund::FeeSuccessMode( const UINT mode // Calculation mode )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConFund.FeeSuccessMode( uint mode // Calculation mode )  
---  
Parameters
mode
[in] The time for calculating the success fee in relation to the management fee charges. Passed as a value of the [IMTConFund::EnFeeSuccessModes](imtconfund_enum.htm#enfeesuccessmodes) enumeration.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.