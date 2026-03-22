# Get Light (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Daily Reports ](webapi_daily.md "Daily Reports")/ Get Light | [](webapi_daily_get_page.md "Get Paged") [](webapi_daily_get_light_batch.md "Get Multiple Light") |
| --- | --- | --- |
| --- | --- |

Get Light Daily Reports
The request allows receiving light versions of daily reports by a date range and a login. Unlike full daily reports, light reports do not include open orders and positions.
Request Format
GET /api/daily/get_light?from=date&to=date&login=login POST /api/daily/get_light?from=date&to=date&login=login  
---  
Response Format
{ "retcode" : "code description", "answer" :  { report description }, { report description }, ... }  
---  
Example
//--- request to the server /api/daily/get_light?from=1585904106&to=1586768106&login=765114 //--- server response { "retcode" : "0 Done", "answer" :  { "Timestamp" : "132302519992466852", "DatetimePrev" : "1585699199", "Login" : "765114", "Name" : "Test Collateral", "Group" : "demo\\\demoforex-hedged", "Currency" : "USD", "CurrencyDigits" : "2", "Company" : "MetaQuotes DEV", "EMail" : "", "Balance" : "10010.31", "Credit" : "0.00", "InterestRate" : "0.00", "CommissionDaily" : "0.00", "CommissionMonthly" : "0.00", "AgentDaily" : "0.00", ... }, { "Timestamp" : "132303383992178046", "DatetimePrev" : "1585785599", "Login" : "765114", "Name" : "Test Collateral", "Group" : "demo\\\demoforex-hedged", "Currency" : "USD", "CurrencyDigits" : "2", "Company" : "MetaQuotes DEV", "EMail" : "", "Balance" : "10010.31", "Credit" : "0.00", "InterestRate" : "0.00", "CommissionDaily" : "0.00", "CommissionMonthly" : "0.00", "AgentDaily" : "0.00", ... }, ... }  
---  
Request Parameters
  * login � client login for which you wish to receive daily reports.
  * from � the beginning of the period for requesting reports. The date is specified in seconds elapsed since 01.01.1970.
  * to � the end of the period for requesting reports. The date is specified in seconds elapsed since 01.01.1970.

Response Parameters
  * retcode � if successful, the command returns [the response code](retcodes_successful.md "Successful completion") 0\. Otherwise, an error code is returned.
  * answer � an array of daily reports in JSON format. The complete description of the passed data is given in the ["Data structure"](webapi_daily_data_structure.md "Data Structure") section.

Note
The request is less resource intensive than [/api/daily/get](webapi_daily_get.md "Get").