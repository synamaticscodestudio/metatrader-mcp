# SetLoggerFilePath (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ PHP Implementation of Protocol ](php.md "Protocol Implementation in PHP") / [ MTWebAPI Class ](mtwebapi.md "MTWebAPI Class") / [ Logging Management ](php_logging.md "Manage Logging")/ SetLoggerFilePath | [](php_setloggeriswrite.md "SetLoggerIsWrite") [](php_setloggerfileprefix.md "SetLoggerFilePrefix") |
| --- | --- | --- |
| --- | --- |

MTWebAPI::SetLoggerFilePath
Set the path to the folder where you want to place the log files.
void MTWebAPI::SetLoggerFilePath( string $file_path // Path to files )  
---  
Parameters
$file_path
[in] Path to the directory where the log files will be created.
Note
Permissions to write information to the specified folder are required.
If no path is specified, the log files are generated in /tmp directory by default.
The string specifying the path must be passed in the UTF-8 format.