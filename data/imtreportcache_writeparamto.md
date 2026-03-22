# WriteParamTo (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Data Cache Interfaces ](reportapi_cache.md "Data Cache Interfaces") / [ IMTReportCache ](imtreportcache.md "IMTReportCache")/ WriteParamTo | [](imtreportcache_writeparamfrom.md "WriteParamFrom") [](imtreportcache_writeparamstring.md "WriteParamString") |
| --- | --- | --- |
| --- | --- |

IMTReportCache::WriteParamTo
Set the value for the ["To" parameter](imtreportapi_cache.htm#data).
MTAPIRES IMTReportCache::WriteParamTo( const INT64 to // Value )  
---  
Parameters
to
[in] Value for the "To" parameter
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.