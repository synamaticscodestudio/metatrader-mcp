# FeeSuccessCalc (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Funds and ETF ](config_funds.md "Funds and ETF") / [ IMTConFund ](imtconfund.md "IMTConFund")/ FeeSuccessCalc | [](imtconfund_feemanagementassets.md "FeeManagementAssets") [](imtconfund_feesuccessmode.md "FeeSuccessMode") |
| --- | --- | --- |
| --- | --- |

IMTConFund::FeeSuccessCalc
Get the success fee calculation mode.
C++
UINT IMTConFund::FeeSuccessCalc() const  
---  
.NET (Gateway/Manager API)
uint CIMTConFund.FeeSuccessCalc()  
---  
Return Value
Success fee calculation mode as a value of the [IMTConFund::EnFeeSuccessCalc](imtconfund_enum.htm#enfeesuccesscalc) enumeration.
IMTConFund::FeeSuccessCalc
Set the success fee calculation mode.
C++
MTAPIRES IMTConFund::FeeSuccessCalc( const UINT mode // Calculation mode )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConFund.FeeSuccessCalc( uint mode // Calculation mode )  
---  
Parameters
mode
[in] Success fee calculation mode as a value of the [IMTConFund::EnFeeSuccessCalc](imtconfund_enum.htm#enfeesuccesscalc) enumeration.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.