# FundAccountCreate (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Main Interface of Reports ](imtreportapi.md "Main Report Interface") / [ Configuration Databases ](imtreportapi_config.md "Configuration Databases") / [ Funds and ETF ](imtreportapi_config_fund.md "Funds and ETF")/ FundAccountCreate | [](imtreportapi_fundcreate.md "FundCreate") [](imtreportapi_fundinvestorcreate.md "FundInvestorCreate") |
| --- | --- | --- |
| --- | --- |

IMTReportAPI::FundAccountCreate
Create a fund manager object.
IMTConFundAccount* IMTReportAPI::FundAccountCreate()  
---  
Return Value
Returns a pointer to the created object implementing the [IMTConFundAccount](imtconfundaccount.md "IMTConFundAccount") interface. Null is returned in case of failure.
Note
The created object must be destroyed by calling the [IMTConFundAccount::Release](imtconfundaccount_release.md "Release") method of this object.