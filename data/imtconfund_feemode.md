# FeeMode (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Funds and ETF ](config_funds.md "Funds and ETF") / [ IMTConFund ](imtconfund.md "IMTConFund")/ FeeMode | [](imtconfund_maxinvestors.md "MaxInvestors") [](imtconfund_feeperiod.md "FeePeriod") |
| --- | --- | --- |
| --- | --- |

IMTConFund::FeeMode
Get the fund management and success fee calculation mode.
C++
UINT IMTConFund::FeeMode() const  
---  
.NET (Gateway/Manager API)
uint CIMTConFund.FeeMode()  
---  
Return Value
Fund management and success fee calculation modes as a value of the [IMTConFund::EnFeeMode](imtconfund_enum.htm#enfeemode) enumeration.
IMTConFund::FeeMode
Set the fund management and success fee calculation mode.
C++
MTAPIRES IMTConFund::FeeMode( const UINT mode // Calculation mode )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConFund.FeeMode( uint mode // Calculation mode )  
---  
Parameters
mode
[in] Fund management and success fee calculation modes as a value of the [IMTConFund::EnFeeMode](imtconfund_enum.htm#enfeemode) enumeration.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.