# WriteParamString (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Data Cache Interfaces ](reportapi_cache.md "Data Cache Interfaces") / [ IMTReportCache ](imtreportcache.md "IMTReportCache")/ WriteParamString | [](imtreportcache_writeparamto.md "WriteParamTo") [](imtreportcache_writeparamdata.md "WriteParamData") |
| --- | --- | --- |
| --- | --- |

IMTReportCache::WriteParamString
Set the value for the ["String" parameter](imtreportapi_cache.htm#data).
MTAPIRES IMTReportCache::WriteParamString( LPCWSTR param // Value )  
---  
Parameters
param
[in] Value for the "String" parameter.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.