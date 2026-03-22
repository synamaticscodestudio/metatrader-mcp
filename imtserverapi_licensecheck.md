# LicenseCheck (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Common Functions ](serverapi_common.md "Common Functions")/ LicenseCheck | [](imtserverapi_about.md "About") [](serverapi_configuration.md "Configuration databases") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::LicenseCheck
Check the plugin license.
MTAPIRES IMTServerAPI::LicenseCheck( LPCWSTR license_name // Name of the license module )  
---  
Parameters
license_name
[in] The name of the license module.
Return Value
An indication of permission to use the plugin in the platform license is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The process of licensing plugins is connected with the MetaTrader 5 platform license, which is issued by MetaQuotes Software Corp. The name of the license module (plugin) is added to the trading platform license upon a request sent by the client company to the technical support team or during the purchase of the plugin from the Market on the technical support website.
To check where it is allowed to use the plugin, the plugin developer should call IMTServerAPI::LicenseCheck method. The name of the license module to check should be passed in this method. The server then checks if the license includes this module. In case it is allowed to use the plugin, the server will return the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, the server returns an error code.
The logic of the plugin in cases when the license has no permission is determined by the developer. It can be termination of operation or a limited demo mode.
Using this logic to verify the license allows developers to distribute their applications with maximum security, since only MetaQuotes Software Corp. can modify the platform license.