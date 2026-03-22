# SetLoggerFilePrefix (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ PHP Implementation of Protocol ](php.md "Protocol Implementation in PHP") / [ MTWebAPI Class ](mtwebapi.md "MTWebAPI Class") / [ Logging Management ](php_logging.md "Manage Logging")/ SetLoggerFilePrefix | [](php_setloggerfilepath.md "SetLoggerFilePath") [](php_setloggerwritedebug.md "SetLoggerWriteDebug") |
| --- | --- | --- |
| --- | --- |

MTWebAPI::SetLoggerFilePrefix
Set a prefix for naming log files.
void MTWebAPI::SetLoggerFilePrefix( string $prefix // Prefix )  
---  
Parameters
$prefix
[in] A prefix for naming log files.
Note
Log files are named the following way: prefixYYYY_MM_DD.log.
The string specifying the prefix must be passed in the UTF-8 format.