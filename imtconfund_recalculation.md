# Recalculation (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Funds and ETF ](config_funds.md "Funds and ETF") / [ IMTConFund ](imtconfund.md "IMTConFund")/ Recalculation | [](imtconfund_type.md "Type") [](imtconfund_startdate.md "StartDate") |
| --- | --- | --- |
| --- | --- |

IMTConFund::Recalculation
Get fund chart recalculation mode.
C++
UINT IMTConFund::Recalculation() const  
---  
.NET (Gateway/Manager API)
uint CIMTConFund.Recalculation()  
---  
Return Value
Fund chart recalculation mode as an [IMTConFund::EnRecalculation](imtconfund_enum.htm#enrecalculation) enumeration value.
IMTConFund::Recalculation
Set fund chart recalculation mode.
C++
MTAPIRES IMTConFund::Recalculation( const UINT recalculation // Recalculation mode )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConFund.Recalculation( uint recalculation // Recalculation mode )  
---  
Parameters
recalculation
[in] Fund chart recalculation mode as an [IMTConFund::EnRecalculation](imtconfund_enum.htm#enrecalculation) enumeration value.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.