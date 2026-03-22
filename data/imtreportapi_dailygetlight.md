# DailyGetLight (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Main Interface of Reports ](imtreportapi.md "Main Report Interface") / [ Daily Reports ](imtreportapi_daily.md "Daily Reports Database Functions")/ DailyGetLight | [](imtreportapi_dailyget.md "DailyGet") [](imtreportapi_dailyselect.md "DailySelect") |
| --- | --- | --- |
| --- | --- |

IMTReportAPI::DailyGetLight
Get the eased version of a daily report.
MTAPIRES IMTReportAPI::DailyGetLight( const UINT64 login, // Client login const INT64 datetime, // Date and time IMTDaily *daily // An object of a daily report )  
---  
Parameters
login
[in] The login of a client.
datetime
[in] Daily report generation date and time. The date is specified in seconds that have elapsed since 01.01.1970. Daily reports for the period can be requested using the IMTReportAPI::DailyGetLight second variant to get a report generation date and time. Then reports generation date and time can be stored and used in the function current variant.
*daily
[out] An object of a daily report. The daily object must be first created using the [IMTReportAPI::DailyCreate](imtreportapi_dailycreate.md "DailyCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method submits all daily report parameters except orders ([IMTDaily::Order*](imtdaily_orderadd.md "OrderAdd")) and positions ([IMTDaily::Position*](imtdaily_positionadd.md "PositionAdd")).
Request for eased reports allows to save resources.
IMTReportAPI::DailyGetLight
Get an eased daily reports array.
MTAPIRES IMTReportAPI::DailyGetLight( const UINT64 login, // Client login const INT64 from, // Beginning of period const INT64 to, // End of period IMTDailyArray *daily // Reports array )  
---  
Parameters
login
[in] The login of a client.
from
[in] The beginning of the period for which you need to get daily reports. The date is specified in seconds that have elapsed since 01.01.1970.
to
[in] The end of the period for which you need to get daily reports. The date is specified in seconds that have elapsed since 01.01.1970.
*daily
[out] An object of the array of daily reports. The daily object must be first created using the [IMTReportAPI::DailyCreateArray](imtreportapi_dailycreatearray.md "DailyCreateArray") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method submits all daily report parameters except orders ([IMTDaily::Order*](imtdaily_orderadd.md "OrderAdd")) and positions ([IMTDaily::Position*](imtdaily_positionadd.md "PositionAdd")).
Request for eased reports allows to save resources.