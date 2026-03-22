# FeePeriod (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Funds and ETF ](config_funds.md "Funds and ETF") / [ IMTConFund ](imtconfund.md "IMTConFund")/ FeePeriod | [](imtconfund_feemode.md "FeeMode") [](imtconfund_feeaccount.md "FeeAccount") |
| --- | --- | --- |
| --- | --- |

IMTConFund::FeePeriod
Get the fund management and success fee calculation period.
C++
UINT IMTConFund::FeePeriod() const  
---  
.NET (Gateway/Manager API)
uint CIMTConFund.FeePeriod()  
---  
Return Value
Fund management and success fee calculation period, as a value of the [IMTConFund::EnFeePeriod](imtconfund_enum.htm#enfeeperiod) enumeration.
IMTConFund::FeePeriod
Set the fund management and success fee calculation period.
C++
MTAPIRES IMTConFund::FeePeriod( const UINT period // Calculation period )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConFund.FeePeriod( uint period // Calculation period )  
---  
Parameters
period
[in] Fund management and success fee calculation period, as a value of the [IMTConFund::EnFeePeriod](imtconfund_enum.htm#enfeeperiod) enumeration.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.