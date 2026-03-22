# Get Journal (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Common Requests ](webapi_common_request.md "Common Requests")/ Get Journal | [](webapi_common_request.md "Common Requests") [](webapi_old.md "Outdated Rest API") |
| --- | --- | --- |
| --- | --- |

Get trade server Journal
Get the Journal of the trade server to which the Web API application is connected.
Request Format
GET /api/logger/server_request?mode=request mode&type=log type&from=date&to=date&filter=search string POST /api/logger/server_request?mode=request mode&type=log type&from=date&to=date&filter=search string  
---  
Response Format
{ "retcode" : "0 Done", "answer" : [ logs ] } }  
---  
Example
//--- request to the server GET /api/logger/server_request?mode=0&type=0&from=1676894229&to=1676894230&filter=1068 //--- server response { "retcode": "0 Done", "answer": [ { "flags": "0", "code": "0", "type": "2", "datetime": "1676902504", "source": "192.168.0.1", "message": "'1068': server journal (192.145, 2023.02.20 - 2023.02.20)", "datetime_msc": "1676902504541" }, { "flags": "0", "code": "0", "type": "2", "datetime": "1676902504", "source": "192.168.0.1", "message": "'1068': journal (time 125 ms, size: 0 kb)", "datetime_msc": "1676902504661" } ] }  
---  
Request Parameters
  * mode — journal request mode. The mode is specified as a value of the [EnMTLogRequestMode](journal.htm#enmtlogrequestmode) enumeration. For example, 2 means all log types.
  * type — type of events that should be requested from the server journal. The type is specified as a value of the [EnMTLogType](journal.htm#enmtlogtype) enumeration. For example, 0 means all event types.
  * from — the start date for requesting the logs. The date is specified in seconds since 01.01.1970. Only the date is taken into account, while the exact time is ignored.
  * to — the end date for requesting the logs. The date is specified in seconds since 01.01.1970. Only the date is taken into account, while the exact time is ignored.
  * filter — a keyword to search.

Response Parameters
  * retcode — if successful, the command returns [the response code](retcodes_successful.md "Successful completion") 0\. Otherwise, an error code is returned.
  * answer — array of log entries in the JSON format. The description of return fields is available in the [MTLogRecord](mtlogrecord.md "MTLogRecord") section.
