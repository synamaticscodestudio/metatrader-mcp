# WriteParamData (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Data Cache Interfaces ](reportapi_cache.md "Data Cache Interfaces") / [ IMTReportCache ](imtreportcache.md "IMTReportCache")/ WriteParamData | [](imtreportcache_writeparamstring.md "WriteParamString") [](imtreportcache_writeparamkeyset.md "WriteParamKeySet") |
| --- | --- | --- |
| --- | --- |

IMTReportCache::WriteParamData
Set the value for the ["Data" parameter](imtreportapi_cache.htm#data).
MTAPIRES IMTReportCache::WriteParamData( const void* data, // Data const UINT size // Data size )  
---  
Parameters
data
[in] A pointer to the data to be written to the "Data" parameter.
size
[in] Size of "data" in bytes.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.