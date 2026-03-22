# FeeManagementAssets (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Funds and ETF ](config_funds.md "Funds and ETF") / [ IMTConFund ](imtconfund.md "IMTConFund")/ FeeManagementAssets | [](imtconfund_feemanagementvalue.md "FeeManagementValue") [](imtconfund_feesuccesscalc.md "FeeSuccessCalc") |
| --- | --- | --- |
| --- | --- |

IMTConFund::FeeManagementAssets
Get the fund management fee calculation mode.
C++
UINT IMTConFund::FeeManagementAssets() const  
---  
.NET (Gateway/Manager API)
uint CIMTConFund.FeeManagementAssets()  
---  
Return Value
Fund management fee calculation mode as a value of the [IMTConFund::EnFeeAssests](imtconfund_enum.htm#enfeeassests) enumeration.
IMTConFund::FeeManagementAssets
Set the fund management fee calculation mode.
C++
MTAPIRES IMTConFund::FeeManagementAssets( const UINT mode // Calculation mode )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConFund.FeeManagementAssets( uint mode // Calculation mode )  
---  
Parameters
mode
[in] Fund management fee calculation mode as a value of the [IMTConFund::EnFeeAssests](imtconfund_enum.htm#enfeeassests) enumeration.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.