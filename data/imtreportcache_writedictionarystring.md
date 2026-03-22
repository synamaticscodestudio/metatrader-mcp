# WriteDictionaryString (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Data Cache Interfaces ](reportapi_cache.md "Data Cache Interfaces") / [ IMTReportCache ](imtreportcache.md "IMTReportCache")/ WriteDictionaryString | [](imtreportcache_writemissingkeys.md "WriteMissingKeys") [](imtreportcachevalue.md "IMTReportCacheValue") |
| --- | --- | --- |
| --- | --- |

IMTReportCache::WriteDictionaryString
Add a string (value) to the dictionary and return its position.
MTAPIRES IMTReportCache::WriteDictionaryString( const UINT dictionary_id, // Dictionary identifier LPCWSTR string, // String UINT& pos // Position )  
---  
Parameters
dictionary_id
[in] Dictionary identifier. If the dictionary with the specified ID does not exist, it will be created.
string
[in] The string to add.
pos
[out] The position in the dictionary, at which the string was added.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.