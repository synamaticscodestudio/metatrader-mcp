# StartDate (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Funds and ETF ](config_funds.md "Funds and ETF") / [ IMTConFund ](imtconfund.md "IMTConFund")/ StartDate | [](imtconfund_recalculation.md "Recalculation") [](imtconfund_enddate.md "EndDate") |
| --- | --- | --- |
| --- | --- |

IMTConFund::StartDate
Get the fund operation start date.
C++
INT64 IMTConFund::StartDate() const  
---  
.NET (Gateway/Manager API)
long CIMTConFund.StartDate()  
---  
Return Value
Fund operation start date, in seconds that have elapsed since 01.01.1970.
IMTConFund::StartDate
Set the fund operation start date.
C++
MTAPIRES IMTConFund::StartDate( const INT64 date // Operation start )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConFund.StartDate( long date // Operation start )  
---  
Parameters
time
[in] Fund operation start date, in seconds that have elapsed since 01.01.1970.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.