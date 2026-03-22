# Get Paged (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Daily Reports ](webapi_daily.md "Daily Reports")/ Get Paged | [](webapi_daily_get_batch.md "Get Multiple") [](webapi_daily_get_light.md "Get Light") |
| --- | --- | --- |
| --- | --- |

Get Reports with Pagination
Retrieve daily reports in batch for a list of user logins with pagination.
Request Format
GET /api/daily/get_page?login=logins&from=date&to=date&offset=index&total=number POST /api/daily/get_page?login=logins&from=date&to=date&offset=index&total=number  
---  
Response Format
{ "retcode" : "code description", "answer" : [ description of users ] }  
---  
Example
//--- request to the server /api/daily/get_page?from=1585904106&to=1586768106&login=765114,765115&offset=0,total=2 //--- server response { "retcode" : "0 Done", "answer" :  { "Timestamp" : "132302519992466852", "DatetimePrev" : "1585699199", "Login" : "765114", "Name" : "Test Collateral", "Group" : "demo\\\demoforex-hedged", "Currency" : "USD", "CurrencyDigits" : "2", "Company" : "MetaQuotes DEV", "EMail" : "", "Balance" : "10010.31", "Credit" : "0.00", "InterestRate" : "0.00", "CommissionDaily" : "0.00", "CommissionMonthly" : "0.00", "AgentDaily" : "0.00", ... }, { "Timestamp" : "132303383992178046", "DatetimePrev" : "1585785599", "Login" : "765115", "Name" : "Test Collateral", "Group" : "demo\\\demoforex-hedged", "Currency" : "USD", "CurrencyDigits" : "2", "Company" : "MetaQuotes DEV", "EMail" : "", "Balance" : "10010.31", "Credit" : "0.00", "InterestRate" : "0.00", "CommissionDaily" : "0.00", "CommissionMonthly" : "0.00", "AgentDaily" : "0.00", ... }, ... }  
---  
Request Parameters
  * login — a list of user logins for which to retrieve data. Separated by commas.
  * from — the start date of the period for which reports are requested. Specified in seconds elapsed since 01.01.1970.

  * to — the end date of the period for which reports are requested. Specified in seconds elapsed since 01.01.1970.

  * offset — the index of the report from which to start retrieving data. Indexing starts with 0.
  * total — the number of reports to retrieve. Up to 100 reports can be requested with one command.

Response Parameters
  * retcode — on success, the command returns a [response code](retcodes_successful.md "Successful completion") 0\. Otherwise, the code of the occurred error will be returned.
  * answer — an array of daily reports in JSON format. The complete description of the transmitted data is provided in the ["Data structure"](webapi_daily_data_structure.md "Data Structure") section.
