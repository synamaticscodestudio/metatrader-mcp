# Next (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Data Cache Interfaces ](reportapi_cache.md "Data Cache Interfaces") / [ IMTReportCacheValue ](imtreportcachevalue.md "IMTReportCacheValue")/ Next | [](imtreportcachevalue_size.md "Size") [](imtreportcachekeyset.md "IMTReportCacheKeySet") |
| --- | --- | --- |
| --- | --- |

IMTReportCacheValue::Next
Go to the next key.
MTAPIRES IMTReportCacheValue::Next()  
---  
Return Value
The [MT_RET_OK](retcodes_successful.md "Successful completion") response code indicates that the next key exists and it has been received.
The [MT_RET_OK_NONE](retcodes_successful.md "Successful completion") response code indicates the end of the iteration.
Othre response code indicate errors.